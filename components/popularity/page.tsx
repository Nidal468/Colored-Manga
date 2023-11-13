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
                                <DnsIcon sx={{fontSize: "15px"}}/><h3>Chapter {Data[0].chapters[0].number}</h3>
                            </div>
                            <div className='flex items-center gap-[0.8vw] lg:gap-[8px]'>
                                <DnsIcon sx={{fontSize: "15px"}}/><h3>Chapter {Data[0].chapters[1].number}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='w-[6vw] h-[6vw] lg:w-[25px] lg:h-[25px] bg-white flex items-center justify-center rounded-[5px] text-black'>1</div>
                </div>
            </div>
            <div className='w-full flex flex-wrap lg:gap-[10px] gap-[2vw]'>
                <Card title={Data[1].name} key={Data[1].id} views={Data[1].views} number1={Data[1].chapters[0].number} number2={Data[1].chapters[1].number} index={2} cover={Data[1].cover} />
                <Card title={Data[2].name} key={Data[2].id} views={Data[2].views} number1={Data[2].chapters[0].number} number2={Data[2].chapters[1].number} index={3} cover={Data[2].cover} />
                <Card title={Data[3].name} key={Data[3].id} views={Data[3].views} number1={Data[3].chapters[0].number} number2={Data[3].chapters[1].number} index={4} cover={Data[3].cover} />
                <Card title={Data[4].name} key={Data[4].id} views={Data[4].views} number1={Data[4].chapters[0].number} number2={Data[4].chapters[1].number} index={5} cover={Data[4].cover} />
                <Card title={Data[5].name} key={Data[5].id} views={Data[5].views} number1={Data[5].chapters[0].number} number2={Data[5].chapters[1].number} index={6} cover={Data[5].cover} />
                <Card title={Data[6].name} key={Data[6].id} views={Data[6].views} number1={Data[6].chapters[0].number} number2={Data[6].chapters[1].number} index={7} cover={Data[6].cover} />
                <Card title={Data[7].name} key={Data[7].id} views={Data[7].views} number1={Data[7].chapters[0].number} number2={Data[7].chapters[1].number} index={8} cover={Data[7].cover} />
            </div>
        </div>
    )
}