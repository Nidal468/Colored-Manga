import UpdateIcon from '@mui/icons-material/Update';
import AndroidIcon from '@mui/icons-material/Android';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import CodeIcon from '@mui/icons-material/Code';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '@/styles/home.module.css'
import theme from '@/styles/theme.module.css'
import Image from 'next/image'
export default function Update() {
    return(
        <div className="w-[18vw] h-[18vw] p-[0.5vw] rounded-[1vw] flex-col justify-between items-start lg:inline-flex hidden" id={theme.update}>
  <div className="self-stretch py-[0.5vw] border-b border-neutral-400 justify-between items-center inline-flex">
    <div className="w-full justify-start items-center gap-2.5 flex text-white text-[1vw] font-medium">
        <UpdateIcon sx={{color: "#fff", fontSize: "1.5vw"}}/>
      <div>Version 1.0.1</div>
    </div>
    <div className="w-[3.5vw] h-[3vw] bg-white rounded-[5px] justify-center items-center flex">
      <div className="text-zinc-600 text-[1vw] font-medium">v1</div>
    </div>
  </div>
  <div className="self-stretch h-full py-[0.5vw] flex-col justify-between items-start flex text-white text-sm font-light text-[0.6vw]">
    <div className='self-stretch flex flex-col items-start justify-start gap-[1vw]'>
    <div className="self-stretch p-[0.3vw] rounded-sm justify-between items-center inline-flex" id={theme.updateSub}>
      <div className="justify-center items-center gap-[0.8vw] flex">
        <AndroidIcon sx={{color: "#fff", fontSize: "1vw"}}/>
        <div>Patched  Bugs</div>
      </div>
      <div>12</div>
    </div>
    <div className="self-stretch p-[0.3vw] rounded-sm justify-start items-center gap-2.5 inline-flex" id={theme.updateSub}>
      <div className="justify-center items-center gap-[0.8vw] flex">
        <BuildCircleIcon sx={{color: "#fff", fontSize: "1vw"}}/>
        <div>Optimized load speed</div>
      </div>
    </div>
    </div>
    <div className="Frame3680 self-stretch p-[0.3vw] rounded justify-between items-center inline-flex" id={theme.updateSub}>
      <div className="Frame3680 justify-center items-center gap-[0.8vw] flex">
        <CodeIcon sx={{color: "#fff", fontSize: "1vw"}}/>
        <div>Added Features</div>
      </div>
      <ExpandMoreIcon sx={{color: "#fff", fontSize: "1vw"}}/>
    </div>
  </div>
  <div className="Frame3674 self-stretch bg-white bg-opacity-10 rounded-[200px] justify-between items-center inline-flex cursor-pointer pr-[0.3vw]">
    <a href='https://discord.com/invite/WuXp4MY9aU'><div className='relative w-[2vw] h-[2vw]'><Image fill={true} src="/images/icons/discord.png" alt=""/></div></a>
    <div className="Frame3675 h-[80%] px-5 bg-green-500 rounded-[200px] justify-center items-center flex text-white text-[0.8vw] font-light" id={styles.button}>
      <div>Update</div>
    </div>
  </div>
</div>
    )
}