import { promises as fs } from 'fs';
import path from 'path';
import {NextRequest, NextResponse} from 'next/server'

export async function POST(req: NextRequest , res: NextRequest) {
    try {

    const formData = await req.json()
    const { name, info, id, author, date, genre1, genre2, genre3} = formData;
    const DATA_FOLDER = 'public/data';
    const FILE_NAME = 'manga.json';
    const filePath = path.join(process.cwd(), DATA_FOLDER, FILE_NAME);
    const existingData = await fs.readFile(filePath, 'utf8');
    const manga = JSON.parse(existingData);
    manga.push({ id, name, author, date , info, genre1, genre2, genre3});
    await fs.writeFile(filePath, JSON.stringify(manga), 'utf8');
    } catch (error) {
       
        console.error('Error adding manga:', error);
        return new Response('Failed to add manga', { status: 500 });
      }
    return NextResponse.json("added manga")
}