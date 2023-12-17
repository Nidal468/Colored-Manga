import { promises as fs } from 'fs';
import path from 'path';

export async function DELETE(req: Request) {
  try {
    const formData = await req.formData();
    const id = formData.get('id')?.toString();
    const filePath = path.join(process.cwd(), 'public/data', 'bookmark.json');
    const existingData = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(existingData);
    
    // Find the manga that contains the chapter with the specified ID
    const bookmarkIndex = data.find((data: any) => data.id === id)
   

   
      // Find the chapter index within the manga
      
      // Remove the chapter from the manga's chapters array
      data.splice(bookmarkIndex, 1);
      // Write the updated data back to the file
      await fs.writeFile(filePath, JSON.stringify(data), 'utf8');
      return new Response('Chapter deleted successfully', { status: 200 });

  } catch (error) {
    console.error('Error deleting chapter:', error);
    return new Response('Failed to delete chapter', { status: 500 });
  }
}
