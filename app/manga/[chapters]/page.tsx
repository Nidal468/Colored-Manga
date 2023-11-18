import Nav from '@/components/nav/page'
import Image from 'next/image'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import themes from '@/styles/themes.module.css'
import List from '@/components/chapters/page'
import Footer from '@/components/footer/page'
import EditorCard from '@/components/editorCard/page';

export default function Chapters(params: any) {
    const {chapters} = params.params;
    console.log(chapters,params)
    return (
        <div className="xl:w-[1280px] w-full font-light flex flex-col items-start justify-start lg:px-[30px] pt-[12vw] px-[2vw] lg:pt-[5vw] gap-[4vw] lg:gap-[20px]" id={themes.body}>
            <Nav />
            <div className='w-full flex items-start justify-between'>
                <div className='w-[60%] flex flex-col items-center justify-start gap-[2vw] lg:gap-[30px]'>
                    <div className="w-full h-[30vw] lg:h-[400px] flex items-center px-[2vw] lg:px-[20px]" id={themes.box}>
                        <div className='w-full h-[23vw] lg:h-[300px] flex items-center justify-between gap-[1vw] lg:gap-[15px]'>
                            <div className='w-[15vw] h-[23vw] relative lg:w-[200px] lg:h-[300px]'>
                                <Image fill={true} src="/images/assets/fpr.jpg" alt="" className='object-cover' />
                            </div>
                            <div className='w-[72%] h-full flex flex-col items-start justify-between'>
                                <div className='w-full flex flex-col items-start justify-between gap-[0.8vw] lg:gap-[8px]'>
                                    <h1 className='font-medium text-[2vw] lg:text-[18px]'>The Return Of the Frozen Player</h1>
                                    <h2 className='text-slate-300 lg:text-[14px]'>Author Name</h2>
                                    <div className='w-full flex items-center justify-start flex-wrap gap-[1vw] gap-[12px] text-[1vw] lg:text-[12px]'>
                                        <div id={themes.dimtext}>Fantasy</div>
                                        <div id={themes.dimtext}>Adventure</div>
                                        <div id={themes.dimtext}>Romance</div>
                                        <div id={themes.dimtext}>Action</div>
                                    </div>
                                    <p className='w-[500px] h-[150px] text-ellipsis overflow-hidden lg:text-[14px] text-[1vw]' id={themes.dimtext}>The final boss! If we can just defeat her, our lives will go back to normal. The top five players in the world, including Specter Seo Jun-ho, finally defeated the Frost Queen… But they fell into a deep slumber. “A second floor? It didn’t end when the Frost Queen died?”</p>
                                </div>
                                <div className='flex items-center justify-between gap-[1vw] lg:gap-[12px]'>
                                    <div className='px-[1.2vw] py-[0.6vw] lg:px-[14px] lg:py-[8px] rounded-[0.3vw] lg:rounded-[4px] text-[1vw] lg:text-[12px] flex items-center justify-between gap-[1vw] lg:gap-[12px]' id={themes.button}>Start Reading <RemoveRedEyeIcon sx={{ fontSize: "15px" }} /></div>
                                    <div className='px-[1.2vw] py-[0.6vw] lg:px-[14px] lg:py-[8px] rounded-[0.3vw] lg:rounded-[4px] text-[1vw] lg:text-[12px] flex items-center justify-between gap-[1vw] lg:gap-[12px]' id={themes.button}>Bookmark<BookmarkAddIcon sx={{ fontSize: "15px" }} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <List id={chapters}/>
                </div>
                <div className='w-[30%] flex flex-col gap-[2vw] lg:gap-[24px]'>
                    <div className='w-full flex flex-col items-start justify-start gap-[1vw] lg:gap-[10px] p-[2vw] lg:p-[24px] text-[1vw] lg:text-[12px]' id={themes.box}>
                        <h1 className='font-medium'>About</h1>
                        <h1 className='font-medium'>Summary</h1>
                        <p className='text-slate-300 w-[310px] h-[200px] text-ellipsis overflow-hidden' id={themes.dimtext}>5 years after the world changed, the final boss appeared. The final boss for area Earth, the Frost Queen, has appeared. The final boss! If we can just defeat her, our lives will go back to normal. The top five players in the world, including Specter Seo Jun-ho, finally defeated the Frost Queen… But they fell into a deep slumber And then 25 years passed… “A second floor? It didnt end when the Frost Queen died?” Specter awakes from his slumber.</p>
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
                                <h1>99</h1>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <h1 id={themes.dimtext}>Last Updated</h1>
                                <h1>1 week ago</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex items-start justify-between flex-col' id={themes.box}>
                        <h1 className='p-[2vw] lg:px-[20px] lg:py-[15px] flex items-center lg:gap-[12px] gap-[1vw]'><AutoAwesomeIcon sx={{ fontSize: "15px" }} />Editors choice</h1>
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