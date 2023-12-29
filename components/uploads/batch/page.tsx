'use client'

import axios from "axios";
import { useState, useEffect } from "react"
import Data from '@/public/data/manga.json'
import JSZip from "jszip";

const chunkSize = 600 * 1024 * 1024;

interface File {
    name: string;
    size: number;
    type: any;
    finalFilename?: string;
    slice: any;
}

export function Batch(props: any) {
    const selectedManga = Data.find((data: any) => data.id === props.manga);
    const selectedChapter = selectedManga?.chapters.find((data: any) => data.id === props.chapter);
    const [dropZoneActive, setdropZoneActive] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const [currentFileIndex, setCurrentFileIndex] = useState<number | null>(null);
    const [lastUploadedFileIndex, setLastUploadedFileIndex] = useState<number | null>(null);
    const [currentChunkIndex, setCurrentChunkIndex] = useState<number | null>(null);

    function handleDrop(e: any) {
        e.preventDefault()
        setFiles([...files, ...e.dataTransfer.files]);
    }

    function readAndUploadCurrentChunk() {
        const reader = new FileReader();
        const file = files[currentFileIndex as number];
        if (!file) {
            return;
        }
        const from = currentChunkIndex as number * chunkSize;
        const to = from + chunkSize;
        const blob = file.slice(from, to);
        reader.onload = e => uploadChunk(e);
        reader.readAsDataURL(blob);
    }


    // Function to check if a file has a .zip extension

    function uploadChunk(readerEvent: any) {
        const file = files[currentFileIndex as number];
        const data = readerEvent.target.result;
        const params = new URLSearchParams();
        params.set('name', file.name);
        params.set('size', file.size.toString());
        params.set('currentChunkIndex', currentChunkIndex?.toString() || '');
        params.set('totalChunks', (Math.ceil(file.size / chunkSize)).toString());
        const headers = { 'Content-Type': 'application/octet-stream' };
        const url = 'http://upload.freemanhwa.com/upload?' + params.toString();
        axios.post(url, data, { headers })
            .then(response => {
                const file = files[currentFileIndex as number];
                const filesize = files[currentFileIndex as number].size;
                const chunks = Math.ceil(filesize / chunkSize) - 1;
                const isLastChunk = currentChunkIndex === chunks;
                if (isLastChunk) {

                    file.finalFilename = response.data.finalFilename;
                    setLastUploadedFileIndex(currentFileIndex);
                    setCurrentChunkIndex(null);
                } else {
                    setCurrentChunkIndex(currentChunkIndex as number + 1);
                }
            });
    }

    useEffect(() => {
        if (lastUploadedFileIndex === null) {
            return;
        }
        const isLastFile = lastUploadedFileIndex === files.length - 1;
        const nextFileIndex = isLastFile ? null : currentFileIndex as number + 1;
        setCurrentFileIndex(nextFileIndex);
    }, [lastUploadedFileIndex]);


    useEffect(() => {
        if (files.length > 0) {
            if (currentFileIndex === null) {
                setCurrentFileIndex(lastUploadedFileIndex === null ? 0 : lastUploadedFileIndex + 1)
            }
        }
        console.log('useEffect 1', currentFileIndex)
    }, [files.length])

    useEffect(() => {
        if (currentFileIndex !== null) {
            setCurrentChunkIndex(0);
        }
    }, [currentFileIndex]);

    useEffect(() => {
        if (currentChunkIndex !== null) {
            readAndUploadCurrentChunk();
        }
    }, [currentChunkIndex]);

    return (
        <div className="w-full flex flex-col items-start justify-start gap-[10px]">
            <div className="w-[200px] h-[50px] border flex items-center justify-center"
                onDrop={(e) => handleDrop(e)}
                onDragOver={(e) => { setdropZoneActive(true); e.preventDefault() }}
                onDragLeave={(e) => { setdropZoneActive(false); e.preventDefault() }}
                style={{ border: dropZoneActive ? "1px solid #fff" : "1px solid #666" }}
            >Drop your files</div>

            <div className="w-full min-h-[100px] bg-zinc-600 flex flex-col">
                {files.map((file, fileIndex) => {
                    let progress = 0;
                    if (file.finalFilename) {
                        progress = 100;
                    } else {
                        const uploading = fileIndex === currentFileIndex;
                        const chunks = Math.ceil(file.size / chunkSize);
                        if (uploading) {
                            progress = Math.round(currentChunkIndex as number / chunks * 100);
                        } else {
                            progress = 0;
                        }
                    }
                    return (
                        <a className="file" target="_blank"
                            href={'http://localhost:4001/uploads/' + file.finalFilename} key={fileIndex}>
                            <div className="w-full py-[5px] bg-zinc-700 px-[2px]">
                                <h1>{file.name}</h1>
                                <h1>{file.size}</h1>
                                <h1>{file.type}</h1>
                                <h1>{progress}%</h1>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div >
    )
}