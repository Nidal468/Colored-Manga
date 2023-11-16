import { NextRequest, NextResponse } from 'next/server'
import {join} from 'path'
import { promises as fs } from 'fs';
const { writeFile } = fs;
export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.formData()
    const file: File | null = data.get('file') as unknown as File

    if(!file) {
        return res.json("invalid file")
    }
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const path = join('public/images','covers', file.name)
    await writeFile(path, buffer)
    console.log(path)
    return NextResponse.json("uploaded")
}