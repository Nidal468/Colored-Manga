import Image from 'next/image'
import themes from '@/styles/themes.module.css'
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import DnsIcon from '@mui/icons-material/Dns';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import StarBorderIcon from '@mui/icons-material/StarBorder';
export default function Scard(props: any) {
    return (
        <div className="w-[30vw] h-[52vw] lg:w-[160px] lg:h-[269px] flex flex-col items-center justify-between overflow-hidden lg:rounded-[8px] rounded-[1vw]" id={themes.outside}>
            <div className='w-full h-[47vw] lg:h-[269px] relative lg:rounded-b-[5px] rounded-[1vw] overflow-hidden'>
                <Image fill={true} className="object-cover" src={props.image} alt={props.image} />
            </div>
            <div className='absolute w-[30vw] h-[52vw] lg:w-[160px] lg:h-[269px] flex flex-col items-start justify-start border-2 rounded-[10px] p-[10px] text-[15px] gap-[10px] backdrop-blur-[10px]' id={themes.gradientcards}>
                <div className='font-medium'>{props.title}</div>
                <div className='font-medium text-[10px] flex items-center gap-[10px]'><DataSaverOnIcon sx={{fontSize: "15px"}}/>Version Colored</div>
                <div className='font-medium text-[10px] flex items-center gap-[10px]'><StarBorderIcon sx={{fontSize: "15px"}}/>{props.ratings}</div>
                <div className='font-medium text-[10px] flex items-center gap-[10px]'><AutoModeIcon sx={{fontSize: "15px"}}/>{props.views}</div>
                <div className='font-medium text-[10px] flex items-center gap-[10px]'><DnsIcon sx={{fontSize: "15px"}}/>Chapter {props.chapter}</div>
                <div className='w-full h-full flex items-end justify-center pb-[10px]'><div className='w-[60%] h-[20px] flex items-center justify-center bg-white rounded-[3px] text-black text-[10px]'><h1>Read Now</h1></div></div>
            </div>
            <div className='w-full h-[5vw] lg:h-[30px] flex items-center justify-center'>
                <h1 className="w-full lg:text-[8px] text-[1.8vw] text-center font-medium text-ellipsis overflow-hidden">{props.title}</h1>
            </div>
        </div>
    )
}