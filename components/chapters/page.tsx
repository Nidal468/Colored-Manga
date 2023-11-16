'use client'
import { useState } from 'react'
import Data from '@/public/data/manga.json'
import themes from '@/styles/themes.module.css'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
export default function List(props: any) {
  
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
      id: new Date().getTime(),
      number: chapterNumber,
      title: chapterTitle,
      date: formattedDate,
      index: props.id
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
    <div className='w-full flex flex-col rounded-[0.5vw] lg:rounded-[5px] overflow-hidden text-[15px]' id={themes.box}>
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
          <div className='px-[2vw] py-[0.8vw] lg:px-[24px] lg:py-[8px] flex items-center justify-center' id={themes.button}>Volume</div>
        </div>
      </div>
      <div className='w-full flex flex-col'>
        {Data[props.id].chapters.map((data: any) => (
          <div className='w-full flex items-center justify-between px-[1.5vw] py-[1vw] lg:px-[15px] lg:py-[10px]' id={themes.hover} key={data.id}>
            <h1 className='flex gap-[0.5vw]'><KeyboardArrowRightIcon id={themes.arrow} />Chapter {data.number} - {data.title}</h1>
            <div className='h-full flex items-center gap-[15px]'>
              <div className='flex h-full items-center gap-[10px]'><VisibilityIcon sx={{ fontSize: "15px" }} />{data.id}</div>
              <EditIcon sx={{ fontSize: "15px" }} /><div onClick={() => handleDeleteChapter(data.id)}><DeleteIcon sx={{ fontSize: "15px" }} /></div>
            </div>
            <h1 className='text-[10px]'>{data.date}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}