import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';
import { promises as fs } from 'fs';

const { writeFile } = fs;

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const data = await req.formData();
        const file: File | null = data.get('file') as unknown as File;

        if (!file) {
            return NextResponse.json({ error: "Invalid file" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const coverFileName = file.name;
        const coverPath = join('public/images/user', coverFileName);

        // Save the file
        await writeFile(coverPath, buffer);

    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
    return NextResponse.json({ message: "File uploaded successfully" });
}
