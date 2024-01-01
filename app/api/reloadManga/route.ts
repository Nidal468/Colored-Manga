import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';
import { promises as fs } from 'fs';
import path from 'path';

const { writeFile, readFile } = fs;

const UPLOAD_FOLDER = 'public/images/content';
const DATA_FOLDER = 'public/data';
const FILE_NAME = 'manga.json';

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const folderPath = path.join(process.cwd(), UPLOAD_FOLDER);
        const fileNames = await readFolderContents(folderPath);
        const filePath = path.join(DATA_FOLDER, FILE_NAME);
        const existingData = await readFile(filePath, 'utf8');
        const manga = JSON.parse(existingData);

        fileNames.forEach(async (file: any) => {
            // Check if manga with the same name already exists
            const existingManga = manga.find((m: any) => m.name === file);

            if (!existingManga) {
                const currentDate = new Date();
                const formattedDate = new Intl.DateTimeFormat('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                }).format(currentDate);

                const data = {
                    id: new Date().getTime().toString(),
                    name: file,
                    date: formattedDate,
                    author: '',
                    info: '',
                    synopsis: '',
                    genre1: '',
                    genre2: '',
                    genre3: '',
                    chapters: [],
                    totalViews: 0,
                    cover: '',
                };

                manga.push(data);
            }
        });

        // Check if any names in the JSON file are not in the array
        manga.forEach(async (m: any) => {
            if (!fileNames.includes(m.name)) {
                // Do something with the manga data that is not in the array
            }
        });

        await writeFile(filePath, JSON.stringify(manga), 'utf8');
    } catch (error) {
        console.error('Error:', error);
        // Handle the error appropriately
    }
    return NextResponse.json('we good')
}

async function readFolderContents(folderPath: string): Promise<string[]> {
    try {
        const fileNames = await fs.readdir(folderPath);
        return fileNames;
    } catch (error) {
        console.error('Error reading folder contents:', error);
        throw error;
    }
}
