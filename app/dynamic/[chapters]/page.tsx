import Nav from '@/components/nav/page'
import Image from 'next/image'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import themes from '@/styles/themes.module.css'
import List from '@/components/chapters/page'
import Footer from '@/components/footer/page'
export default function Chapters() {
    return (
        <div className="w-full font-light pl-[7%] pt-[6vw] pr-[2vw] lg:pr-[1vw] flex flex-col items-start justify-start gap-[2vw]" id={themes.body}>
            <Nav />
            <div className='w-full flex gap-[2vw]'>
                <div className='w-[60vw] flex flex-col items-center justify-start gap-[2vw]'>
                    <div className="w-[60vw] h-[30vw] flex items-center px-[2vw]" id={themes.box}>
                        <div className='w-full h-[23vw] flex items-center justify-between gap-[1vw]'>
                            <div className='w-[15vw] h-[23vw] relative'>
                                <Image fill={true} src="/images/assets/fpr.jpg" alt="" className='object-cover' />
                            </div>
                            <div className='w-[72%] h-full flex flex-col items-start justify-between'>
                                <div className='w-full flex flex-col items-start justify-between gap-[0.8vw]'>
                                    <h1 className='font-medium text-[2vw]'>The Return Of the Frozen Player</h1>
                                    <h2 className='text-slate-300'>Author Name</h2>
                                    <div className='w-full flex items-center justify-start flex-wrap gap-[1vw]'>
                                        <div className='text-[1vw] rounded-[0.2vw]' id={themes.dimtext}>Fantasy</div>
                                        <div className='text-[1vw] rounded-[0.2vw]' id={themes.dimtext}>Adventure</div>
                                        <div className='text-[1vw] rounded-[0.2vw]' id={themes.dimtext}>Romance</div>
                                        <div className='text-[1vw] rounded-[0.2vw]' id={themes.dimtext}>Action</div>
                                    </div>
                                    <p className='w-full h-[10vw] text-ellipsis overflow-hidden ...' id={themes.dimtext}>The final boss! If we can just defeat her, our lives will go back to normal. The top five players in the world, including Specter Seo Jun-ho, finally defeated the Frost Queen… But they fell into a deep slumber. “A second floor? It didn’t end when the Frost Queen died?”</p>
                                </div>
                                <div className='flex items-center justify-between gap-[1vw]'>
                                    <div className='px-[1.2vw] py-[0.6vw] rounded-[0.3vw] text-[1vw] flex items-center justify-between gap-[1vw]' id={themes.button}>Start Reading <RemoveRedEyeIcon /></div>
                                    <div className='px-[1.2vw] py-[0.6vw] rounded-[0.3vw] text-[1vw] flex items-center justify-between gap-[1vw]' id={themes.button}>Bookmark<BookmarkAddIcon /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <List />
                </div>
                <div className='w-[30vw] flex flex-col gap-[2vw]'>
                    <div className='w-full flex flex-col items-start justify-start gap-[1vw] p-[2vw] text-[1vw]' id={themes.box}>
                        <h1 className='font-medium'>About</h1>
                        <h1 className='font-medium'>Summary</h1>
                        <p className='text-slate-300' id={themes.dimtext}>5 years after the world changed, the final boss appeared. The final boss for area Earth, the Frost Queen, has appeared. The final boss! If we can just defeat her, our lives will go back to normal. The top five players in the world, including Specter Seo Jun-ho, finally defeated the Frost Queen… But they fell into a deep slumber And then 25 years passed… “A second floor? It didnt end when the Frost Queen died?” Specter awakes from his slumber.</p>
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
                    <div className='w-full min-h-[20vw] flex flex-col' id={themes.box}>
                        <h1 className='p-[2vw]'>Editors choice</h1>
                        <div className='w-full p-[1vw] flex' id={themes.hover}>
                            <div className='w-[10vw] h-[11vw] relative'><Image fill={true} src="/images/assets/fpr.jpg" alt="" className='object-cover' /></div>
                            <div className='w-full flex flex-col p-[0.5vw] gap-[0.5vw]'>
                                <h1>Return of the frozen player</h1>
                                <h2>Auther name</h2>
                                <p className='w-full h-[5vw] text-[0.9vw] text-ellipsis overflow-hidden ...' id={themes.dimtext}>The final boss! If we can just defeat her, our lives will go back to normal. The top five players in the world, including Specter Seo Jun-ho, finally defeated the Frost Queen… But they fell into a deep slumber. “A second floor? It didn’t end when the Frost Queen died?”</p>
                            </div>
                        </div>
                        <div className='w-full p-[1vw] flex' id={themes.hover}>
                            <div className='w-[10vw] h-[11vw] relative'><Image fill={true} src="/images/assets/fpr.jpg" alt="" className='object-cover' /></div>
                            <div className='w-full flex flex-col p-[0.5vw] gap-[0.5vw]'>
                                <h1>Return of the frozen player</h1>
                                <h2>Auther name</h2>
                                <p className='w-full h-[5vw] text-[0.9vw] text-ellipsis overflow-hidden ...' id={themes.dimtext}>The final boss! If we can just defeat her, our lives will go back to normal. The top five players in the world, including Specter Seo Jun-ho, finally defeated the Frost Queen… But they fell into a deep slumber. “A second floor? It didn’t end when the Frost Queen died?”</p>
                            </div>
                        </div>
                        <div className='w-full p-[1vw] flex' id={themes.hover}>
                            <div className='w-[10vw] h-[11vw] relative'><Image fill={true} src="/images/assets/fpr.jpg" alt="" className='object-cover' /></div>
                            <div className='w-full flex flex-col p-[0.5vw] gap-[0.5vw]'>
                                <h1>Return of the frozen player</h1>
                                <h2>Auther name</h2>
                                <p className='w-full h-[5vw] text-[0.9vw] text-ellipsis overflow-hidden ...' id={themes.dimtext}>The final boss! If we can just defeat her, our lives will go back to normal. The top five players in the world, including Specter Seo Jun-ho, finally defeated the Frost Queen… But they fell into a deep slumber. “A second floor? It didn’t end when the Frost Queen died?”</p>
                            </div>
                        </div>
                        <div className='w-full p-[1vw] flex' id={themes.hover}>
                            <div className='w-[10vw] h-[11vw] relative'><Image fill={true} src="/images/assets/fpr.jpg" alt="" className='object-cover' /></div>
                            <div className='w-full flex flex-col p-[0.5vw] gap-[0.5vw]'>
                                <h1>Return of the frozen player</h1>
                                <h2>Auther name</h2>
                                <p className='w-full h-[5vw] text-[0.9vw] text-ellipsis overflow-hidden ...' id={themes.dimtext}>The final boss! If we can just defeat her, our lives will go back to normal. The top five players in the world, including Specter Seo Jun-ho, finally defeated the Frost Queen… But they fell into a deep slumber. “A second floor? It didn’t end when the Frost Queen died?”</p>
                            </div>
                        </div>
                        <div className='w-full p-[1vw] flex' id={themes.hover}>
                            <div className='w-[10vw] h-[11vw] relative'><Image fill={true} src="/images/assets/fpr.jpg" alt="" className='object-cover' /></div>
                            <div className='w-full flex flex-col p-[0.5vw] gap-[0.5vw]'>
                                <h1>Return of the frozen player</h1>
                                <h2>Auther name</h2>
                                <p className='w-full h-[5vw] text-[0.9vw] text-ellipsis overflow-hidden ...' id={themes.dimtext}>The final boss! If we can just defeat her, our lives will go back to normal. The top five players in the world, including Specter Seo Jun-ho, finally defeated the Frost Queen… But they fell into a deep slumber. “A second floor? It didn’t end when the Frost Queen died?”</p>
                            </div>
                        </div>
                        <div className='w-full p-[1vw] flex' id={themes.hover}>
                            <div className='w-[10vw] h-[11vw] relative'><Image fill={true} src="/images/assets/fpr.jpg" alt="" className='object-cover' /></div>
                            <div className='w-full flex flex-col p-[0.5vw] gap-[0.5vw]'>
                                <h1>Return of the frozen player</h1>
                                <h2>Auther name</h2>
                                <p className='w-full h-[5vw] text-[0.9vw] text-ellipsis overflow-hidden ...' id={themes.dimtext}>The final boss! If we can just defeat her, our lives will go back to normal. The top five players in the world, including Specter Seo Jun-ho, finally defeated the Frost Queen… But they fell into a deep slumber. “A second floor? It didn’t end when the Frost Queen died?”</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}