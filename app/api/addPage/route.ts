import { NextRequest, NextResponse } from 'next/server';
import { join, extname } from 'path';
import { promises as fs, createReadStream } from 'fs';
import path from 'path';
import { Readable } from 'stream';
import decompress from 'decompress';


const { writeFile, mkdir } = fs;
const DATA_FOLDER = 'public/data';
const IMAGES_FOLDER = 'public/images/content'; // Change this to your desired folder
const FILE_NAME = 'manga.json';

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const formData = await req.formData();
        const name = formData.get('name')?.toString() || '';
        const index = formData.get('index')?.toString() || '';
        const id = formData.get('id')?.toString() || '';
        const sourcePath = path.join(process.cwd(), DATA_FOLDER, FILE_NAME);
        const existingData = await fs.readFile(sourcePath, 'utf8');
        const mangaList = JSON.parse(existingData);
        const fileKeys = Array.from(formData.keys()).filter(key => formData.get(key) instanceof File);
        const targetManga = mangaList.find((manga: any) => manga.id === index);
        const targetChapter = targetManga.chapters.find((chapter: any) => chapter.id === id);
        const endPoint = targetChapter.number;

        if (fileKeys.length === 0) {
            return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
        }

        for (const key of fileKeys) {
            const file: File = formData.get(key) as File;
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes); // Convert to Buffer
            const fileName = file.name;
            const ext = extname(fileName).toLowerCase();

            try {
                if (ext === '.zip') {
                    await handleZipFile(buffer, name, endPoint, mangaList, index, id);
                } else {
                    const filePath = join(IMAGES_FOLDER, name, endPoint, fileName);
                    await mkdir(path.dirname(filePath), { recursive: true });

                    // Rename the file to a sequential number
                    const newFileName = await getSequentialFileName(IMAGES_FOLDER, name, endPoint, ext);
                    const newFilePath = join(IMAGES_FOLDER, name, endPoint, newFileName);
                    await writeFile(newFilePath, buffer);

                    // Update the image source
                    const imageSource = `/images/content/${name}/${endPoint}/${newFileName}`;

                    if (targetManga && targetChapter) {
                        if (!targetChapter.images) {
                            targetChapter.images = [];
                        }

                        targetChapter.images.push({ "source": imageSource });
                    } else {
                        console.error('Manga or Chapter not found:', index, id);
                    }
                }
            } catch (error) {
                console.error('Error processing file:', error);
                return NextResponse.json({ error: "Internal server error" }, { status: 500 });
            }
        }

        await fs.writeFile(sourcePath, JSON.stringify(mangaList, null, 2));
        return NextResponse.json({ message: "Files uploaded successfully" });

    } catch (error) {
        console.error('Error uploading files:', error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

async function handleZipFile(zipBuffer: Buffer, name: string, endPoint: string, mangaList: any[], index: string, id: string): Promise<void> {
    const targetDirectory = `${IMAGES_FOLDER}/${name}/${endPoint}`;

    try {
        await decompress(zipBuffer, targetDirectory);

        const imageSources = await getImageSourcesFromDirectory(targetDirectory, name, endPoint);

        if (!imageSources || imageSources.length === 0) {
            throw new Error('No images found in the zip file.');
        }

        const targetManga = mangaList.find((manga: any) => manga.id === index);

        if (targetManga) {
            const targetChapter = targetManga.chapters.find((chapter: any) => chapter.id === id);

            if (targetChapter) {
                if (!targetChapter.images) {
                    targetChapter.images = [];
                }

                const newImages = await renameImagesSequentially(imageSources, IMAGES_FOLDER, name, endPoint);
                targetChapter.images.push(...newImages.map(source => ({ "source": source })));
            } else {
                console.error('Chapter not found:', id);
            }
        } else {
            console.error('Manga not found:', index);
        }
    } catch (error) {
        console.error('Error handling zip file:', error);
        throw error;
    }
}

async function getImageSourcesFromDirectory(directoryPath: string, name: string, endPoint: string): Promise<string[]> {
    const files = await fs.readdir(directoryPath);
    return files.map(file => `${IMAGES_FOLDER}/${name}/${endPoint}/${file}`);
}

async function getSequentialFileName(folder: string, name: string, endPoint: string, ext: string): Promise<string> {
    const files = await fs.readdir(join(folder, name, endPoint));
    const count = files.length;
    return `${count}${ext}`;
}

async function renameImagesSequentially(imageSources: string[], folder: string, name: string, endPoint: string): Promise<string[]> {
    const newImages: string[] = [];
    const extMap = new Map<string, number>();

    for (const source of imageSources) {
        const ext = extname(source).toLowerCase();
        const count = extMap.get(ext) || 0;
        extMap.set(ext, count + 1);

        const newFileName = `${count}${ext}`;
        const newFilePath = join(folder, name, endPoint, newFileName);
        await fs.rename(source, newFilePath);

        newImages.push(`/images/content/${name}/${endPoint}/${newFileName}`);

    }

    return newImages;
}


async function bufferToStream(buffer: Buffer): Promise<Readable> {
    const readable = new Readable();
    readable._read = () => { };
    readable.push(buffer);
    readable.push(null);
    return readable;
}
