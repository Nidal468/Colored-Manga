import Image from 'next/image'
import themes from '@/styles/themes.module.css'
export default function Scard(props: any) {
    return (
            <div className="w-[30vw] h-[52vw] lg:w-[160px] lg:h-[269px] flex flex-col items-center justify-between overflow-hidden lg:rounded-[8px] rounded-[1vw]" id={themes.outside}>
                <div className='w-full h-[47vw] lg:h-[269px] relative lg:rounded-b-[5px] rounded-[1vw] overflow-hidden'><Image fill={true} className="object-cover" src={props.image} alt={props.image} /><div className='absolute w-[4vw] h-[8vw] bg-blue-500 flex items-center justify-center lg:hidden text-[3vw] rounded-br-[1vw]'><h1>0</h1></div></div>
                <div className='w-full h-[5vw] lg:h-[30px] flex items-center justify-center'><h1 className="w-full lg:text-[8px] text-[1.8vw] text-center font-medium text-ellipsis overflow-hidden ...">{props.title}</h1></div>
            </div>
    )
}