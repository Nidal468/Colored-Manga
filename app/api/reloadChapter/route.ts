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
        const formData = await req.formData();
        const mangaId = formData.get('manga')?.toString();
        
        
        
        const filePath = path.join(DATA_FOLDER, FILE_NAME);
        const existingData = await readFile(filePath, 'utf8');
        const data = JSON.parse(existingData);
        const selectedManga = data.find((data: any) => data.id === mangaId);
        const folderPath = path.join(process.cwd(), UPLOAD_FOLDER, selectedManga.name);
        const fileNames = await readFolderContents(folderPath);
        const existingMangaIndex = data.findIndex((m: any) => m.id === mangaId);

        if (existingMangaIndex !== -1) {
            const existingManga = data[existingMangaIndex];
            
            fileNames.forEach(async (file: any) => {
                const existingChapter = existingManga.chapters.find((c: any) => c.number === file);
                
                if (!existingChapter) {
                    const currentDate = new Date();
                    const formattedDate = new Intl.DateTimeFormat('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                    }).format(currentDate);

                    const newChapter = {
                        id: new Date().getTime().toString(),
                        title: '',
                        date: formattedDate,
                        number: file,
                        viewed: []
                    };

                    existingManga.chapters.push(newChapter);
                }
            });
        }

        // Check if any names in the JSON file are not in the array
        data.forEach(async (m: any) => {
            if (!fileNames.includes(m.name)) {
                // Do something with the manga data that is not in the array
            }
        });

        await writeFile(filePath, JSON.stringify(data), 'utf8');
    } catch (error) {
        console.error('Error:', error);
        // Handle the error appropriately
    }
    return NextResponse.json('we good');
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
