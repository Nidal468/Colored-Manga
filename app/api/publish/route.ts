import { promises as fs } from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

const DATA_FOLDER = 'public/data';
const MANGA_FILE_NAME = 'manga.json';
const DRAFT_FILE_NAME = 'draft.json';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const formData = await req.formData();
    const mangaId = formData.get('manga')?.toString();
    const chapterId = formData.get('chapters')?.toString();

    const mangaFilePath = path.join(process.cwd(), DATA_FOLDER, MANGA_FILE_NAME);
    const draftFilePath = path.join(process.cwd(), DATA_FOLDER, DRAFT_FILE_NAME);

    // Read manga.json file
    const mangaData = await fs.readFile(mangaFilePath, 'utf-8');
    const mangaList = JSON.parse(mangaData);

    // Read draft.json file
    const draftData = await fs.readFile(draftFilePath, 'utf-8');
    const draftList = JSON.parse(draftData);

    // Find the selected draft based on mangaId
    const selectedDraft = draftList.find((data: any) => data.id === mangaId);
    const selectedManga = mangaList.find((data: any) => data.id === mangaId);

    if (selectedDraft && selectedManga) {
      const selectedDraftChapter = selectedDraft.chapters.find((chapter: any) => chapter.id === chapterId);
      const selectedChapter = selectedManga.chapters.find((chapter: any) => chapter.id === chapterId);

      if (selectedChapter) {
        // Add the images array to the selectedChapter
        selectedChapter.images = selectedDraftChapter.images;

        // Save the updated manga.json file
        await fs.writeFile(mangaFilePath, JSON.stringify(mangaList, null, 2), 'utf-8');

        return NextResponse.json("Published", { status: 200 });
      } else {
        return NextResponse.json("failed", { status: 500 });
      }
    } else {
      return NextResponse.json("failed", { status: 500 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json("failed", { status: 500 });
  }
}
