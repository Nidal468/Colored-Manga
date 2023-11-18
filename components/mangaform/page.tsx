'use client'

import { useState } from "react";
import AllInboxIcon from '@mui/icons-material/AllInbox';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
export default function Form(props: any) {
    const [display, setDisplay] = useState(true);
    const [name, setName] = useState('');
    const [file, setFile] = useState<File>();
    const [author, setAuthor] = useState('');
    const [info, setInfo] = useState('');
    const [genre1, setGenre1] = useState('');
    const [genre2, setGenre2] = useState('');
    const [genre3, setGenre3] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleAddManga = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!file) return;
        const fileName = file.name;
        console.log('Uploaded file name:', fileName);
        try {
            const data = new FormData();
            data.set('file', file);

            const res = await fetch('api/upload', {
                method: 'POST',
                body: data
            });

            if (res.ok) {
                const responseJson = await res.json();
                setImageUrl(`/images/covers/${responseJson.imageUrl}`);
                console.log('Image uploaded successfully');
            } else {
                console.error('Failed to upload image');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }

        const currentDate = new Date();
        const formattedDate = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        }).format(currentDate);

        const newManga = {
            id: new Date().getTime().toString(),
            name: name,
            date: formattedDate,
            author: author,
            info: info,
            genre1: genre1,
            genre2: genre2,
            genre3: genre3,
            cover: `/images/covers/${fileName}`,
            chapters: []
        };

        try {
            const response = await fetch('/api/addManga', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newManga),
            });

            if (response.ok) {
                console.log('Chapter added successfully');
            } else {
                console.error('Failed to add chapter');
            }
        } catch (error) {
            console.error('Error adding chapter:', error);
        }

        setAuthor("");
        setName("");
        setInfo("");
        setGenre1("");
        setGenre2("");
        setGenre3("");
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];

        if (selectedFile) {
            setFile(selectedFile);

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    return (
        <div className="w-full p-[2vw] lg:p-[10px] justify-between items-center flex font-light lg:text-[15px] text-[2vw]">
            <div className="flex items-center gap-[1vw]"><AllInboxIcon sx={{ fontSize: "15px" }} />All Mangas{display.toString()}</div>
            <div onClick={() => setDisplay(false)}><AddIcon sx={{ fontSize: "15px" }} /></div>
            <div className="w-full fixed h-full top-0 left-0 z-50 pointer-events-none">
                <div className="w-full h-full items-center justify-center backdrop-blur-[5px] bg-zinc-800 bg-opacity-[5%] pointer-events-auto" style={{ display: display ? "none" : "flex" }}>
                <div className="flex gap-[15px] bg-zinc-800 p-[20px]" >
                <div className='w-full flex items-start justify-between'>
                    <form onSubmit={handleAddManga} className="w-full flex gap-[15px] flex">
                        <div className="h-full flex flex-col">
                        <div className="w-full flex items-center justify-start gap-[10px]">
                        <div className='mb-4'>
                            <label className='block text-white text-sm mb-2'>Manga name</label>
                            <input
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='w-full px-3 py-2 rounded bg-zinc-700 text-white'
                                placeholder='Enter manga name'
                            />
                        </div>
                        <div className='mb-4 w-[300px]'>
                            <label className='block text-white text-sm mb-2'>Manga author name</label>
                            <input
                                type='text'
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                className='w-full px-3 py-2 rounded bg-zinc-700 text-white'
                                placeholder='Enter manga author name'
                            />
                        </div>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-white text-sm mb-2'>Manga description</label>
                            <input
                                type='text'
                                value={info}
                                onChange={(e) => setInfo(e.target.value)}
                                className='w-full px-[15px] py-[10px] rounded bg-zinc-700 text-white'
                                placeholder='Enter manga description'
                            />
                        </div>
                        <label className='block text-white text-sm mb-2'>Manga Genre 1 (this will be the main genre!)</label>
                        <div className='mb-4 w-full flex gap-[10px]'>
                            
                            <input
                                type='text'
                                value={genre1}
                                onChange={(e) => setGenre1(e.target.value)}
                                className='w-full px-3 py-2 rounded bg-zinc-700 text-white'
                                placeholder='Enter manga genre 1'
                            />
                            <input
                                type='text'
                                value={genre2}
                                onChange={(e) => setGenre2(e.target.value)}
                                className='w-full px-3 py-2 rounded bg-zinc-700 text-white'
                                placeholder='Enter manga genre 2'
                            />
                            <input
                                type='text'
                                value={genre3}
                                onChange={(e) => setGenre3(e.target.value)}
                                className='w-full px-3 py-2 rounded bg-zinc-700 text-white'
                                placeholder='Enter manga genre 3'
                            />
                        </div>
                        
                        <input
                            type='submit'
                            className='px-[10px] h-[40px] bg-zinc-600 text-white rounded hover:bg-zinc-700'
                        />
                        </div>
                        <div className="h-full flex items-start">
                        <div className="w-[200px] h-[360px] flex flex-col items-start justify-center gap-[20px]">
                            <div className="w-full h-full relative border-2 border-zinc-400 rounded-[5px] border-dashed ">
                                    <Image fill={true} src={imagePreview || '/images/assets/fpr.jpg'} alt={`${imagePreview}`} className="object-cover"/>
                            </div>
                            <input type="file" placeholder="Upload Cover" onChange={handleFileChange}/>
                        </div>
                       
                        </div>
                    </form>
                </div>
                <div onClick={() => setDisplay(true)}><PowerSettingsNewIcon sx={{ fontSize: "15px" }} /></div>
            </div>
                </div>
            </div>
            
        </div>
    );
}
