import Slider from "@/components/slider/page";
import Update from "@/components/update/page";
import Card from "@/components/card/page";
import Popularity from '@/components/popularity/page'
import styles from '@/styles/home.module.css'
import sideway from '@/components/sideway/page'
import Sideway from "@/components/sideway/page";
import Link from 'next/link'
import Nav from '@/components/nav/page'
import Updated from '@/public/data/updated.json'
import Footer from "@/components/footer/page";
import { getServerSession } from "next-auth/next";
import {AuthOptions} from "@/app/api/auth/[...nextauth]/route"
import {redirect} from "next/navigation"
export default async function Home() {
  const session = getServerSession(AuthOptions);
  if(!session) {
    redirect('/signin?callbackUrl=/')
  }
  return (
    <div className="w-full font-light p-[2vw] px-[3vw] lg:px-[1vw] lg:p-[1vw] flex flex-col items-start justify-start gap-[10vw]">
      <Nav/>
      <div className="slider w-full flex flex-col gap-[3vw]">
        <div className="w-full h-[8vw] lg:h-[8vw] justify-start items-center gap-2.5 inline-flex">
          <div className="text-white lg:text-[2vw] text-[3vw] font-medium">Latest Updates{}</div>
        </div>
        <div className="w-full lg:flex items-end justify-between object-cover gap-[4vw] lg:gap-[2vw]">
          <Slider />
          <Update />
        </div>
      </div>
      <div className="sideway w-full flex flex-col gap-[4vw] lg:gap-[1vw]">
      <div className="w-full p-2 bg-neutral-800 justify-start items-center gap-2.5 inline-flex text-white text-[3vw] lg:text-[1.2vw] font-medium">
        <h1>Recommended</h1>
      </div>
      <Sideway/>
      </div>
      <div className="view w-full flex flex-col lg:flex-row items-start justify-between lg:gap-[2vw] gap-[8vw]">
        <div className="topMangas w-full lg:w-[60vw] flex-col justify-start items-center gap-[2vw] lg:gap-5 inline-flex lg:border-r-2 px-[1vw] lg:border-gray-300">
          <div className="Frame30 self-stretch p-2 bg-neutral-800 border-l-2 border-sky-500 justify-start items-center gap-2.5 inline-flex text-white text-[1.8vw] lg:text-[1.2vw] font-medium">
                <div>Popular Titles</div>
                <div>Book Marked</div>
          </div>
          <div className="w-full flex justify-start items-start gap-[2vw] flex-wrap">
            {Updated.map((data: any) => (
              <Card title={data.title} author={data.author} number1={data.chapter[0].number} date1={data.chapter[0].date} number2={data.chapter[1].number} date2={data.chapter[1].date} number3={data.chapter[2].number} date3={data.chapter[2].date} key={data.id}/>
            ))}
          </div>
          <div className="w-[20%] lg:py-[0.1vw] py-[1vw] bg-sky-600 rounded-[0.8vw] justify-center items-center inline-flex text-white text-[2vw] lg:text-[1vw] font-light cursor-pointer" id={styles.button}>Load More</div>
        </div>
        <Popularity/>
      </div>
      <Footer/>
    </div>
  )
}
