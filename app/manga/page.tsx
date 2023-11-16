import Nav from '@/components/nav/page'
import Footer from "@/components/footer/page";
import themes from "@/styles/themes.module.css"
import Data from '@/public/data/manga.json'
import Card from "@/components/card/page";
import Form from "@/components/mangaform/page"

export default function Manga() {
    return (
        <div className="xl:w-[1280px] w-full font-light flex flex-col items-start justify-start lg:px-[30px] pt-[12vw] px-[2vw] lg:pt-[80px] gap-[4vw] lg:gap-[20px]" id={themes.body}>
            <Nav />
            <Form/>
            <div className="w-full min-h-screen	 flex justify-between items-start lg:gap-[20px] gap-[2vw] flex-wrap">
                {Data.map((data: any) => {
                    const chapters = Array.isArray(data.chapters) ? data.chapters : [];

                    // Extract the last chapter number from the chapters array
                    const lastChapterNumber1 = chapters.length > 0 ? chapters[chapters.length - 1].number : null;
                    const lastChapterNumber2 = chapters.length > 1 ? chapters[chapters.length - 2].number : null;
                    const lastChapterNumber3 = chapters.length > 2 ? chapters[chapters.length - 3].number : null;
                    const lastDateNumber1 = chapters.length > 0 ? chapters[chapters.length - 1].date : null;
                    const lastDateNumber2 = chapters.length > 1 ? chapters[chapters.length - 2].date : null;
                    const lastDateNumber3 = chapters.length > 2 ? chapters[chapters.length - 3].date : null;
                    return (
                        <Card title={data.name} author={data.author} key={data.id} image={data.cover} number1={lastChapterNumber1} number2={lastChapterNumber2} number3={lastChapterNumber3} data1={lastDateNumber1} data2={lastDateNumber2} data3={lastDateNumber3} />
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}