'use client'
import { useState } from "react"
import AllInboxIcon from '@mui/icons-material/AllInbox';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image'
export default function Form(props: any) {
    const [display, setDisplay] = useState(true);
    const [name, setName] = useState('');
    const [file, setFile] = useState<File>();
    const [author, setAuthor] = useState('');
    const [info, setInfo] = useState('');
    const [genre1, setGenre1] = useState('');
    const [genre2, setGenre2] = useState('');
    const [genre3, setGenre3] = useState('');
    const [imageUrl, setImageUrl] = useState<string>('');

    const handleAddManga = async () => {
       
        const currentDate = new Date();
        const formattedDate = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        }).format(currentDate);
        const newManga = {
            id: new Date().getTime(),
            name: name,
            date: formattedDate,
            author: author,
            info: info,
            genre1: genre1,
            genre2: genre2,
            genre3: genre3,
            cover: imageUrl
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
                addImage(new Event('submit'));
            } else {
                console.error('Failed to add chapter');
            }
        } catch (error) {
            console.error('Error adding chapter:', error);
        }

        setAuthor("")
        setName("")
        setInfo("")
        setGenre1("")
        setGenre2("")
        setGenre3("")
        setImageUrl("")
    };
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);

            // Create a temporary URL for the selected file
            const temporaryUrl = URL.createObjectURL(selectedFile);
            setImageUrl(temporaryUrl);
        }
    };
    const addImage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if (!file) return
        try {
            const data = new FormData()
            data.set('file', file)

            const res = await fetch('api/upload', {
                method: 'POST',
                body: data
            })
            if (res.ok) {
                // Assuming the API response contains the URL of the uploaded image
                const responseJson = await res.json();
                setImageUrl(responseJson.imageUrl);
                console.log('Image uploaded successfully');
            } else {
                console.error('Failed to upload image');
            }
        } catch (e: any) {
            console.error(e)
        }
    }
    return (
        <div className="w-full p-[2vw] lg:p-[10px] justify-between items-center flex font-light lg:text-[15px] text-[2vw]">
            <div className="flex items-center gap-[1vw]"><AllInboxIcon sx={{ fontSize: "15px" }} />All Mangas</div>
            <div onClick={() => setDisplay(false)}><AddIcon sx={{ fontSize: "15px" }} /></div>
            <div className="w-[50%] h-[90%] bg-zinc-800 fixed z-50 top-[9%] left-[25%] p-[20px]" style={{ display: display ? "none" : "flex" }}>
                <div className='w-full flex items-center justify-between'>
                    <form onSubmit={handleAddManga}>
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
                        <div className='mb-4'>
                            <label className='block text-white text-sm mb-2'>Manga author name</label>
                            <input
                                type='text'
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                className='w-full px-3 py-2 rounded bg-zinc-700 text-white'
                                placeholder='Enter manga author name'
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-white text-sm mb-2'>Manga description</label>
                            <input
                                type='text'
                                value={info}
                                onChange={(e) => setInfo(e.target.value)}
                                className='w-full px-3 py-2 rounded bg-zinc-700 text-white'
                                placeholder='Enter manga description'
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-white text-sm mb-2'>Manga Genre 1 (this will be the main genre!)</label>
                            <input
                                type='text'
                                value={genre1}
                                onChange={(e) => setGenre1(e.target.value)}
                                className='w-full px-3 py-2 rounded bg-zinc-700 text-white'
                                placeholder='Enter manga genre 1'
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-white text-sm mb-2'>Manga Genre 2</label>
                            <input
                                type='text'
                                value={genre2}
                                onChange={(e) => setGenre2(e.target.value)}
                                className='w-full px-3 py-2 rounded bg-zinc-700 text-white'
                                placeholder='Enter manga genre 2'
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-white text-sm mb-2'>Manga Genre 3</label>
                            <input
                                type='text'
                                value={genre3}
                                onChange={(e) => setGenre3(e.target.value)}
                                className='w-full px-3 py-2 rounded bg-zinc-700 text-white'
                                placeholder='Enter manga genre 3'
                            />
                        </div>
                        <div className="absolute w-[200px] h-[360px] top-[2%] right-[2%] flex flex-col items-start justify-center gap-[20px]">
                            <div className="w-full h-full relative border-2 border-zinc-400 rounded-[5px] border-dashed ">
                                <Image fill={true} src={imageUrl || '/images/assets/fpr.jpg'} alt={`${file}`} className="object-cover"/>
                            </div>
                            <input type="file" placeholder="Upload Cover" onChange={handleImageChange}/>
                        </div>
                        <input
                            type='submit'
                            className='px-4 py-2 bg-zinc-600 text-white rounded hover:bg-zinc-700'
                        />
                    </form>
                </div>
            </div>
        </div>

    )
}