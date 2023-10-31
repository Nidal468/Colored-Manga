export function Slots(props: any) {
    const {action} = props
    return (
        <div className='w-full flex items-center justify-between'>
            <h1 style={{fontSize: props.font}}>{props.title}</h1>
            <div className='w-[4vw] p-[0.2vw] bg-white rounded-[200px] flex items-center' style={{justifyContent: props.align}}>
                <div className='w-[1.5vw] h-[1.5vw] rounded-[200px]' onClick={action} style={{background: props.color}}></div>
            </div>
        </div>
    )
}