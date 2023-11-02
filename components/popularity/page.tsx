import Card from '../smallCard/page'
import AutoModeIcon from '@mui/icons-material/AutoMode';
import DnsIcon from '@mui/icons-material/Dns';
import datas from '@/public/data/popularity.json'
import Image from 'next/image'
import themes from "@/styles/themes.module.css"
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
export default function Popularity() {
    return (
        <div className='w-full lg:w-[28vw] flex flex-col items-center justify-center gap-[2vw]'>
            <div className='w-full p-[1vw] rounded-[0.1vw] justify-between items-center flex font-light text-[2vw] lg:text-[1vw]' id={themes.outside}>
                <div className='flex gap-[1vw] items-center'><LeaderboardIcon/>Most Viewed</div>
                <div className='flex items-center justify-between gap-[2vw] lg:gap-[0.5vw]'>
                    <div id={themes.dimtext}>Day</div>
                    <div id={themes.dimtext}>Week</div>
                    <div id={themes.dimtext}>Month</div>
                </div>
            </div>
            <div className='w-full h-[40vw] lg:h-[20vw] flex flex-col items-center justify-end rounded-[0.3vw] overflow-hidden'>
                <div className='w-[94vw] lg:w-[28vw] h-[40vw] lg:h-[20vw] absolute rounded-[0.3vw] overflow-hidden'>
                    <Image fill={true} alt="" src='/images/assets/fpr.jpg' className='object-cover'/>
                </div>
                <div className='w-full h-[50%] lg:h-[42%] bg-white bg-opacity-5 backdrop-blur-[50px] flex items-center justify-between px-2'>
                    <div className='w-[90%] bg-zinc-800 bg-opacity-50 rounded-[0.6vw] p-1.5 lg:p-2 text-[2vw] lg:text-[0.8vw] flex flex-col items-start justify-start gap-[2vw] lg:gap-[0.5vw]'>
                        <h1 className='text-[1vw]'>Return of the frozen player</h1>
                        <div className='flex items-center gap-[0.8vw]'>
                            <AutoModeIcon sx={{ color: '#fff'}}/>
                            <h3>12345</h3>
                        </div>
                        <div className='flex items-center justify-start gap-[2vw]'>
                            <div className='flex items-center gap-[0.8vw]'>
                                <DnsIcon sx={{ color: '#fff'}}/><h3>Chapter 173</h3>
                            </div>
                            <div className='flex items-center gap-[0.8vw]'>
                                <DnsIcon sx={{ color: '#fff'}}/><h3>Chapter 173</h3>
                            </div>
                        </div>

                    </div>
                    <div className='w-[6vw] h-[6vw] lg:w-[2vw] lg:h-[2vw] bg-white flex items-center justify-center rounded-[0.5vw] text-black'>1</div>
                </div>
            </div>
            <div className='w-full flex flex-wrap lg:gap-[1vw] gap-[2vw]'>
                {datas.map((data: any,index: any) => (
                    <Card title={data.title} key={data.id} views={data.views} number1={data.number1} number2={data.number2} index={index}/>
                ))}
            </div>
        </div>
    )
}