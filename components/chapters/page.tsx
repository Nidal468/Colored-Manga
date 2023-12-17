'use client'
import { useState } from 'react'
import Data from '@/public/data/manga.json'
import themes from '@/styles/themes.module.css'
import SearchIcon from '@mui/icons-material/Search';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link'
import { Guest } from '@/components/guest/page'


export default function List(props: any) {
  const selectedManga = Data.find((manga: any) => manga.id === props.id);
  const chaptersData = selectedManga?.chapters || [];
  const [display, setDisplay] = useState(true);
  const [chapterNumber, setChapterNumber] = useState('');
  const [chapterTitle, setChapterTitle] = useState('');
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
      index: props.id.toString()
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

  return (
    <div className='w-full flex flex-col rounded-[0.5vw] lg:rounded-[5px] overflow-hidden lg:text-[15px] text-[10px]' id={themes.box}>
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
      <Guest/>
      <div className='w-full flex items-center justify-between border-b border-zinc-500' id={themes.solid}>
        <div className='w-full flex items-center px-[1vw] gap-[10px] lg:px-[12px]'><SearchIcon sx={{ fontSize: { xs: 12, lg: 15 } }} />
          <input type="text" className='w-full flex items-center bg-transparent' placeholder='Enter chapter number' /><div onClick={() => setDisplay(false)}><AddIcon sx={{ fontSize: "15px" }} /></div>
        </div>
        <div className='flex'>
          <div className='px-[2vw] py-[0.8vw] lg:px-[24px] lg:py-[8px] flex items-center justify-center' id={themes.button}>Chapter</div>
        </div>
      </div>
      <div className='w-full flex flex-col'>
        {chaptersData.map((data: any) => {
          const viewedCount = new Set(data.viewed).size;
          return (
            <Link href={`/manga/${props.id}/${data.id}`} key={data.id}>
              <div className='w-full flex items-center justify-between px-[10px] py-[15px] lg:px-[15px] lg:py-[15px] text-[8px] lg:text-[10px]' id={themes.hover} key={data.id}>
                <h1 className='flex items-center gap-[0.5vw]'>Chapter {data.number} - {data.title}</h1>
                <div className='h-full flex items-center lg:gap-[15px] gap-[5px]'>
                  <div className='flex h-full items-center lg:gap-[10px] gap-[5px]'><VisibilityIcon sx={{ fontSize: { xs: 12, lg: 15 } }} />{viewedCount}</div>
                  <div onClick={() => handleDeleteChapter(data.id)}><DeleteIcon sx={{ fontSize: { xs: 12, lg: 15 } }} /></div>
                  <h1 className='text-[6px] lg:text-[8px]'>{data.date}</h1>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}