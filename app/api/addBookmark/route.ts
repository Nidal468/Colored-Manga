import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const { writeFile } = fs;

const DATA_FOLDER = 'public/data';
const FILE_NAME = 'bookmark.json';

export async function POST(req: NextRequest, res: NextResponse) {

  try {
    const formData = await req.formData();
    const id = formData.get('id')?.toString();
    const filePath = path.join(DATA_FOLDER, FILE_NAME);
    const read = await fs.readFile(filePath, 'utf8');
    const bookmark = JSON.parse(read);
    bookmark.push({ id });
    await writeFile(filePath, JSON.stringify(bookmark), 'utf8');

  } catch (error) {
    console.error('Error adding manga:', error);
    return new Response('Failed to add manga', { status: 500 });
  }
  return NextResponse.json('added manga');
}
