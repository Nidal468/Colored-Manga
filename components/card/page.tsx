import Image from 'next/image'
import themes from "@/styles/themes.module.css"
export default function Card(props: any){
    return(
        <div className="w-[48%] justify-start items-start flex rounded-[2px]" id={themes.outside}>
      <div className="w-[28vw] h-[26vw] lg:w-[200px] lg:h-[190px] bg-white relative">
        <Image fill={true} src="/images/assets/fpr.jpg" alt="" className='object-cover'/>
      </div>
      <div className="w-full lg:py-[5px] flex flex-col justify-center items-center gap-[1.2vw] lg:gap-[12px] text-[1vw] lg:text-[12px]">
        <div className="w-[90%] flex-col justify-start items-start gap-[0.5vw] flex">
          <div className="text-white text-[2vw] lg:text-[16px] font-medium">{props.title}</div>
          <div className="text-[1.5vw] lg:text-[10px]">{props.author}</div>
        </div>
        <div className="lg:p-[0.4vw] p-[1.5vw] lg:p-[6px] w-[90%] rounded-sm flex justify-between items-center" id={themes.hover}>
          <div>Chapter {props.number1}</div>
          <div>{props.date1}</div>
        </div>
        <div className="lg:p-[0.4vw] p-[1.5vw] lg:p-[6px] w-[90%] rounded-sm flex justify-between items-center" id={themes.hover}>
          <div>Chapter {props.number2}</div>
          <div>{props.date2}</div>
        </div>
        <div className="lg:p-[0.4vw] p-[1.5vw] lg:p-[6px] w-[90%] rounded-sm flex justify-between items-center" id={themes.hover}>
          <div>Chapter {props.number3}</div>
          <div>{props.date3}</div>
        </div>
      </div>
    </div>
    )
}