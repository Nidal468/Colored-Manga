'use client'

import React, { useState, useEffect } from 'react';
import s from '@/styles/admin.module.css'
import PieChartIcon from '@mui/icons-material/PieChart';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DnsIcon from '@mui/icons-material/Dns';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import HistoryIcon from '@mui/icons-material/History';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image'
import Data from '@/public/data/manga.json'


type DivStates = {
    div1: boolean;
    div2: boolean;
    div3: boolean;
    div4: boolean;
    div5: boolean;
    div6: boolean;
    div7: boolean;
    div8: boolean;
    div9: boolean;
    div10: boolean;
    div11: boolean;
    div12: boolean;
    div13: boolean;
};
export default function Admin(params: any) {
    const [manga, setManga] = useState("")
    const [chapterId, setChapterId] = useState('')
    const { chapters } = params.params;
    const selectedManga = Data.find((mangas: any) => mangas.id === manga);
    const selectedChapter = selectedManga?.chapters.find((chapter: any) => chapter.id === chapterId);
    const chaptersData = selectedManga?.chapters || [];
    const [divStates, setDivStates] = useState<DivStates>({
        div1: false,
        div2: false,
        div3: false,
        div4: false,
        div5: false,
        div6: false,
        div7: false,
        div8: false,
        div9: false,
        div10: false,
        div11: false,
        div12: false,
        div13: false,
    });
    const [searchValue, setSearchValue] = useState('');
    const [name, setName] = useState('');
    const [file, setFile] = useState<File>();
    const [author, setAuthor] = useState('');
    const [info, setInfo] = useState('');
    const [genre1, setGenre1] = useState('');
    const [genre2, setGenre2] = useState('');
    const [genre3, setGenre3] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [display, setDisplay] = useState(true);
    const [isPage, setPage] = useState(false)
    const [chapterNumber, setChapterNumber] = useState('');
    const [chapterTitle, setChapterTitle] = useState('');
    const [files, setFiles] = useState<FileList | null>(null);
    const handleClearInput = () => {
        setSearchValue('');
    };
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
                setImageUrl(`/images/cover/${responseJson.imageUrl}`);
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
            cover: `/images/cover/${fileName}`,
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
    const toggleDivState = (divKey: keyof DivStates, newState: boolean) => {
        setDivStates((prevState) => ({
            ...prevState,
            [divKey]: newState,
        }));
    };
    const handleAddChapter = async () => {
        const currentDate = new Date();
        const formattedDate = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        }).format(currentDate);
        const newChapter = {
            id: new Date().getTime().toString(),
            number: chapterNumber,
            title: chapterTitle,
            date: formattedDate,
            index: manga.toString(),
            name: selectedManga?.name,
            images: []
        };

        try {
            const response = await fetch('/api/addChapter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newChapter),
            });

            if (response.ok) {
                console.log('Chapter added successfully');
            } else {
                console.error('Failed to add chapter');
            }
        } catch (error) {
            console.error('Error adding chapter:', error);
        }
        setChapterNumber('');
        setChapterTitle('');
    };
    const handleDeleteChapter = async (chapterId: any) => {
        try {
            const response = await fetch(`/api/deleteChapter`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: chapterId }),
            });

            if (response.ok) {
                console.log('Chapter deleted successfully');
                // You might want to update your local state or trigger a re-fetch here
            } else {
                console.error('Failed to delete chapter');
            }
        } catch (error) {
            console.error('Error deleting chapter:', error);
        }
    };
    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();


        formData.append('title', selectedChapter?.title || '');
        formData.append('name', selectedManga?.name || '');
        formData.append('index', selectedManga?.id || '');
        formData.append('id', selectedChapter?.id || '');

        if (files) {
            for (let i = 0; i < files.length; i++) {
                formData.append(`file_${i}`, files[i]);
            }
        }

        try {
            const response = await fetch("/api/addPage", {
                method: 'POST',
                body: formData,
            });

            console.log(response);
        } catch (error) {
            console.error("Error occurred", error);
        }
    };
    return (
        <div className="w-full h-[100vh] flex items-start justify-between text-white" id={s.body}>
            <div className="w-[15%] h-full flex flex-col items-center justify-starrt py-[2vw] gap-[1vw]" id={s.sidebar}>
                <div className='text-[1.5vw] w-full flex items-center justify-start px-[1vw]'><h1>Admin Panel</h1></div>
                <div className='w-full flex flex-col items-center justify-start pl-[0.3vw]'>
                    <div className='w-full h-[4vw] px-[0.5vw] text-[1vw] flex items-center justify-start gap-[0.5vw]' id={divStates.div6? s.panel:""} onClick={() => {toggleDivState('div5', false),toggleDivState('div6', true),toggleDivState('div7', false),toggleDivState('div8', false),toggleDivState('div9', false),toggleDivState('div10', false)}}>
                        <PieChartIcon sx={{ fontSize: 20 }} />
                        <h1>Overview</h1>
                    </div>
                    <div className='w-full h-[4vw] px-[0.5vw] text-[1vw] flex items-center justify-start gap-[0.5vw]' id={divStates.div5? s.panel:""} onClick={() => {toggleDivState('div5', true),toggleDivState('div6', false),toggleDivState('div7', false),toggleDivState('div8', false),toggleDivState('div9', false),toggleDivState('div10', false)}}>
                        <CreateNewFolderIcon sx={{ fontSize: 20 }} />
                        <h1>Create Manga</h1>
                    </div>
                    <div className='w-full h-[4vw] px-[0.5vw] text-[1vw] flex items-center justify-start gap-[0.5vw]' id={divStates.div7? s.panel:""} onClick={() => {toggleDivState('div5', false),toggleDivState('div6', false),toggleDivState('div7', true),toggleDivState('div8', false),toggleDivState('div9', false),toggleDivState('div10', false)}}>
                        <CloudUploadIcon sx={{ fontSize: 20 }} />
                        <h1>Upload Chapter</h1>
                    </div>
                    <div className='w-full h-[4vw] px-[0.5vw] text-[1vw] flex items-center justify-start gap-[0.5vw]' id={divStates.div8? s.panel:""} onClick={() => {toggleDivState('div5', false),toggleDivState('div6', false),toggleDivState('div7', false),toggleDivState('div8', true),toggleDivState('div9', false),toggleDivState('div10', false)}}>
                        <DnsIcon sx={{ fontSize: 20 }} />
                        <h1>Manga List</h1>
                    </div>
                    <div className='w-full h-[4vw] px-[0.5vw] text-[1vw] flex items-center justify-start gap-[0.5vw]' id={divStates.div9? s.panel:""} onClick={() => {toggleDivState('div5', false),toggleDivState('div6', false),toggleDivState('div7', false),toggleDivState('div8', false),toggleDivState('div9', true),toggleDivState('div10', false)}}>
                        <SupervisedUserCircleIcon sx={{ fontSize: 20 }} />
                        <h1>Manage Users</h1>
                    </div>
                    <div className='w-full h-[4vw] px-[0.5vw] text-[1vw] flex items-center justify-start gap-[0.5vw]' id={divStates.div10? s.panel:""} onClick={() => {toggleDivState('div5', false),toggleDivState('div6', false),toggleDivState('div7', false),toggleDivState('div8', false),toggleDivState('div9', false),toggleDivState('div10', true)}}>
                        <HistoryIcon sx={{ fontSize: 20 }} />
                        <h1>History</h1>
                    </div>
                </div>
            </div>
            <div className='w-[85%] h-full flex flex-col items-center justify-between'>
                <div className='w-full h-[5vw] bg-zinc-800 flex items-center justify-start border-zinc-600 border-b-2'>
                </div>
                {divStates.div5? <div className='w-full h-full flex'>
                    <div className='w-[40%] h-full flex flex-col items-start justify-start border-zinc-500 border-r-2'>
                        <div className='w-full h-[4vw] bg-zinc-700 flex items-center justify-between px-[1vw]'>
                            <h1 className='text-[1vw] bg-sky-500 w-[7vw] h-[2.5vw] flex items-center justify-center rounded-[0.3vw] cursor-pointer' onClick={() => {toggleDivState('div1', true), toggleDivState('div2', false)}}>Add Manga</h1>
                            <div className='bg-zinc-600 w-[20vw] h-[2.5vw] rounded-full flex items-center justify-start px-[0.2vw]'>
                                <div className='w-[2.3vw] h-[2.3vw] rounded-full flex items-center justify-center'><SearchIcon sx={{ fontSize: 20 }} /></div>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    className='w-[80%] h-full px-[1vw] font-light text-[1vw] bg-transparent'
                                />
                                {searchValue && (
                                    <div className='w-[2.3vw] h-[2.3vw] rounded-full bg-zinc-800 flex items-center justify-center' onClick={handleClearInput}><KeyboardArrowRightIcon sx={{ fontSize: 20 }} /></div>
                                )}
                            </div>
                        </div>
                        <div className='w-full h-[3vw] bg-zinc-600 flex items-center justify-between px-[1vw] text-[1vw]'>
                            <h1>Name</h1>
                            <div className='flex items-center justify-between gap-[1vw]'>
                                <h1>Created by</h1>
                                <h1>Created on</h1>
                            </div>

                        </div>
                        {Data.map((data: any) => (
                            <div className='w-full h-[3vw] bg-zinc-800 hover:bg-zinc-700 duration-300 flex items-center justify-between px-[1vw] text-[1vw]' key={data.id} onClick={() => { setManga(data.id), toggleDivState('div2', true), toggleDivState('div1', false), toggleDivState('div3', false), toggleDivState('div4', false)}}>
                                <h1>{data.name}</h1>
                                <div className='flex items-center justify-between gap-[1vw]'>
                                    <h1>Created by</h1>
                                    <h1>{data.date}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='w-[60%] h-full bg-zinc-800'>
                        {divStates.div1 ? <form onSubmit={handleAddManga} className='w-full h-full flex items-start justify-between'>
                            <div className='h-full flex flex-col items-center justify-start border-zinc-600 border-r-2'>
                                <div className='w-full bg-zinc-700 p-[1vw] flex flex-col items-start justify-center gap-[1vw]'>
                                    <label>Manga Name</label>
                                    <input
                                        type='text'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className='w-full text-white bg-zinc-600 p-[0.5vw] rounded-[0.3vw]'
                                        placeholder='Enter manga name'
                                    />
                                </div>
                                <div className='w-full bg-zinc-700 p-[1vw] flex flex-col items-start justify-center gap-[1vw]'>
                                    <label>Manga author name</label>
                                    <input
                                        type='text'
                                        value={author}
                                        onChange={(e) => setAuthor(e.target.value)}
                                        className='w-full text-white bg-zinc-600 p-[0.5vw] rounded-[0.3vw]'
                                        placeholder='Enter manga author name'
                                    />
                                </div>
                                <div className='w-full bg-zinc-700 p-[1vw] flex flex-col items-start justify-center gap-[1vw]'>
                                    <label>Manga description</label>
                                    <input
                                        type='text'
                                        value={info}
                                        onChange={(e) => setInfo(e.target.value)}
                                        className='w-full text-white bg-zinc-600 p-[0.5vw] rounded-[0.3vw]'
                                        placeholder='Enter manga description'
                                    />
                                </div>
                                <div className='w-full flex flex-col items-start justify-center gap-[1vw] p-[1vw]'>
                                    <label className='text-white text-[1vw]'>Manga Genre(Genre 1 will be the main genre!)</label>
                                    <div className='w-full flex items-center justify-evenly gap-[1vw] text-[0.8vw]'>
                                        <input
                                            type='text'
                                            value={genre1}
                                            onChange={(e) => setGenre1(e.target.value)}
                                            className='w-full text-white bg-zinc-600 p-[0.5vw] rounded-[0.3vw]'
                                            placeholder='Enter manga genre 1'
                                        />
                                        <input
                                            type='text'
                                            value={genre2}
                                            onChange={(e) => setGenre2(e.target.value)}
                                            className='w-full text-white bg-zinc-600 p-[0.5vw] rounded-[0.3vw]'
                                            placeholder='Enter manga genre 2'
                                        />
                                        <input
                                            type='text'
                                            value={genre3}
                                            onChange={(e) => setGenre3(e.target.value)}
                                            className='w-full text-white bg-zinc-600 p-[0.5vw] rounded-[0.3vw]'
                                            placeholder='Enter manga genre 3'
                                        />
                                    </div>
                                </div>
                                <input
                                    type='submit'
                                    className='px-[1vw] h-[3vw] bg-zinc-600 text-white rounded hover:bg-zinc-700'
                                />
                            </div>
                            <div className='h-full flex flex-col items-start justify-start gap-[1vw]'>
                                <div className="w-[20vw] h-[30vw] relative border-2 border-zinc-400 rounded-[0.4vw] border-dashed ">
                                    <Image fill={true} src={imagePreview || '/images/covers/borutoCover.jpg'} alt={`${imagePreview}`} className="object-cover" />
                                </div>
                                <input type="file" placeholder="Upload Cover" onChange={handleFileChange} />
                            </div>
                        </form> : <></>}
                        {divStates.div2 ?
                            <div className='w-full h-full flex items-start justify-start'>
                                <div className='w-[40%] h-full flex flex-col items-start justify-start border-r-2 border-zinc-600'>
                                    <div className='w-full h-[3vw] bg-zinc-700 flex items-center justify-between px-[1vw]'><h1>Add Chapter</h1><div className='w-[6vw] h-[2vw] rounded-[0.2vw] bg-sky-500 text-[0.8vw] flex items-center justify-center' onClick={() => { toggleDivState('div4', true), toggleDivState('div3', false) }}>Add Chapter</div></div>
                                    {selectedManga?.chapters.map((data: any) => (
                                        <div className='w-full h-[3vw] flex items-center justify-between px-[1vw] text-[1vw] bg-zinc-600 hover:bg-zinc-800 duration-300' onClick={() => { setChapterId(data.id), toggleDivState('div3', true), toggleDivState('div4', false) }} key={data.id}>
                                            <h1>{data.title}</h1>
                                            <div>{data.number}</div>
                                        </div>
                                    ))}
                                </div>
                                {divStates.div4 ? <form className='w-[60%] h-full flex flex-col items-start justify-start'>
                                    <div className='w-full flex flex-col items-start justify-start p-[1vw] gap-[1vw]'>
                                        <label>Chapter Name</label>
                                        <input
                                            type='text'
                                            value={chapterTitle}
                                            onChange={(e) => setChapterTitle(e.target.value)}
                                            className='w-full px-3 py-2 rounded bg-zinc-700 text-white'
                                            placeholder='Enter chapter title'
                                        />
                                    </div>
                                    <div className='w-full flex flex-col items-start justify-start p-[1vw] gap-[1vw]'>
                                        <label>Chapter Number</label>
                                        <input
                                            type='text'
                                            value={chapterNumber}
                                            onChange={(e) => setChapterNumber(e.target.value)}
                                            className='w-full px-3 py-2 rounded bg-zinc-700 text-white'
                                            placeholder='Enter chapter number'
                                        />
                                    </div>
                                    <div className='w-full flex items-center justify-center'>
                                        <button
                                            type='button'
                                            onClick={handleAddChapter}
                                            className='px-4 py-2 bg-zinc-600 text-white text-[1vw] rounded-[0.2vw] hover:bg-zinc-700'
                                        >
                                            Add Chapter
                                        </button>
                                    </div>
                                </form> : <></>}
                                {divStates.div3 ? <form className='w-[60%] h-full flex flex-col items-start justify-start p-[1vw] gap-[1vw]' id="form" onSubmit={submitForm}>
                                    <label htmlFor='files'>Select files for {selectedChapter?.title}</label>
                                    <input id='files' type="file" multiple onChange={(e) => setFiles(e.target.files)} />
                                    <button type="submit">Upload</button>
                                </form> : <></>}
                            </div>
                            : <></>}
                    </div>
                </div>:<></>}
            </div>
        </div>
    )
}