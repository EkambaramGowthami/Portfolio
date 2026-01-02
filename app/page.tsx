import Image from "next/image";
import Tools from "@/public/images/Tools";
import Marquee from "./components/Marquee";
import React from "@/public/images/React";
import Db from "@/public/images/Db";
import Node from "@/public/images/Node"; 
import Html from "@/public/images/Html"; 
import Css from "@/public/images/Css";
import Framer from "@/public/images/Framer";
import Next from "@/public/images/Next";
import Java from "@/public/images/Java";
import Mysql from "@/public/images/Mysql";
import Figma from "@/public/images/Figma";
export default function Home() {
  const Tags = [{tag:"React",element:<React />},
  {tag:"Node.js",element:<Node />},
  {tag:"MongoDb",element:<Db />},{tag:"Next.js",element:<Next />},{tag:"Java",element:<Java />},{tag:"Html",element:<Html />},{tag:"Css",element:<Css />},{tag:"Mysql",element:<Mysql />},{tag:"Figma",element:<Figma />},
  {tag:"Framer",element:<Framer />},
  ];
  const TagsTwo = [{tag:"Mysql",element:<Mysql />},{tag:"Figma",element:<Figma />},
  {tag:"Framer",element:<Framer />},{tag:"React",element:<React />},
  {tag:"Node.js",element:<Node />},
  {tag:"MongoDb",element:<Db />},{tag:"Next.js",element:<Next />},{tag:"Java",element:<Java />},{tag:"Html",element:<Html />},{tag:"Css",element:<Css />},
  ];
  return (
    <div className="pl-80 pr-80 pt-20 h-screen bg-zinc-50 font-sans dark:bg-white/90">
      <div className="bg-white text-black p-18 rounded-xl">
        <div className="flex perspective-[1500px]">
          <h1 className="text-4xl font-bold ">Hey, I'm</h1>
          <div className="shadow-3xl rounded-2xl p-1 border border-black/5 shadow-[0_6px_12px_rgba(0,0,0,0.06),0_8px_16px_rgba(0,0,0,0.08),0_16px_32px_rgba(0,0,0,0.05)] transform rotate-x-[-4deg] rotate-y-[-6deg] rotate-z-[-8deg] -translate-y-6">
            <Image src={"/images/Gemini_Generated_Image_7t3h4q7t3h4q7t3h.png"} alt="skyra" width={80} height={80} className="rounded-xl"/>
          </div>
          <div className="transform translate-x-2">
             <h1 className="text-4xl font-bold ">Skyra</h1>
          </div>
          
        </div>
        <div className="mt-12">
           <p className="text-xl">Gowthami</p>
           <p className="text-xl">I’m a passionate full-stack developer who loves bringing ideas to life through code. I enjoy building complete products, working across both frontend and backend, and focusing on projects that address real-world challenges. With a strong eye for clean UI and smooth animations, I aim to create experiences that feel intuitive, polished, and impactful.</p>
        </div>
        <div className="mt-12 flex items-center space-x-4">
          <div className="h-12 w-12 bg-black/85 rounded-md flex justify-center items-center backdrop-blur-md border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
            <Tools />
          </div>
          <h2 className="text-3xl font-bold">Tools i use to code</h2>
        </div>
        <div className="relative mt-8 flex flex-col gap-6 overflow-hidden space-x-20">
          <Marquee speed={60}>
            {Tags.map((tag)=>(
              <div className="flex items-center space-x-2 text-black font-semibold px-3 py-1 rounded-md" key={tag.tag}>
                <div>{tag.tag}</div>
                <div>{tag.element}</div>
              </div>
            ))}
          </Marquee>
          <Marquee reverse={true} speed={60} >
            {TagsTwo.map((tag)=>(
              <div className="flex space-x-2 items-center text-black font-semibold px-3 py-1 rounded-md" key={tag.tag}>
                <div>{tag.tag}</div>
                <div>{tag.element}</div>
              </div>
            ))}
          </Marquee>

        </div>
        
       
       
      </div>
    </div>
  );
}
