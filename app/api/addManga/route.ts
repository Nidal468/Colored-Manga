import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';
import { promises as fs } from 'fs';
import path from 'path';

const { writeFile, mkdir, readFile } = fs;

const UPLOAD_FOLDER = 'public/images/content';
const DATA_FOLDER = 'public/data';
const FILE_NAME = 'manga.json';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const formData = await req.formData();

    const getFormValue = (fieldName: any, defaultValue = '') =>
      formData.get(fieldName)?.toString() || defaultValue;

    const id = getFormValue('id');
    const name = getFormValue('name');
    const author = getFormValue('author');
    const date = getFormValue('date');
    const info = getFormValue('info');
    const genre1 = getFormValue('genre1');
    const genre2 = getFormValue('genre2');
    const genre3 = getFormValue('genre3');
    const cover = getFormValue('cover');
    const totalViews = getFormValue('totalViews');
    const synopsis = getFormValue('synopsis');

    const chapters = formData.getAll('chapters[]');
    const file = formData.get('file') as File;

    const dataFolderPath = path.join(process.cwd(), UPLOAD_FOLDER, name);
    await mkdir(dataFolderPath, { recursive: true });

    const filePath = path.join(DATA_FOLDER, FILE_NAME);
    let existingData = '';

    try {
      existingData = await readFile(filePath, 'utf8');
    } catch (readError) {
      console.error('Error reading manga file:', readError);
    }

    const manga = existingData ? JSON.parse(existingData) : [];
    manga.push({ id, name, author, date, info, genre1, genre2, genre3, cover, chapters, totalViews, synopsis });
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
