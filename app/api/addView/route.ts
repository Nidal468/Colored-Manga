import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: Request) {
    try {
        const formData = await req.json();
        const { id, manga, chapter } = formData;
        const existingData = await fs.readFile('public/data/manga.json', 'utf8');
        // Parse existing data into JSON
        const mangaList = JSON.parse(existingData);

        // Find the manga with the matching index
        const targetManga = mangaList.find((mangas: any) => mangas.id === manga);

        // Check if the manga with the matching index is found
        if (targetManga) {
            console.log(targetManga.id)
            const targetChapter = targetManga.chapters.find((chapters: any) => chapters.id === chapter);
            targetChapter.viewed.push({id});

            // Write the updated manga list back to the file
            await fs.writeFile('public/data/manga.json', JSON.stringify(mangaList), 'utf8');

            // Return a success response
            return new Response('Chapter added successfully', { status: 201 });
        } else {
            // If no manga with the matching index is found, return an error response
            console.error('Manga not found with index:', manga);
            return new Response('Failed to add chapter - Manga not found', { status: 404 });
        }
    } catch (error) {
        // Handle errors and return an appropriate response
        console.error('Error adding chapter:', error);
        return new Response('Failed to add chapter', { status: 500 });
    }
}
