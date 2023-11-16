import Image from 'next/image'
import themes from '@/styles/themes.module.css'

export default function EditorCard(){
    return(
        <div className='w-full p-[1vw] lg:p-[14px] flex items-center justify-between lg:gap-[12px] gap-[1vw] border-b border-zinc-600' id={themes.hover}>
                            <div className='w-[10vw] h-[11vw] lg:w-[150px] lg:h-[160px] relative z-0'>
                                <Image fill={true} src="/images/assets/fpr.jpg" alt="" className='object-cover' />
                            </div>
                            <div className='w-full flex flex-col p-[0.5vw] lg:p-[6px] gap-[0.5vw] lg:gap-[6px] lg:text-[12px]'>
                                <h1>Return of the frozen player</h1>
                                <h2>Auther name</h2>
                                <p className='w-full h-[5vw] lg:h-[105px] text-[0.9vw] lg:text-[12px] text-ellipsis overflow-hidden ...' id={themes.dimtext}>The final boss! If we can just defeat her, our lives will go back to normal. The top five players in the world, including Specter Seo Jun-ho, finally defeated the Frost Queen… But they fell into a deep slumber. “A second floor? It didn’t end when the Frost Queen died?”</p>
                            </div>
                        </div>
    )
}