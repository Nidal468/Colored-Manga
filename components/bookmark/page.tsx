'use client'

import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import themes from '@/styles/themes.module.css'
import Data from '@/public/data/bookmark.json'


export default function Bookmark(props: any) {

    const selectedBookmark = Data.find((data: any) => data.id === props.id);

    const handleBookmark = async () => {
        const formData = new FormData();
        formData.append('id', props.id || '');

        if (!selectedBookmark) {

            try {
                const response = await fetch("/api/addBookmark", {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    alert('Added')
                }
            } catch (error) {
                console.error("Error occurred", error);
            }
        } else {
            try {
                const response = await fetch("/api/deleteBookmark", {
                    method: 'DELETE',
                    body: formData,
                });

                if (response.ok) {
                    alert('Removed')
                }
            } catch (error) {
                console.error("Error occurred", error);
            }
        }
    }
    return (
        <div className='px-[1.2vw] py-[0.6vw] lg:px-[14px] lg:py-[8px] rounded-[0.8vw] lg:rounded-[4px] text-[1.5vw] lg:text-[12px] flex items-center justify-between gap-[1vw] lg:gap-[12px]' id={themes.button} onClick={handleBookmark}>Bookmark<BookmarkAddIcon sx={{ fontSize: { xs: 12, lg: 15 } }} /></div>
    )
}