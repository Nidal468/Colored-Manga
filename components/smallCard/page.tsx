import VisibilityIcon from '@mui/icons-material/Visibility';
import DnsIcon from '@mui/icons-material/Dns';
import themes from '@/styles/themes.module.css'
import Link from 'next/link'
export default function Scard(props: any) {
    return (
        <Link href={`/manga/${props.id}`} className='w-full flex items-center justify-between border-r-2 border-cyan-400 pr-[1vw] lg:pr-[10px]' id={themes.outside}>
            <img className='w-[22vw] h-[30vw] lg:w-[100px] lg:h-[140px] relative object-cover' src={props.cover} alt={props.cover} loading='lazy' />
            <div className='lg:w-[60%] w-[70%] h-full p-[2vw] lg:p-[10px] flex flex-col items-start justify-between text-[2vw] lg:text-[0.8vw]'>
                <div className='flex flex-col items-start justify-start gap-[5px]'>
                    <h1 className='text-[4vw] lg:text-[15px]'>{props.title}</h1>
                    <h1 className='text-[3vw] lg:text-[10px]'>{props.author}</h1>
                </div>
                <div className='w-full flex flex-col gap-[4vw] lg:gap-[10px] text-[2vw] lg:text-[10px]'>
                    <div className='flex items-center gap-[0.5vw] lg:gap-[5px]'>
                        <VisibilityIcon sx={{ fontSize: "15px" }} />
                        <h3>{props.views}</h3>
                    </div>
                    <div className='w-full flex items-center justify-start gap-[2vw]'>
                        <div className='flex items-center gap-[0.5vw] lg:gap-[5px]'>
                            <DnsIcon sx={{ fontSize: "15px" }} /><h3>{props.number1}</h3>
                        </div>
                        <div className='flex items-center gap-[0.5vw] lg:gap-[5px]'>
                            <DnsIcon sx={{ fontSize: "15px" }} /><h3>{props.number2}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[6vw] h-[6vw] lg:w-[30px] lg:h-[30px] bg-white flex items-center justify-center rounded-[4px] text-black text-[15px]'>{props.index}</div>
        </Link>
    )
}