'use client'
import { useState } from "react"
import Data from '@/public/data/manga.json'
import Draft from '@/public/data/draft.json'

export default function Scanner(props: any) {
    const selectedManga = Data.find((data: any) => data.id === props.manga);
    const selectedChapter = selectedManga?.chapters.find((data: any) => data.id === props.chapter);
    const draftManga = Draft.find((data: any) => data.id === props.manga);
    const draftChapter = draftManga?.chapters.find((data: any) => data.id === props.chapter);

    const handleLoad = async () => {
        const formData = new FormData();
        formData.append('manga', selectedManga?.id || '');
        formData.append('chapters', selectedChapter?.id || '');
        formData.append('name', selectedManga?.name || '');
        formData.append('number', selectedChapter?.number || '');
        const response = await fetch('/api/scanner', {
            method: 'POST',
            body: formData
        })
        if (response.ok) {
            alert(`${selectedChapter?.number} - ${selectedChapter?.title || 'no title'} Drafted`)
        }
    }
    const handlePublish = async () => {
        const formData = new FormData();
        formData.append('manga', draftManga?.id || '');
        formData.append('chapters', draftChapter?.id || '');

        const response = await fetch('/api/publish', {
            method: 'POST',
            body: formData
        })
        if(response.ok){
            alert(`${selectedChapter?.number} - ${selectedChapter?.title || 'no title'} publised`);
        }
    }
    return (
        <div className="w-full min-h-[200px] bg-zinc-600 flex flex-col">
            <div className="w-full bg-zinc-900 p-[10px] flex items-center justify-between"><h1>Uploaded Files</h1>
                <button onClick={handleLoad}>Save as draft</button>
            </div>
            <div className="w-full h-[300px] overflow-y-auto">
                <div className="w-full flex flex-wrap gap-[10px] p-[10px]">
                    {draftChapter?.images.map((data: any, index: number) => {
                        return (
                            <img className="w-[90px] h-[140px]" src={data.source} alt={data.source} key={index + 1} />
                        )
                    })}
                </div>
            </div>
            <div className="w-full bg-zinc-900 p-[10px] flex items-center justify-between"><h1>Publish {selectedChapter?.number} - {selectedChapter?.title || 'no title'}</h1>
                <button onClick={handlePublish}>Publish</button>
            </div>
        </div>
    )
}