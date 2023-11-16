import Card from '../smallCard/page'
import AutoModeIcon from '@mui/icons-material/AutoMode';
import DnsIcon from '@mui/icons-material/Dns';
import Data from '@/public/data/manga.json'
import Image from 'next/image'
import themes from "@/styles/themes.module.css"
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

export default function Popularity() {
    
    return (
        <div className='w-full xl:w-[360px] lg:w-[310px] flex flex-col items-center justify-center gap-[20px] hidden lg:flex'>
            <div className='w-full p-[2vw] lg:p-[10px] rounded-[1px] justify-between items-center flex font-light text-[2vw] lg:text-[10px]' id={themes.outside}>
                <div className='flex gap-[1vw] items-center'><LeaderboardIcon className="text-[4vw] lg:text-[20px]" />Most Viewed</div>
                <div className='flex items-center justify-between gap-[2vw] lg:gap-[5px]'>
                    <div id={themes.dimtext}>Day</div>
                    <div id={themes.dimtext}>Week</div>
                    <div id={themes.dimtext}>Month</div>
                </div>
            </div>
            <div className='w-full h-[40vw] xl:h-[250px] lg:h-[220px] flex flex-col items-center justify-end rounded-[3px] overflow-hidden'>
                <div className='w-[96vw] xl:w-[357px] lg:w-[310px] h-[40vw] xl:h-[250px] lg:h-[220px] absolute overflow-hidden'>
                    <Image fill={true} alt={Data[0].cover} src={Data[0].cover} className='object-cover' />
                </div>
                <div className='w-[98vw] lg:w-full h-[60%] xl:h-[42%] lg:h-[50%] bg-white bg-opacity-5 backdrop-blur-[50px] flex items-center justify-between px-[8px]'>
                    <div className='w-[90%] lg:w-[85%] bg-zinc-800 bg-opacity-50 rounded-[0.6vw] lg:rounded-[6px] lg:p-[6px] text-[2vw] lg:text-[10px] flex flex-col items-start justify-start gap-[2vw] lg:gap-[5px]'>
                        <h1 className='lg:text-[15px] text-[3vw]'>{Data[0].name}</h1>
                        <div className='flex items-center gap-[0.8vw] lg:gap-[8px]'>
                            <AutoModeIcon sx={{fontSize: "15px"}}/>
                            <h3>{Data[0].views}</h3>
                        </div>
                        <div className='flex items-center justify-start gap-[2vw] lg:gap-[20px]'>
                            <div className='flex items-center gap-[0.8vw] lg:gap-[8px]'>
                                <DnsIcon sx={{fontSize: "15px"}}/><h3>Chapter {1}</h3>
                            </div>
                            <div className='flex items-center gap-[0.8vw] lg:gap-[8px]'>
                                <DnsIcon sx={{fontSize: "15px"}}/><h3>Chapter {1}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='w-[6vw] h-[6vw] lg:w-[25px] lg:h-[25px] bg-white flex items-center justify-center rounded-[5px] text-black'>1</div>
                </div>
            </div>
            <div className='w-full flex flex-wrap lg:gap-[10px] gap-[2vw]'>
                {Data.map((data:any, index: any) =>{
                    const chapters = Array.isArray(data.chapters) ? data.chapters : [];
                    const lastChapterNumber1 = chapters.length > 0 ? chapters[chapters.length - 1].number : null;
                    const lastChapterNumber2 = chapters.length > 1 ? chapters[chapters.length - 2].number : null;

                    return(
                        <Card title={data.name} key={data.id} views={data.views} number1={lastChapterNumber1} number2={lastChapterNumber2} index={index + 1} cover={data.cover} />
                    )
                })}
            </div>
        </div>
    )
}