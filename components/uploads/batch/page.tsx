'use client'

import { useState } from 'react';
import Data from '@/public/data/manga.json'

export const Batch = (props: any) => {
    const [selectedImages, setSelectedImages] = useState(null);
    const selectedManga = Data.find((data: any) => data.id === props.manga);
    const selectedChapter = selectedManga?.chapters.find((data: any) => data.id === props.chapter);
    const handleFileChange = (e: any) => {
        setSelectedImages(e.target.files);
    };

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

    return (
        <form onSubmit={handleUpload}>
            <input type="file" multiple onChange={handleFileChange} />
            <button type='submit'>Upload Images</button>
        </form>
    );
};