import { promises as fs } from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const formData = await req.json();
    const { name, info, id, author, date, genre1, genre2, genre3, cover, chapters } = formData;

    const UPLOAD_FOLDER = 'public/images/content';
    const DATA_FOLDER = 'public/data';
    const FILE_NAME = 'manga.json';
    
    const dataFolderPath = path.join(process.cwd(), UPLOAD_FOLDER, name);
    await fs.mkdir(dataFolderPath, { recursive: true });

    const filePath = path.join(DATA_FOLDER, FILE_NAME);
    const existingData = await fs.readFile(filePath, 'utf8');
    const manga = JSON.parse(existingData);
    manga.push({ id, name, author, date, info, genre1, genre2, genre3, cover, chapters });
    await fs.writeFile(filePath, JSON.stringify(manga), 'utf8');
  } catch (error) {
    console.error('Error adding manga:', error);
    return new Response('Failed to add manga', { status: 500 });
  }
  return NextResponse.json('added manga');
}
