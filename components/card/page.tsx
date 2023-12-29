import themes from "@/styles/themes.module.css"
import Link from 'next/link'

export default function Card(props: any) {

  return (
    <Link href={props.link} className='w-full lg:w-[48%]'>
      <div className="w-full justify-start items-start flex rounded-[2px]" id={themes.outside}>
        <img className="w-[32vw] h-[35vw] lg:w-[140px] lg:h-[190px] bg-white relative object-cover" src={props.image} alt={props.image} sizes="8000px, 8000px" loading='lazy' />
        <div className="w-full lg:py-[14px] py-[2vw] flex flex-col justify-center items-center gap-[1.2vw] lg:gap-[8px] text-[2vw] lg:text-[12px]">
          <div className="w-[90%] flex-col justify-start items-start gap-[0.5vw] flex">
            <div className="text-white text-[3vw] lg:text-[16px] font-medium">{props.title}</div>
            <div className="text-[2vw] lg:text-[10px]">{props.author}</div>
          </div>
          <div className="p-[1.5vw] lg:p-[6px] w-[90%] rounded-sm flex justify-between items-center" id={themes.hover}>
            <div>{props.number1}</div>
            <div>{props.date1}</div>
          </div>
          <div className="p-[1.5vw] lg:p-[6px] w-[90%] rounded-sm flex justify-between items-center" id={themes.hover}>
            <div>{props.number2}</div>
            <div>{props.date2}</div>
          </div>
          <div className="p-[1.5vw] lg:p-[6px] w-[90%] rounded-sm flex justify-between items-center" id={themes.hover}>
            <div>{props.number3}</div>
            <div>{props.date3}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}