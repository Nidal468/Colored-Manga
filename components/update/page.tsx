import UpdateIcon from '@mui/icons-material/Update';
import AndroidIcon from '@mui/icons-material/Android';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import CodeIcon from '@mui/icons-material/Code';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import themes from '@/styles/themes.module.css'
export default function Update() {
    return(
        <div className="w-[250px] h-[230px] p-[5px] rounded-[10px] flex-col justify-between items-start lg:inline-flex hidden" id={themes.box}>
  <div className="self-stretch py-[5px] border-b border-neutral-400 justify-between items-center inline-flex">
    <div className="w-full justify-start items-center gap-[10px] flex text-white text-[10px] font-medium">
        <UpdateIcon/>
      <div>Version 1.0.1</div>
    </div>
    <div className="w-[50px] h-[40px] bg-white rounded-[5px] justify-center items-center flex">
      <div className="text-zinc-600 text-[15px] font-medium">v1</div>
    </div>
  </div>
  <div className="self-stretch h-full py-[8px] flex-col justify-between items-start flex text-white font-light text-[10px]">
    <div className='self-stretch flex flex-col items-start justify-start gap-[10px]'>
    <div className="self-stretch p-[4px] rounded-sm justify-between items-center inline-flex" id={themes.inner}>
      <div className="justify-center items-center gap-[8px] flex">
        <AndroidIcon sx={{color: "#fff", fontSize: "15px"}}/>
        <div>Patched  Bugs</div>
      </div>
      <div>12</div>
    </div>
    <div className="self-stretch p-[4px] rounded-sm justify-start items-center inline-flex" id={themes.inner}>
      <div className="justify-center items-center gap-[8px] flex">
        <BuildCircleIcon sx={{color: "#fff", fontSize: "15px"}}/>
        <div>Optimized load speed</div>
      </div>
    </div>
    </div>
    <div className="Frame3680 self-stretch p-[4px] rounded justify-between items-center inline-flex" id={themes.inner}>
      <div className="Frame3680 justify-center items-center gap-[8px] flex">
        <CodeIcon sx={{color: "#fff", fontSize: "15px"}}/>
        <div>Added Features</div>
      </div>
      <ExpandMoreIcon sx={{color: "#fff", fontSize: "15px"}}/>
    </div>
  </div>
  <div className="Frame3674 self-stretch rounded-[200px] justify-between items-center inline-flex cursor-pointer pr-[3px]" id={themes.inner}>
    <a href='https://discord.com/invite/WuXp4MY9aU'><img src="/images/icons/discord.png" alt="discord" sizes="8000px, 8000px" loading='lazy' className='relative w-[30px] h-[30px] object-cover'/></a>
    <div className="Frame3675 h-[80%] px-[10px] rounded-[200px] justify-center items-center flex text-white text-[10px] font-light" id={themes.button}>
      <div>Update</div>
    </div>
  </div>
</div>
    )
}