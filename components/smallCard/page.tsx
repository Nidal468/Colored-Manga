import AutoModeIcon from '@mui/icons-material/AutoMode';
import DnsIcon from '@mui/icons-material/Dns';
import Image from 'next/image'
export default function Scard(props: any){
    return(
      <div className='w-full flex items-center justify-between bg-zinc-800 border-r-2 border-cyan-400 pr-[1vw]'>
      <div className='w-[25vw] h-[35vw] lg:w-[8vw] lg:h-[12vw] relative'><Image fill={true} className='object-cover' src='/images/assets/fpr.jpg' alt=""/></div>
      <div className='lg:w-[60%] h-full p-[2vw] lg:p-[1vw] flex flex-col items-start justify-between text-[2vw] lg:text-[0.8vw]'>
          <h1 className='text-[4vw] lg:text-[1.2vw]'>{props.title}</h1>
          <div className='w-full flex flex-col gap-[4vw] lg:gap-[1vw] text-[2vw] lg:text-[0.6vw]'>
          <div className='flex items-center gap-[0.5vw]'>
              <AutoModeIcon className="text-[4vw] lg:text-[1.5vw]"/>
              <h3>{props.views}</h3>
          </div>
          <div className='w-full flex items-center justify-between'>
              <div className='flex items-center gap-[0.5vw]'>
                  <DnsIcon className="text-[4vw] lg:text-[1.5vw]"/><h3>Chapter {props.number1}</h3>
              </div>
              <div className='flex items-center gap-[0.5vw]'>
                  <DnsIcon className="text-[4vw] lg:text-[1.5vw]"/><h3>Chapter {props.number2}</h3>
              </div>
          </div>
          </div>
      </div>
      <div className='w-[6vw] h-[6vw] lg:w-[2vw] lg:h-[2vw] bg-white flex items-center justify-center rounded-[0.4vw] text-black'>{props.index}</div>
  </div>
    )
}