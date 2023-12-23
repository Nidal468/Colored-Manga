import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const formData = await req.json();
    const { id, title, number, date, index, name, viewed} = formData;
    const DATA_FOLDER = 'public/data';
    const FILE_NAME = 'manga.json';
    const UPLOAD_FOLDER = 'public/images/content';
    const filePath = path.join(process.cwd(), DATA_FOLDER, FILE_NAME);
    const folderPath = path.join(process.cwd(), UPLOAD_FOLDER, name, number);
    await fs.mkdir(folderPath, { recursive: true });
    const existingData = await fs.readFile(filePath, 'utf8');
    // Parse existing data into JSON
    const mangaList = JSON.parse(existingData);

    // Find the manga with the matching index
    const targetManga = mangaList.find((manga: any) => manga.id === index);

    // Check if the manga with the matching index is found
    if (targetManga) {
      // Add new form data to the chapters array of the found manga
      targetManga.chapters.push({ id, title, number, date , viewed});

      // Write the updated manga list back to the file
      await fs.writeFile(filePath, JSON.stringify(mangaList), 'utf8');

      // Return a success response
      return new Response('Chapter added successfully', { status: 201 });
    } else {
      // If no manga with the matching index is found, return an error response
      console.error('Manga not found with index:', index);
      return new Response('Failed to add chapter - Manga not found', { status: 404 });
    }
  } catch (error) {
    // Handle errors and return an appropriate response
    console.error('Error adding chapter:', error);
    return new Response('Failed to add chapter', { status: 500 });
  }
}
