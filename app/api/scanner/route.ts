import { promises as fs, readdir } from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

const DATA_FOLDER = 'public/data';
const Draft_Folder = 'draft.json';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const formData = await req.formData();
    const manga = formData.get('manga')?.toString();
    const chapters = formData.get('chapters')?.toString();
    const name = formData.get('name')?.toString();
    const number = formData.get('number')?.toString();

    // Check if manga and chapters are defined and of type string
    if (!name || !number) {
      throw new Error('Invalid manga or chapters values');
    }

    const draftFilePath = path.join(process.cwd(), DATA_FOLDER, Draft_Folder);
    const existingData = await fs.readFile(draftFilePath, 'utf8');
    const mangaList = JSON.parse(existingData || '[]');

    // Check if the manga ID exists
    const existingMangaIndex = mangaList.findIndex((data: any) => data.id === manga);

    if (existingMangaIndex !== -1) {
      // Manga ID exists, check if the chapter ID exists for the given manga ID
      const existingChapterIndex = mangaList[existingMangaIndex].chapters.findIndex(
        (data: any) => data.id === chapters
      );

      if (existingChapterIndex === -1) {
        // Chapter ID doesn't exist, add a new chapter to the chapters array
        const folderPath = path.join(process.cwd(), 'public/images/content', name, number);
        const fileNames = await readFolderContents(folderPath);

        mangaList[existingMangaIndex].chapters.push({
          id: chapters,
          images: fileNames.map((fileName: string) => ({
            source: path.posix.join('/images/content', name, number, fileName),
          })),
        });
      }
    } else {
      // Manga ID doesn't exist, add the full data as a new object in the root array
      const folderPath = path.join(process.cwd(), 'public/images/content', name, number);
      const fileNames = await readFolderContents(folderPath);

      mangaList.push({
        id: manga,
        chapters: [
          {
            id: chapters,
            images: fileNames.map((fileName: string) => ({
              source: path.posix.join('/images/content', name, number, fileName),
            })),
          },
        ],
      });
    }

    // Write the modified data back to the file
    await fs.writeFile(draftFilePath, JSON.stringify(mangaList, null, 2), 'utf8');
    return NextResponse.json('uploaded');
  } catch (error) {
    console.error('Error scanning files:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
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
