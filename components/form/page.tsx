'use client'

import { useState } from "react";
import Image from 'next/image';
import Data from '@/public/data/manga.json'
import themes from '@/style/themes.module.css'
import SearchIcon from '@mui/icons-material/Search';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link'
export function AddManga(props: any) {
  const { close } = props
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

  return (
    <div className="w-full h-full z-50 bg-zinc-800 flex items-start justify-center py-[5vw] gap-[4vw]" style={{ display: props.Display }}>
      <form onSubmit={handleAddManga} className="w-[80%] flex items-start justify-between gap-[1vw]">
        <div className="w-full h-full flex flex-col">
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
            <div className='mb-4 w-[20vw]'>
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
              className='w-full px-[0.5vw] py-[1vw] rounded bg-zinc-700 text-white'
              placeholder='Enter manga description'
            />
          </div>
          <label className='block text-white text-sm mb-2'>Manga Genre(Genre 1 will be the main genre!)</label>
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
            className='px-[1vw] h-[3vw] bg-zinc-600 text-white rounded hover:bg-zinc-700'
          />
        </div>
        <div className="h-full flex items-start">
          <div className="w-[20vw] h-[30vw] flex flex-col items-start justify-center gap-[20px]">
            <div className="w-full h-full relative border-2 border-zinc-400 rounded-[0.4vw] border-dashed ">
              <Image fill={true} src={imagePreview || '/images/cover/boruto.jpg'} alt={`${imagePreview}`} className="object-cover" />
            </div>
            <input type="file" placeholder="Upload Cover" onChange={handleFileChange} />
          </div>
        </div>
      </form>
      <div onClick={close}><PowerSettingsNewIcon fontSize="medium" /></div>
    </div>
  );
}
export function AddChapter(props: any) {
  const [chapterId, setChapterId] = useState('')
  const selectedManga = Data.find((manga: any) => manga.id === props.id);
  const selectedChapter = selectedManga?.chapters.find((chapter: any) => chapter.id === chapterId);
  const chaptersData = selectedManga?.chapters || [];
  const [display, setDisplay] = useState(true);
  const [isPage, setPage] = useState(false)
  const [chapterNumber, setChapterNumber] = useState('');
  const [chapterTitle, setChapterTitle] = useState('');
  const [files, setFiles] = useState<FileList | null>(null);
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
      index: props.id.toString(),
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
  
    // Append additional data
    formData.append('title', selectedChapter?.title || '');
    formData.append('name', selectedManga?.name || '');
    formData.append('index', selectedManga?.id || '');
    formData.append('id', selectedChapter?.id || '');
    // Append files
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
    <div className='w-full flex flex-col rounded-[0.5vw] lg:rounded-[5px] overflow-hidden lg:text-[15px] text-[10px]' id={themes.box}>
      <div className="p-[1vw] border-b flex items-center justify-between"><h1>{selectedManga?.name}</h1><h1>Total Chapters {chaptersData.length}</h1></div>
      <div className='w-[50%] h-[90%] bg-zinc-800 fixed z-50 top-[9%] left-[25%] p-[20px]' style={{ display: display ? "none" : "flex" }}>
        <div className='w-full h-full flex flex-col items-start justify-start'>
          <div className='w-full flex items-center justify-between'>
            <h1>Add a new chapter</h1>
            <div onClick={() => setDisplay(true)}><PowerSettingsNewIcon sx={{ fontSize: "15px" }} /></div>
          </div>
          <form>
            <div className='mb-4'>
              <label className='block text-white text-sm mb-2'>Chapter Number:</label>
              <input
                type='text'
                value={chapterNumber}
                onChange={(e) => setChapterNumber(e.target.value)}
                className='w-full px-3 py-2 rounded bg-zinc-700 text-white'
                placeholder='Enter chapter number'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-white text-sm mb-2'>Chapter Title:</label>
              <input
                type='text'
                value={chapterTitle}
                onChange={(e) => setChapterTitle(e.target.value)}
                className='w-full px-3 py-2 rounded bg-zinc-700 text-white'
                placeholder='Enter chapter title'
              />
            </div>
            <button
              type='button'
              onClick={handleAddChapter}
              className='px-4 py-2 bg-zinc-600 text-white rounded hover:bg-zinc-700'
            >
              Add Chapter
            </button>
          </form>
        </div>
      </div>
      <div className='w-full flex items-center justify-between border-b border-zinc-500' id={themes.solid}>
        <div className='w-full flex items-center px-[1vw] gap-[10px] lg:px-[12px]'><SearchIcon sx={{ fontSize: "15px" }} />
          <input type="text" className='w-full flex items-center bg-transparent' placeholder='Enter chapter number' /><div onClick={() => setDisplay(false)}><AddIcon sx={{ fontSize: "15px" }} /></div>
        </div>
        <div className='flex'>
          <div className='px-[2vw] py-[0.8vw] lg:px-[24px] lg:py-[8px] flex items-center justify-center' id={themes.button}>Chapter</div>
        </div>
      </div>
      <div className='w-full flex flex-col'>
        {chaptersData.map((data: any) => (
          <div className='w-full flex items-center justify-between px-[2vw] py-[2vw] lg:px-[15px] lg:py-[15px] text-[8px] lg:text-[10px]' id={themes.hover} key={data.id} onClick={() => setChapterId(data.id)}>
            <h1 className='flex items-center gap-[0.5vw]'>Chapter {data.number} - {data.title}</h1>
            <div className='h-full flex items-center lg:gap-[15px] gap-[5px]'>
              <div onClick={() => setPage(true)}><AddIcon sx={{ fontSize: "15px" }} /></div>
              <div className='flex h-full items-center lg:gap-[10px] gap-[5px]'><VisibilityIcon sx={{ fontSize: "15px" }} />12k</div>
              <div onClick={() => handleDeleteChapter(data.id)}><DeleteIcon sx={{ fontSize: "15px" }} /></div>
              <h1 className='text-[6px] lg:text-[8px]'>{data.date}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute w-[75vw] h-full flex items-center justify-center" style={{ display: isPage ? "flex" : "none" }}>
        <form className="w-[70%] h-[80%] bg-zinc-600 p-[1vw] flex items-center justify-start flex-col" id="form" onSubmit={submitForm}>
          <div className="w-[95%] bg-zinc-800 flex flex-col gap-[1vw] p-[1vw]">
            <label htmlFor='files'>Select files for {selectedChapter?.title}</label>
            <input id='files' type="file" multiple onChange={(e) => setFiles(e.target.files)} />
          </div>
          <button type="submit">Upload</button>
        </form>
        <div onClick={() => setPage(false)}><PowerSettingsNewIcon /></div>
      </div>
    </div>
  )
}
