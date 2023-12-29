import { NextRequest, NextResponse } from 'next/server';
import { join, extname } from 'path';
import { promises as fs } from 'fs';
import path from 'path';


const { writeFile, mkdir } = fs;
const DATA_FOLDER = 'public/data';
const IMAGES_FOLDER = 'public/images/content'; // Change this to your desired folder
const FILE_NAME = 'manga.json';

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const formData = await req.formData();
        const name = formData.get('name')?.toString() || '';
        const index = formData.get('manga')?.toString() || '';
        const id = formData.get('chapter')?.toString() || '';
        const sourcePath = path.join(process.cwd(), DATA_FOLDER, FILE_NAME);
        const existingData = await fs.readFile(sourcePath, 'utf8');
        const mangaList = JSON.parse(existingData);
        const fileKeys = Array.from(formData.keys()).filter(key => formData.get(key) instanceof File);
        const targetManga = mangaList.find((manga: any) => manga.id === index);
        const targetChapter = targetManga.chapters.find((chapter: any) => chapter.id === id);
        const endPoint = targetChapter.number;

        if (fileKeys.length === 0) {
            return NextResponse.json({ error: "No files uploaded or incorrect field name" }, { status: 400 });
        }

        for (const key of fileKeys) {
            const file: File = formData.get(key) as File;
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes); // Convert to Buffer
            const fileName = file.name;
            const ext = extname(fileName).toLowerCase();
            console.log(fileName)
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
                const lastFileName = newFileName;
                return NextResponse.json({message: 'lastfilename', lastFileName})
        }

        await fs.writeFile(sourcePath, JSON.stringify(mangaList, null, 2));
        return NextResponse.json({ message: "Files uploaded successfully"});

    } catch (error) {
        console.error('Error uploading files:', error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

async function getSequentialFileName(folder: string, name: string, endPoint: string, ext: string): Promise<string> {
    const files = await fs.readdir(join(folder, name, endPoint));
    const count = files.length;
    return `${count}${ext}`;
}
