import Nav from '@/components/nav/page'
import Image from 'next/image'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import themes from '@/styles/themes.module.css'
import List from '@/components/chapters/page'
import Footer from '@/components/footer/page'
import EditorCard from '@/components/editorCard/page';
import Data from '@/public/data/manga.json'
export default function Chapters(params: any) {
    const {chapters} = params.params;
    const selectedManga = Data.find((manga: any) => manga.id === chapters);
    return (
        <div className="xl:w-[1280px] w-full font-light flex flex-col items-start justify-start lg:px-[30px] pt-[12vw] px-[2vw] lg:pt-[5vw] gap-[4vw] lg:gap-[20px]" id={themes.body}>
            <Nav />
            <div className='w-full flex items-start justify-between lg:flex-row flex-col gap-[3vw]'>
                <div className='xl:w-[60%] w-full flex flex-col items-center justify-start gap-[2vw] xl:gap-[30px] gap-[25px]'>
                    <div className="w-full h-[40vw] xl:h-[400px] lg:h-[250px] flex items-center px-[2vw] lg:px-[20px]" id={themes.box}>
                        <div className='w-full h-[35vw] xl:h-[300px] lg:h-[200px] flex items-center justify-between gap-[4vw] lg:gap-[15px]'>
                            <div className='w-[25vw] h-[35vw] relative xl:w-[200px] xl:h-[300px] lg:w-[140px] lg:h-[200px]'>
                                <Image fill={true} src={`${selectedManga?.cover}`} alt={`${selectedManga?.cover}`} className='object-cover' />
                            </div>
                            <div className='w-[75%] xl:w-[72%] lg:w-[80%] h-full flex flex-col items-start justify-between gap-[10px]'>
                                <div className='w-full flex flex-col items-start justify-between gap-[1vw] lg:gap-[8px]'>
                                    <h1 className='font-medium text-[3vw] lg:text-[18px]'>{selectedManga?.name}</h1>
                                    <h2 className='text-slate-300 text-[1.4vw] lg:text-[14px]'>{selectedManga?.author}</h2>
                                    <div className='w-full flex items-center justify-start flex-wrap gap-[1vw] gap-[12px] text-[1.5vw] lg:text-[12px]'>
                                        <div id={themes.dimtext}>{selectedManga?.genre1}</div>
                                        <div id={themes.dimtext}>{selectedManga?.genre2}</div>
                                        <div id={themes.dimtext}>{selectedManga?.genre3}</div>
                                    </div>
                                    <p className='w-full lg:w-[500px] lg:h-[150px] text-ellipsis overflow-hidden lg:text-[14px] text-[2vw]' id={themes.dimtext}>{selectedManga?.info}</p>
                                </div>
                                <div className='flex items-center justify-between gap-[1vw] lg:gap-[12px]'>
                                    <div className='px-[1.2vw] py-[0.6vw] lg:px-[14px] lg:py-[8px] rounded-[0.5vw] lg:rounded-[4px] text-[1.5vw] lg:text-[12px] flex items-center justify-between gap-[1vw] lg:gap-[12px]' id={themes.button}>Start Reading <RemoveRedEyeIcon sx={{ fontSize: { xs: 12, lg: 15 } }} /></div>
                                    <div className='px-[1.2vw] py-[0.6vw] lg:px-[14px] lg:py-[8px] rounded-[0.8vw] lg:rounded-[4px] text-[1.5vw] lg:text-[12px] flex items-center justify-between gap-[1vw] lg:gap-[12px]' id={themes.button}>Bookmark<BookmarkAddIcon sx={{ fontSize: { xs: 12, lg: 15 } }} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <List id={chapters}/>
                </div>
                <div className='xl:w-[30%] w-full flex flex-col gap-[2vw] xl:gap-[24px]'>
                    <div className='w-full flex flex-col items-start justify-start gap-[2vw] lg:gap-[10px] p-[2vw] lg:p-[24px] text-[2vw] lg:text-[12px]' id={themes.box}>
                        <h1 className='font-medium'>About</h1>
                        <h1 className='font-medium'>Summary</h1>
                        <p className='text-slate-300 w-full lg:w-[310px] lg:h-[200px] text-ellipsis overflow-hidden' id={themes.dimtext}>{selectedManga?.info}</p>
                        <div className='w-full flex flex-col items-start justify-start gap-[1.5vw]'>
                            <h1 className='font-medium'>Other</h1>
                            <div className='w-full flex items-center justify-between'>
                                <h1 id={themes.dimtext}>Source Language</h1>
                                <h1>Korean</h1>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <h1 id={themes.dimtext}>Release Status</h1>
                                <h1>Coming soon</h1>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <h1 id={themes.dimtext}>Total Chapters</h1>
                                <h1>{selectedManga?.chapters.length}</h1>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <h1 id={themes.dimtext}>Last Updated</h1>
                                <h1>1 week ago</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex items-start justify-between flex-col' id={themes.box}>
                        <h1 className='p-[2vw] lg:px-[20px] lg:py-[15px] flex items-center lg:gap-[12px] gap-[1vw] text-[2vw] lg:text-base'><AutoAwesomeIcon sx={{ fontSize: { xs: 12, lg: 15 } }} />Editors choice</h1>
                        <EditorCard/>
                        <EditorCard/>
                        <EditorCard/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}