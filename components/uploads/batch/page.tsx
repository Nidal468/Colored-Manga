'use client'

import { useState } from 'react';
import Data from '@/public/data/manga.json'


export const Batch = (props: any) => {
    const [selectedImages, setSelectedImages] = useState<FileList | null>(null);
    const selectedManga = Data.find((data: any) => data.id === props.manga);
    const selectedChapter = selectedManga?.chapters.find((data: any) => data.id === props.chapter);
    const [counter, setCounter] = useState(0);
    const [totalSize, setTotalSize] = useState(0);

    const handleFileChange = (e: any) => {
        setSelectedImages(e.target.files);
        calculateTotalSize(e.target.files);
        setCounter(0);
    };

    const calculateTotalSize = (files: FileList | null) => {
        if (files) {
            let size = 0;
            Array.from(files).forEach((file) => {
                size += file.size;
            });
            setTotalSize(size);
        }
    };

    const totalFiles = selectedImages?.length;

    const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!selectedImages) return;

        const apiUrl = '/api/addPage'; // Replace with your actual API endpoint

        const uploadPromises = Array.from(selectedImages).map((file: any) => {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('name', selectedManga?.name as string);
            formData.append('manga', selectedManga?.id as string);
            formData.append('chapter', selectedChapter?.id as string);

            console.log(file.name)
            return fetch(apiUrl, {
                method: 'POST',
                body: formData,
            }).then(() => {
                // Increment the counter for each successful upload
                setCounter((prevCounter) => prevCounter + 1);
            });


        });

        try {
            // Wait for all promises to resolve
            await Promise.all(uploadPromises);

            // All images are uploaded successfully
            console.log('All images uploaded successfully');
            
        } catch (error) {
            console.error('Error uploading images:', error);
        }
    };
    const totalSizeInMB = Math.round((totalSize / (1024 * 1024)) * 100) / 100; // Convert to MB and round
    return (
        <form onSubmit={handleUpload}>
            <input type="file" multiple onChange={handleFileChange} />
            <button type='submit'>Upload Images</button>
            <h1>{counter}/{totalFiles}</h1>
            <p>Total Size: {totalSizeInMB} mb</p>
        </form>
    );
};