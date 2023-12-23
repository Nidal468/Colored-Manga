import { promises as fs, existsSync, readdirSync } from 'fs';
import path from 'path';

const DATA_FOLDER = 'public/data';
const FILE_NAME = 'manga.json';
const UPLOAD_FOLDER = 'public/images/content';

export async function DELETE(req: Request) {
  try {
    if (req.method !== 'DELETE') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    const body = await req.json();
    if (!body || !body.manga || !body.chapter) {
      return new Response('Invalid request body', { status: 400 });
    }

    const { manga: mangaPayload, chapter: chapterPayload } = body;
    const { manga } = mangaPayload;
    const { chapter } = chapterPayload;

    const filePath = path.join(process.cwd(), DATA_FOLDER, FILE_NAME);
    const existingData = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(existingData);
    
    // Find the manga that contains the chapter with the specified ID
    const selectedManga = data.find((m: any) => m.id === manga);

    if (selectedManga) {
      // Find the chapter index within the manga
      const selectedChapter = selectedManga.chapters.find((c: any) => c.id === chapter);

      if (selectedChapter) {
        // Remove the chapter from the manga's chapters array
        selectedManga.chapters.splice(selectedManga.chapters.indexOf(selectedChapter), 1);

        const folderPath = path.join(process.cwd(), UPLOAD_FOLDER, selectedManga.name, selectedChapter.number);

        // Check if the folder exists before attempting to delete
        if (existsSync(folderPath)) {
          // Delete the folder and its contents
          await deleteFolderRecursive(folderPath);
        }

        // Write the updated data back to the file
        await fs.writeFile(filePath, JSON.stringify(data), 'utf8');

        return new Response('Chapter deleted successfully', { status: 200 });
      } else {
        return new Response('Chapter not found', { status: 404 });
      }
    } else {
      return new Response(`Manga not found id was ${manga}`, { status: 404 });
    }
  } catch (error) {
    console.error('Error deleting chapter:', error);
    return new Response('Failed to delete chapter', { status: 500 });
  }
}

// Helper function to delete a folder and its contents recursively
async function deleteFolderRecursive(folderPath: string): Promise<void> {
  const files = readdirSync(folderPath);
  for (const file of files) {
    const currentPath = path.join(folderPath, file);
    const isDirectory = (await fs.stat(currentPath)).isDirectory();

    if (isDirectory) {
      await deleteFolderRecursive(currentPath);
    } else {
      await fs.unlink(currentPath);
    }
  }

  // Remove the empty folder
  await fs.rmdir(folderPath);
}
