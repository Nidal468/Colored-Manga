import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';
import { promises as fs } from 'fs';
import path from 'path';

const { writeFile } = fs;

const UPLOAD_FOLDER = 'public/images/content';
const DATA_FOLDER = 'public/data';
const FILE_NAME = 'manga.json';

export async function POST(req: NextRequest, res: NextResponse) {

  try {
    const formData = await req.formData();
    const name = formData.get('name')?.toString() || '';
    const info = formData.get('info')?.toString() || '';
    const id = formData.get('id')?.toString() || '';
    const author = formData.get('author')?.toString() || '';
    const date = formData.get('date')?.toString() || '';
    const genre1 = formData.get('genre1')?.toString() || '';
    const genre2 = formData.get('genre2')?.toString() || '';
    const genre3 = formData.get('genre3')?.toString() || '';
    const cover = formData.get('cover')?.toString() || '';
    const chapters = formData.get('chapters[]') || [];
    const viewed = formData.get('viewed[]') || [];

    const file: File = formData.get('file') as File;
    const dataFolderPath = path.join(process.cwd(), UPLOAD_FOLDER, name);
    await fs.mkdir(dataFolderPath, { recursive: true });

    const filePath = path.join(DATA_FOLDER, FILE_NAME);

    let existingData = '';
    try {
      existingData = await fs.readFile(filePath, 'utf8');
    } catch (readError) {
      // Handle the case when the file doesn't exist or is empty
      console.error('Error reading manga file:', readError);
    }

    const manga = existingData ? JSON.parse(existingData) : [];
    manga.push({ id, name, author, date, info, genre1, genre2, genre3, cover, chapters, viewed});
    await writeFile(filePath, JSON.stringify(manga), 'utf8');

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const coverFileName = file.name;
    const coverPath = join('public/images/cover', coverFileName);
    await writeFile(coverPath, buffer);

  } catch (error) {
    console.error('Error adding manga:', error);
    return new Response('Failed to add manga', { status: 500 });
  }
  return NextResponse.json('added manga');
}
