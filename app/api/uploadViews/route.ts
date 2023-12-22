import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const { writeFile, readFile } = fs;

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const filePath = path.resolve('./public/data/manga.json');

        const data = await req.json();
        // Read existing data
        const existingData = await readFile(filePath, 'utf8');
        const views = existingData ? JSON.parse(existingData) : [];

        // Update data based on ID
        data.forEach((item: any) => {
            const id = item.id;
            const totalViews = item.totalViews;

            // Check if the ID already exists in views array
            const existingItemIndex = views.findIndex((view: any) => view.id === id);

            if (existingItemIndex !== -1) {
                // Update totalViews if ID exists
                views[existingItemIndex].totalViews = totalViews;
            } else {
                // Add new item if ID doesn't exist
                views.push({ id, totalViews });
            }
        });

        // Write updated data to file
        await writeFile(filePath, JSON.stringify(views), 'utf8');

        return NextResponse.json(views);
    } catch (error) {
        console.error('Error handling POST request:', error);
        return NextResponse.error();
    }
}
