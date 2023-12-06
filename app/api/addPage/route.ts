import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';
import { promises as fs } from 'fs';
import path from 'path';

const { writeFile } = fs;
const DATA_FOLDER = 'public/data';
const FILE_NAME = 'manga.json';

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const formData = await req.formData();

        // Extract name and title from formData
        const title = formData.get('title')?.toString() || '';
        const name = formData.get('name')?.toString() || '';
        const index = formData.get('index')?.toString() || '';
        const id = formData.get('id')?.toString() || '';
        const sourcePath = path.join(process.cwd(), DATA_FOLDER, FILE_NAME);
        const existingData = await fs.readFile(sourcePath, 'utf8');
        const mangaList = JSON.parse(existingData);

        // Get an array of file keys
        const fileKeys = Array.from(formData.keys()).filter(key => formData.get(key) instanceof File);

        // Check if there are any files
        if (fileKeys.length === 0) {
            return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
        }

        // Loop through each file and save it
        for (let i = 0; i < fileKeys.length; i++) {
            const key = fileKeys[i];
            const file: File = formData.get(key) as File;
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            // Rename the file to index.jpg
            const fileName = `${i}.jpg`;

            // Append the file index to the field name
            const filePath = join('public/images/content', name, title, fileName);

            // Save the file
            await writeFile(filePath, buffer);

            // Update manga data with the new image source
            const imageSource = `/images/content/${name}/${title}/${fileName}`;
            const targetManga = mangaList.find((manga: any) => manga.id === index);

            if (targetManga) {
                const targetChapter = targetManga.chapters.find((chapter: any) => chapter.id === id);

                if (targetChapter) {
                    // Check if the images array exists, and initialize it if not
                    if (!targetChapter.images) {
                        targetChapter.images = [];
                    }

                    targetChapter.images.push({ "source": imageSource });
                } else {
                    console.error('Chapter not found:', id);
                }
            } else {
                console.error('Manga not found:', index);
            }
        }

        // Save the updated manga data back to the JSON file
        await fs.writeFile(sourcePath, JSON.stringify(mangaList, null, 2));

    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }

    return NextResponse.json({ message: "Files uploaded successfully" });
}
