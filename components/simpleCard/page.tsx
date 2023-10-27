export default function Scard(props: any) {
    return (
            <div className="w-[16vw] flex flex-col items-center justify-start bg-neutral-900 backdrop-blur-[20px]">
                <img className="w-[16vw]" src={props.image} alt={props.image} />
                <h1 className="text-[0.8vw] flex flex-wrap items-center justify-center py-[0.8vw] font-medium text-white">{props.title}</h1>
            </div>
    )
}