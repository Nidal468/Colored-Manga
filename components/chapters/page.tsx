import themes from '@/styles/themes.module.css'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function List() {
    return(
        <div className='w-full min-h-[20vw] flex flex-col rounded-[0.5vw] overflow-hidden' id={themes.box}>
            <div className='w-full flex items-center justify-between border-b border-zinc-500' id={themes.solid}>
                <div className='w-full flex items-center px-[1vw]'><SearchIcon/><input type="text" id={themes.solid} className='w-full flex items-center' placeholder='Enter chapter number'/></div>
                <div className='flex'>
                <div className='px-[2vw] py-[0.8vw] flex items-center justify-center' id={themes.button}>Chapter</div>
                <div className='px-[2vw] py-[0.8vw] flex items-center justify-center' id={themes.button}>Volume</div>
                </div>
            </div>
            <div className='w-full flex flex-col'>
                <div className='w-full flex items-center justify-between px-[1vw] py-[1vw]'  id={themes.hover}><h1 className='flex gap-[0.5vw]'><KeyboardArrowRightIcon id={themes.arrow}/>Chapter 100-title</h1><h1 className='text-[0.9vw]'>Oct 19th 2023</h1></div>
                <div className='w-full flex items-center justify-between px-[1vw] py-[1vw]'  id={themes.hover}><h1 className='flex gap-[0.5vw]'><KeyboardArrowRightIcon id={themes.arrow}/>Chapter 100-title</h1><h1 className='text-[0.9vw]'>Oct 19th 2023</h1></div>
                <div className='w-full flex items-center justify-between px-[1vw] py-[1vw]'  id={themes.hover}><h1 className='flex gap-[0.5vw]'><KeyboardArrowRightIcon id={themes.arrow}/>Chapter 100-title</h1><h1 className='text-[0.9vw]'>Oct 19th 2023</h1></div>
                <div className='w-full flex items-center justify-between px-[1vw] py-[1vw]'  id={themes.hover}><h1 className='flex gap-[0.5vw]'><KeyboardArrowRightIcon id={themes.arrow}/>Chapter 100-title</h1><h1 className='text-[0.9vw]'>Oct 19th 2023</h1></div>
                <div className='w-full flex items-center justify-between px-[1vw] py-[1vw]'  id={themes.hover}><h1 className='flex gap-[0.5vw]'><KeyboardArrowRightIcon id={themes.arrow}/>Chapter 100-title</h1><h1 className='text-[0.9vw]'>Oct 19th 2023</h1></div>
                <div className='w-full flex items-center justify-between px-[1vw] py-[1vw]'  id={themes.hover}><h1 className='flex gap-[0.5vw]'><KeyboardArrowRightIcon id={themes.arrow}/>Chapter 100-title</h1><h1 className='text-[0.9vw]'>Oct 19th 2023</h1></div>
                <div className='w-full flex items-center justify-between px-[1vw] py-[1vw]'  id={themes.hover}><h1 className='flex gap-[0.5vw]'><KeyboardArrowRightIcon id={themes.arrow}/>Chapter 100-title</h1><h1 className='text-[0.9vw]'>Oct 19th 2023</h1></div>
                <div className='w-full flex items-center justify-between px-[1vw] py-[1vw]'  id={themes.hover}><h1 className='flex gap-[0.5vw]'><KeyboardArrowRightIcon id={themes.arrow}/>Chapter 100-title</h1><h1 className='text-[0.9vw]'>Oct 19th 2023</h1></div>
                <div className='w-full flex items-center justify-between px-[1vw] py-[1vw]'  id={themes.hover}><h1 className='flex gap-[0.5vw]'><KeyboardArrowRightIcon id={themes.arrow}/>Chapter 100-title</h1><h1 className='text-[0.9vw]'>Oct 19th 2023</h1></div>

                
            </div>
        </div>
    )
}