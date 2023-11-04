import Slider from "@/components/slider/page";
import Update from "@/components/update/page";
import Card from "@/components/card/page";
import Popularity from '@/components/popularity/page'
import Sideway from "@/components/sideway/page";
import Nav from '@/components/nav/page'
import Updated from '@/public/data/updated.json'
import Footer from "@/components/footer/page";
import themes from "@/styles/themes.module.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import AutorenewIcon from '@mui/icons-material/Autorenew';
export default async function Home() {
  
  return (
    <div className="w-full font-light flex flex-col items-start justify-start px-[2vw] pt-[2vw] lg:pt-[5vw] gap-[2vw]" id={themes.body}>
      <Nav />
      <div className="slider w-full flex flex-col px-[1vw]">
        <div className="w-full h-[8vw] lg:h-[6vw] justify-start items-center inline-flex text-white lg:text-[2vw] text-[3vw] font-medium">Recommended</div>
        <div className="w-full lg:flex items-end justify-between object-cover gap-[4vw] lg:gap-[2vw]">
          <Slider />
          <Update />
        </div>
      </div>
      <div className="view w-full flex flex-col lg:flex-row items-start justify-between lg:gap-[2vw] gap-[8vw] px-[1vw]">
        <div className="topMangas w-full lg:w-[60vw] flex-col justify-start items-center gap-[2vw] lg:gap-[2vw] inline-flex lg:border-r-2 lg:border-gray-300">
          <div className="w-full p-[1vw] border-l-2 border-sky-500 justify-start items-center flex text-[2vw] lg:text-[1.2vw] font-medium" id={themes.outside}>
            <div className="flex items-center gap-[1vw]"><AllInboxIcon className="text-[4vw] lg:text-[2vw]"/>All Mangas</div>
          </div>
          <div className="w-full flex justify-start items-start gap-[2vw] flex-wrap">
            {Updated.map((data: any) => (  
                <Card title={data.title} author={data.author} number1={data.chapter[0].number} date1={data.chapter[0].date} number2={data.chapter[1].number} date2={data.chapter[1].date} number3={data.chapter[2].number} date3={data.chapter[2].date} key={data.id} />
            ))}
          </div>
          <div className="w-[15%] lg:py-[0.5vw] py-[1vw] rounded-[0.3vw] justify-center items-center flex text-white text-[2vw] lg:text-[1vw] font-light" id={themes.button}>View More</div>
        </div>
        <Popularity />
      </div>
      <div className="w-full flex flex-col gap-[1vw] px-[1vw]">
        <div className="w-full p-[1vw] justify-start items-center gap-2.5 inline-flex text-white text-[2vw] lg:text-[1.2vw] font-medium border-l-2 border-sky-500" id={themes.outside}>
          <h1 className="flex items-center gap-[1vw]"><AccessTimeIcon className="text-[4vw] lg:text-[2vw]"/>Recently updated</h1>
        </div>
        <Sideway />
      </div>
      <Footer />
    </div>
  )
}
