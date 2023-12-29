import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';
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
        const targetManga = mangaList.find((manga: any) => manga.id === index);
        const targetChapter = targetManga?.chapters.find((chapter: any) => chapter.id === id);
        const endPoint = targetChapter?.number;
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded or incorrect field name" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const fileName = file.name;
        const ext = path.extname(fileName).toLowerCase();
        const filePath = join(IMAGES_FOLDER, name, endPoint, fileName);

        // Ensure sequential operations using Promise.all
        await Promise.all([
            mkdir(path.dirname(filePath), { recursive: true }),
            writeFile(filePath, buffer),
        ]);

        return NextResponse.json({ message: 'File uploaded successfully' });

    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
