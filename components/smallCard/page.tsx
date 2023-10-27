import AutoModeIcon from '@mui/icons-material/AutoMode';
import DnsIcon from '@mui/icons-material/Dns';

export default function Scard(props: any){
    return(
      <div className='w-full flex items-center justify-between bg-zinc-800 border-r-2 border-cyan-400 pr-2'>
      <img className='w-[20%]' src='/images/assets/fpr.jpg' />
      <div className='w-[60%] h-full py-[2vw] lg:p-0 lg:py-2 flex flex-col items-start justify-evenly text-[2vw] lg:text-[0.8vw]'>
          <h1 className='text-[3vw] lg:text-[1.2vw]'>{props.title}</h1>
          <div className='w-full flex flex-col gap-[4vw] lg:gap-[1vw]'>
          <div className='flex items-center gap-[0.8vw]'>
              <AutoModeIcon sx={{ color: '#fff' , fontSize: "150%"}}/>
              <h3>{props.views}</h3>
          </div>
          <div className='w-full flex items-center justify-between'>
              <div className='flex items-center gap-[0.8vw]'>
                  <DnsIcon sx={{ color: '#fff' , fontSize: "150%"}}/><h3>Chapter {props.number1}</h3>
              </div>
              <div className='flex items-center gap-[0.8vw]'>
                  <DnsIcon sx={{ color: '#fff' , fontSize: "150%"}}/><h3>Chapter {props.number2}</h3>
              </div>
          </div>
          </div>
      </div>
      <div className='w-[6vw] h-[6vw] lg:w-[2vw] lg:h-[2vw] bg-white flex items-center justify-center rounded-[0.4vw] text-black'>{props.index}</div>
  </div>
    )
}