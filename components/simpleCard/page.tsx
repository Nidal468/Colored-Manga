import Image from 'next/image'
import themes from '@/styles/themes.module.css'
export default function Scard(props: any) {
    return (
            <div className="w-[12vw] h-[20vw] flex flex-col items-center justify-between" id={themes.outside}>
                <div className='w-[12vw] h-[17vw] relative'><Image fill={true} className="object-cover" src={props.image} alt={props.image} /></div>
                <h1 className="w-full h-[2.1vw] text-[0.8vw] text-center font-medium text-ellipsis overflow-hidden ... px-[0.5vw]">{props.title}</h1>
            </div>
    )
}