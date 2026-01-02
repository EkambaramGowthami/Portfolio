"use client";
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion";
type marqueeProps = {
    children:React.ReactNode,
    speed?:number,
    reverse?:boolean,

}
export default function Marquee({children,speed=50,reverse=false}:marqueeProps){
    const contentRef = useRef<HTMLDivElement>(null);
    const [width,setWidth] = useState(0);
    useEffect(()=>{
        if(!contentRef.current) return;
        setWidth(contentRef.current.scrollWidth);
    },[]) 
    return(
        <div className="relative flex w-full overflow-hidden">
                <motion.div
                className="flex whitespace-nowrap space-x-20"
                animate={{x:reverse ? [-width/2,0] : [0,-width/2]}}
                transition={{duration:width/speed,repeat:Infinity,ease:"linear"}}
                >
                    <div ref={contentRef} className="flex space-x-20">
                        {children}
                    </div>
                    <div className="flex space-x-20">
                        {children}
                    </div>
                    
                </motion.div>
            

        </div>
    )

}



