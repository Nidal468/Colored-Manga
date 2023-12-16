import Image from 'next/image'
import themes from '@/styles/themes.module.css'
export default function Scard(props: any) {
    return (
        <div className="w-[30vw] h-[52vw] lg:w-[160px] lg:h-[269px] flex flex-col items-center justify-between overflow-hidden lg:rounded-[2px] rounded-[1vw]" id={themes.outside}>
                <img className="w-full h-[47vw] lg:h-[269px] relative lg:rounded-t-[2px]  rounded-t-[1vw] overflow-hidden object-cover" src={props.image} alt={props.image} sizes="8000px, 8000px" loading='lazy'/>
            <div className='px-[10px] py-[5px] bg-zinc-800 absolute left-0 top-0 flex items-center justify-center lg:text-[15px] text-[8px] lg:rounded-tl-[2px] rounded-tl-[1vw] lg:rounded-br-[5px] rounded-br-[1vw] font-medium'><h1>B/W</h1></div>
            <div className='w-full h-[5vw] lg:h-[30px] flex items-center justify-center'>
                <h1 className="w-full lg:text-[8px] text-[1.8vw] text-center font-medium text-ellipsis overflow-hidden">{props.title}</h1>
            </div>
        </div>
    )
}