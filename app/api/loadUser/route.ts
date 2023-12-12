import { promises as fs } from 'fs';
import { NextResponse, NextRequest } from 'next/server';
import path from 'path';

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const formData = await req.json();
        const { username } = formData;

        const DATA_FOLDER = 'public/data';
        const FILE_NAME = 'user.json';
        const filePath = path.join(DATA_FOLDER, FILE_NAME);
        const existingData = await fs.readFile(filePath, 'utf8');
        const user = JSON.parse(existingData);

        const foundUser = user.find((user: any) => user.username === username);
        const data = await foundUser
        console.log(data)
        return Response.json(data)
    } catch (error) {
        console.error('Error checking user:', error);
        return new Response('Failed to check user', { status: 500 });
    }
}
