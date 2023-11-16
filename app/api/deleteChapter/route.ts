import { promises as fs } from 'fs';
import path from 'path';

export async function DELETE(req: Request) {
  try {
    if (req.method !== 'DELETE') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    const requestBody = await req.json();

    if (!requestBody || !requestBody.id) {
      return new Response('Invalid request body', { status: 400 });
    }

    const { id } = requestBody;
    const filePath = path.join(process.cwd(), 'public/data', 'manga.json');
    const existingData = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(existingData);
    
    // Find the manga that contains the chapter with the specified ID
    const mangaIndex = data.findIndex((manga: any) => 
      manga.chapters.some((chapter: any) => chapter.id === id)
    );

    if (mangaIndex !== -1) {
      // Find the chapter index within the manga
      const chapterIndex = data[mangaIndex].chapters.findIndex((chapter: any) => chapter.id === id);

      // Remove the chapter from the manga's chapters array
      data[mangaIndex].chapters.splice(chapterIndex, 1);

      // Write the updated data back to the file
      await fs.writeFile(filePath, JSON.stringify(data), 'utf8');
      
      return new Response('Chapter deleted successfully', { status: 200 });
    } else {
      return new Response('Chapter not found', { status: 404 });
    }
  } catch (error) {
    console.error('Error deleting chapter:', error);
    return new Response('Failed to delete chapter', { status: 500 });
  }
}
