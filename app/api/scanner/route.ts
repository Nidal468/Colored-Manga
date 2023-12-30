import { promises as fs, readdir } from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';


const DATA_FOLDER = 'public/data';
const FILE_NAME = 'manga.json';
const Folder = 'public/images/content'
const Draft_Folder = 'draft.json'
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const formData = await req.formData();
        const manga = formData.get('manga')?.toString();
        const chapters = formData.get('chapters')?.toString();
        const sourcePath = path.join(process.cwd(), DATA_FOLDER, FILE_NAME);
        const existingData = await fs.readFile(sourcePath, 'utf8');
        const mangaList = JSON.parse(existingData);
        const targetManga = mangaList.find((data: any) => data.id === manga);
        const targetChapter = targetManga?.chapters.find((data: any) => data.id === chapters);

        const folderPath = path.join(process.cwd(), Folder, targetManga.name, targetChapter.number);
        const fileNames = await readFolderContents(folderPath);
        const draftFilePath = path.join(process.cwd(), DATA_FOLDER, Draft_Folder);
        const draftData = [
            {
                id: targetManga.id,
                chapters: [
                    {
                        id: targetChapter.id,
                        images: fileNames.map((fileName: string) => ({
                            source: path.posix.join('/images/content', targetManga.name, targetChapter.number, fileName),
                        })),
                    },
                ],
            },
        ];
        await fs.writeFile(draftFilePath, JSON.stringify(draftData, null, 2), 'utf8');
        return NextResponse.json('uploaded')
    } catch (error) {
        console.error('Error scaning files:', error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
async function readFolderContents(folderPath: string): Promise<string[]> {
    try {
        const fileNames = await fs.readdir(folderPath);
        return fileNames;
    } catch (error) {
        console.error('Error reading folder contents:', error);
        throw error;
    }
}