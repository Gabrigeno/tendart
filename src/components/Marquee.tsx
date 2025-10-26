
interface MarqueeProps {
    span1: string;
    span2: string;
    span3: string;
}

export const Marquee = (props: MarqueeProps) => {
    return(
        <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee py-12 whitespace-nowrap text-sora font-bold ">
                <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                    <span className="text-white text-2xl bg-black">✦  {props.span1} </span>
                    <span className="text-white text-2xl bg-black">✦  {props.span2} </span>
                    <span className="text-white text-2xl bg-black">✦  {props.span3} </span>
                    <span className="text-white text-2xl bg-black">✦  {props.span1} </span>
                    <span className="text-white text-2xl bg-black">✦  {props.span2} </span>
                    <span className="text-white text-2xl bg-black">✦  {props.span3} </span>
                <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
            </div>
            <div className="animate-marquee py-12 whitespace-nowrap text-sora font-bold">
                <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                    <span className="text-white text-2xl bg-black">✦  {props.span1} </span>
                    <span className="text-white text-2xl bg-black">✦  {props.span2} </span>
                    <span className="text-white text-2xl bg-black">✦  {props.span3} </span>
                    <span className="text-white text-2xl bg-black">✦  {props.span1} </span>
                    <span className="text-white text-2xl bg-black">✦  {props.span2} </span>
                    <span className="text-white text-2xl bg-black">✦  {props.span3} </span>
                <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
            </div>
        </div>
    )
}
