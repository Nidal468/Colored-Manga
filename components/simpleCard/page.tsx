import Image from 'next/image'
import themes from '@/styles/themes.module.css'
export default function Scard(props: any) {
    return (
            <div className="w-[15vw] h-[26vw] lg:w-[130px] lg:h-[220px] flex flex-col items-center justify-between overflow-hidden" id={themes.outside} style={{borderRadius: "0px 0px 2px 2px"}}>
                <div className='w-[15vw] h-[24vw] lg:w-[130px] lg:h-[200px] relative'><Image fill={true} className="object-cover" src={props.image} alt={props.image} /></div>
                <div className='w-full lg:py-[5px] py-[0.8vw] flex items-center justify-center'><h1 className="w-full lg:text-[8px] text-[1vw] text-center font-medium text-ellipsis overflow-hidden ...">{props.title}</h1></div>
            </div>
    )
}