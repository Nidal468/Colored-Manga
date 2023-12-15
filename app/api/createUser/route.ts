import { promises as fs } from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const formData = await req.json();
        const { username, password, token, id, verification, createdAt, email, avater, bookmark, uploads, bio, roles, comments } = formData
        const DATA_FOLDER = 'public/data';
        const FILE_NAME = 'user.json';
        const filePath = path.join(DATA_FOLDER, FILE_NAME);
        const existingData = await fs.readFile(filePath, 'utf8');
        const user = JSON.parse(existingData);
        user.push({id, username, password, verification, token, createdAt, email, avater, bookmark, uploads, bio, roles, comments })
        await fs.writeFile(filePath, JSON.stringify(user), 'utf8');
    } catch (error) {
        console.error('Error adding user:', error);
        return new Response('Failed to add user', { status: 500 });
    }
    return NextResponse.json('added User');
}