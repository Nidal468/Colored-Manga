import theme from '@/styles/theme.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Nav(props: any){
    const { toggleVisibility } = props;
    return(
        <div className='w-[94%] h-[5vw] px-5 py-2.5 justify-between items-center hidden lg:inline-flex fixed top-0 right-0 z-50 text-white'id={theme.nav}>
            <h1>Colored Manga</h1>
            <div className='flex items-center gap-[2vw]'>
            <div className='px-[1vw] py-[0.5vw] gap-[1vw] flex items-center rounded-[0.2vw]' id={theme.ScrollDown}>
                    <h1>Volume 1</h1>
                    <KeyboardArrowDownIcon />
                </div>
                <div className='px-[1vw] py-[0.5vw] gap-[1vw] flex items-center rounded-[0.2vw]' id={theme.ScrollDown}>
                    <h1>Chapter 1</h1>
                    <KeyboardArrowDownIcon />
                </div>
                <div className='flex items-center gap-[1vw]'>
                    <div className='p-2 rounded-[0.4vw] rotate-90' id={theme.ScrollDown}>
                    <KeyboardArrowDownIcon />
                    </div>
                    <div className='p-2 rounded-[0.4vw] -rotate-90' id={theme.ScrollDown}>
                    <KeyboardArrowDownIcon />
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-[1vw]'>
                    <div className='p-2 rounded-[0.4vw]' id={theme.ScrollDown}>
                    <ChatBubbleIcon/>
                    </div>
                    <div className='p-2 rounded-[0.4vw]' id={theme.ScrollDown}>
                    <SettingsIcon onClick={toggleVisibility}/>
                    </div>
                </div>
        </div>
    )
}