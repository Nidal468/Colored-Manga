import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const formData = await req.json()
    const { id, title, number, date, index } = formData;
    const DATA_FOLDER = 'public/data';
    const FILE_NAME = 'manga.json';
    const filePath = path.join(process.cwd(), DATA_FOLDER, FILE_NAME);

    // Read existing data from the file
    const existingData = await fs.readFile(filePath, 'utf8');
    // Parse existing data into JSON
    const chapters = JSON.parse(existingData);

    // Add new form data to the chapters array
    chapters[index].chapters.push({ id, title, number, date });

    // Write the updated chapters array back to the file
    await fs.writeFile(filePath, JSON.stringify(chapters), 'utf8');

    // Return a success response
    return new Response('Chapter added successfully', { status: 201 });
  } catch (error) {
    // Handle errors and return an appropriate response
    console.error('Error adding chapter:', error);
    return new Response('Failed to add chapter', { status: 500 });
  }
}
