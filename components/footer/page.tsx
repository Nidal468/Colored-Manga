import styles from '@/styles/home.module.css'
import theme from '@/styles/theme.module.css'
export default function Footer(){
    return(
        <div className="w-full">
            <div className="w-full flex flex-col items-start justify-start text-white p-[3vw] lg:p-[1.5vw] font-light gap-[2vw]" id={theme.footer}>
                <div className="flex gap-[2vw] lg:gap-[1vw] items-center cursor-pointer">
                    <h1>ColoredManga</h1>
                    <div className="py-[0.3vw] px-[1vw] bg-sky-500 rounded-[200vw] text-[2vw] lg:text-[0.8vw]" id={styles.button}>Join us</div>
                </div>
                <div className="flex items-center gap-[2vw] lg:gap-[1vw] cursor-pointer text-[2vw] lg:text-[1vw]">
                    <h1>Help</h1>
                    <h1>FAQ</h1>
                    <h1>Contact</h1>
                    <h1>Request</h1>
                </div>
                <h1 className='text-[2vw] lg:text-[1vw]'>Copyright © coloredmanga.to. All Rights Reserved<br/>This site does not store any files on its server. All contents are provided by non-affiliated third parties.</h1>
            </div>
        </div>
    )
}