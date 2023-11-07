import AutoModeIcon from '@mui/icons-material/AutoMode';
import DnsIcon from '@mui/icons-material/Dns';
import Image from 'next/image'
export default function Scard(props: any){
    return(
      <div className='w-full flex items-center justify-between bg-zinc-800 border-r-2 border-cyan-400 pr-[1vw] lg:pr-[10px]'>
      <div className='w-[25vw] h-[35vw] lg:w-[100px] lg:h-[140px] relative'><Image fill={true} className='object-cover' src='/images/assets/fpr.jpg' alt=""/></div>
      <div className='lg:w-[60%] h-full p-[4vw] lg:p-[10px] flex flex-col items-start justify-between text-[2vw] lg:text-[0.8vw]'>
          <h1 className='text-[4vw] lg:text-[15px]'>{props.title}</h1>
          <div className='w-full flex flex-col gap-[4vw] lg:gap-[10px] text-[2vw] lg:text-[10px]'>
          <div className='flex items-center gap-[0.5vw] lg:gap-[5px]'>
              <AutoModeIcon className="text-[4vw] lg:text-[20px]"/>
              <h3>{props.views}</h3>
          </div>
          <div className='w-full flex items-center justify-between'>
              <div className='flex items-center gap-[0.5vw] lg:gap-[5px]'>
                  <DnsIcon className="text-[4vw] lg:text-[20px]"/><h3>Chapter {props.number1}</h3>
              </div>
              <div className='flex items-center gap-[0.5vw] lg:gap-[5px]'>
                  <DnsIcon className="text-[4vw] lg:text-[20px]"/><h3>Chapter {props.number2}</h3>
              </div>
          </div>
          </div>
      </div>
      <div className='w-[6vw] h-[6vw] lg:w-[30px] lg:h-[30px] bg-white flex items-center justify-center rounded-[4px] text-black text-[15px]'>{props.index}</div>
  </div>
    )
}