import Image from 'next/image'

export default function Scard(props: any) {
    return (
            <div className="w-[16vw] h-[26vw] flex flex-col items-center justify-between bg-neutral-900 backdrop-blur-[20px]">
                <div className='w-[16vw] h-[26vw] relative'><Image fill={true} className="object-cover" src={props.image} alt={props.image} /></div>
                <h1 className="text-[0.8vw] flex flex-wrap items-center justify-center py-[0.8vw] font-medium text-white">{props.title}</h1>
            </div>
    )
}