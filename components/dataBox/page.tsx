import themes from '@/styles/themes.module.css'
import Link from 'next/link'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function Box(props: any) {
    const Data = props.Data?.chapters;
    
    return (
        <div className="h-full fixed z-10" style={{width: props.width, display: props.display}}>
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-[500px] h-[300px] flex flex-col items-center justify-start text-white rounded-[4px] overflow-hidden p-[15px]" id={themes.box}>
                    <div className='w-full h-[30px] flex items-center justify-between mb-[20px]'>
                        <h1>{props.name}</h1>
                        <div className='flex items-center gap-[10px]'>
                            <div className='w-[250px] h-[20px] flex items-center justify-between p-[5px] rounded-full' id={themes.inner}><input type="text" placeholder='Search Chapter' className='w-full h-full bg-transparent text-[8px] flex items-center px-[2px]' /><KeyboardArrowRightIcon sx={{ fontSize: "15px" }} /></div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-start justify-start rounded-[5px] overflow-hidden'>
                        {Array.isArray(Data) && Data.map((data: any) => (
                            <Link href={`/manga/${props.id}/${data.id}`} className='w-full' key={data.id}>
                                <div className='w-full flex items-center justify-between px-[2vw] py-[2vw] lg:px-[12px] lg:py-[12px] text-[8px] lg:text-[8px]' id={themes.hover} key={data.id}>
                                    <h1 className='flex items-center gap-[0.5vw]'>Chapter {data.number} - {data.title}</h1>
                                    <div className='h-full flex items-center lg:gap-[15px] gap-[5px]'>
                                        <h1 className='text-[6px] lg:text-[7px]'>{data.date}</h1>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}