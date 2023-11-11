import Slider from "@/components/slider/page";
import Update from "@/components/update/page";
import Card from "@/components/card/page";
import Popularity from '@/components/popularity/page'
import Sideway from "@/components/sideway/page";
import Nav from '@/components/nav/page'
import Footer from "@/components/footer/page";
import themes from "@/styles/themes.module.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import Data from '@/public/data/manga.json'
export default async function Home() {

  return (
    <div className="xl:w-[1280px] w-full font-light flex flex-col items-start justify-start lg:px-[30px] pt-[12vw] px-[2vw] lg:pt-[5vw] gap-[4vw] lg:gap-[20px]" id={themes.body}>
      <Nav />
      <div className="slider w-full flex flex-col">
        <div className="w-full h-[8vw] lg:h-[80px] justify-start items-center inline-flex text-white font-light lg:text-[20px] text-[2vw]">Recommended</div>
        <div className="w-full lg:flex items-end justify-between object-cover gap-[4vw] lg:gap-[20px]">
          <Slider />
          <Update />
        </div>
      </div>
      <div className="view w-full flex flex-col lg:flex-row items-start justify-between lg:gap-[20px] gap-[8vw]">
      <div className="w-full lg:hidden flex flex-col items-center justify-center gap-[1vw]">
        <div className='w-full p-[2vw] rounded-[1px] justify-between items-center flex font-light lg:text-[15px] text-[2vw]' id={themes.outside}>
                <div className='flex gap-[1vw] items-center'><LeaderboardIcon className="text-[3vw] lg:text-[20px]"/>Most Viewed</div>
                <div className='flex items-center justify-between gap-[2vw] lg:gap-[5px]'>
                    <div id={themes.dimtext}>Day</div>
                    <div id={themes.dimtext}>Week</div>
                    <div id={themes.dimtext}>Month</div>
                </div>
            </div>
          <Sideway />
        </div>
        <div className="topMangas w-full lg:w-[850px] flex-col justify-start items-center gap-[2vw] lg:gap-[20px] inline-flex">
          <div className="w-full p-[2vw] lg:p-[10px] justify-start items-center flex font-light lg:text-[15px] text-[2vw]" id={themes.outside}>
            <div className="flex items-center gap-[1vw]"><AllInboxIcon className="text-[3vw] lg:text-[20px]" />Latest Updates</div>
          </div>
          <div className="w-full flex justify-between items-start lg:gap-[20px] gap-[2vw] flex-wrap">
            {Data.map((data: any) => (
              <Card title={data.name} author={data.author} key={data.id} image={data.cover} number1={data.chapters[0].number} number2={data.chapters[1].number} number3={data.chapters[2].number} data1={data.chapters[0].date} data2={data.chapters[1].date} data3={data.chapters[2].date}/>
            ))}
          </div>
          <div className="lg:w-[15%] w-[30%] lg:py-[5px] py-[1vw] rounded-[0.5vw] lg:rounded-[3px] justify-center items-center flex text-white text-[2vw] lg:text-[12px] font-light" id={themes.button}>View More</div>
        </div>
        <Popularity />
      </div>
      <div className="w-full flex flex-col gap-[1vw] lg:gap-[10px]">
        <div className="w-full p-[2vw] lg:p-[10px] justify-start items-center gap-[10px] flex text-white font-light lg:text-[15px] text-[2vw]" id={themes.outside}>
          <h1 className="flex items-center gap-[10px]"><AccessTimeIcon className="text-[3vw] lg:text-[20px]" />New Releases</h1>
        </div>
        <Sideway />
      </div>
      <Footer />
    </div>
  )
}
