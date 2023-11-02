import Image from 'next/image'

export default function Card(props: any){
    return(
        <div className="Cards1 w-[48%] bg-gradient-to-r from-zinc-800 via-zinc-800 to-neutral-700 backdrop-blur-[20px] justify-start items-start flex rounded-[0.4vw]">
      <div className="Frame14 w-[18.2vw] h-[18vw] lg:w-[12vw] bg-white shadow relative">
        <Image fill={true} src="/images/assets/fpr.jpg" alt="" className='object-cover'/>
      </div>
      <div className="Frame3665 lg:py-[1vw] py-[2vw] grow shrink basis-0 self-stretch flex-col justify-start items-center gap-[1vw] inline-flex">
        <div className="Frame3669 w-[90%] flex-col justify-start items-start gap-[0.5vw] flex">
          <div className="ReturnOfTheFrozenPlayer text-white text-[1.2vw] font-medium">{props.title}</div>
          <div className="AuthorName text-sky-500 text-[1vw]">{props.author}</div>
        </div>
        <div className="lg:p-[0.4vw] p-[1.5vw] w-[90%] bg-white bg-opacity-10 rounded-sm flex justify-between items-center">
          <div className="text-white text-[1.5vw] lg:text-[0.9vw] font-light">Chapter {props.number1}</div>
          <div className="text-white text-opacity-60 text-[1.5vw] lg:text-[0.9vw] font-light">{props.date1}</div>
        </div>
        <div className="lg:p-[0.4vw] p-[1.5vw] w-[90%] bg-white bg-opacity-10 rounded-sm flex justify-between items-center">
          <div className="text-white text-[1.5vw] lg:text-[0.9vw] font-light">Chapter {props.number2}</div>
          <div className="text-white text-opacity-60 text-[1.5vw] lg:text-[0.9vw] font-light">{props.date2}</div>
        </div>
        <div className="lg:p-[0.4vw] p-[1.5vw] w-[90%] bg-white bg-opacity-10 rounded-sm flex justify-between items-center">
          <div className="text-white text-[1.5vw] lg:text-[0.9vw] font-light">Chapter {props.number3}</div>
          <div className="text-white text-opacity-60 text-[1.5vw] lg:text-[0.9vw] font-light">{props.date3}</div>
        </div>
      </div>
    </div>
    )
}