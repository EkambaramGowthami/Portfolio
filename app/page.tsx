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
import Express from "@/public/images/Express";
import Tailwind from "@/public/images/Tailwind";
import Tiled from "@/public/images/Tiled";
import Videocall from "@/public/images/Videocall";
export default function Home() {
  const Tags = [{ tag: "React", element: <React /> },
  { tag: "Node.js", element: <Node /> },
  { tag: "MongoDb", element: <Db /> }, { tag: "Next.js", element: <Next /> }, { tag: "Java", element: <Java /> }, { tag: "Html", element: <Html /> }, { tag: "Css", element: <Css /> }, { tag: "Mysql", element: <Mysql /> }, { tag: "Figma", element: <Figma /> },
  { tag: "Framer", element: <Framer /> },
  ];
  const TagsTwo = [{ tag: "Mysql", element: <Mysql /> }, { tag: "Figma", element: <Figma /> },
  { tag: "Framer", element: <Framer /> }, { tag: "React", element: <React /> },
  { tag: "Node.js", element: <Node /> },
  { tag: "MongoDb", element: <Db /> }, { tag: "Next.js", element: <Next /> }, { tag: "Java", element: <Java /> }, { tag: "Html", element: <Html /> }, { tag: "Css", element: <Css /> },
  ];
  const projects = [{ title: "Voffice", description: "A virtual metaverse that is inspired by real office interactions", image: "/images/metaverse.png", github: "https://github.com/EkambaramGowthami/Metaverse", live: "https://metaverse-delta-snowy.vercel.app/dashboard", video: "/public/images/Myvideos-2025-12-29_21.52.39.mkv",langs:[<Node />,<Db />,<React />,<Tailwind />,<Tiled />] },
  { title: "Zentra", description: "A website which creates websites inspired by tools like bolt,lovable. ", image: "/images/zentra.png", github: "https://github.com/EkambaramGowthami/Zentra.newer", live: "https://zentra-frontend-tw0j.onrender.com/dashboard", video: "/public/images/Myvideos-2025-12-29_21.52.39.mkv",langs:[<Node />,,<Db />,<React />,<Tailwind />] },
  { title: "The8thRank", description: "chessgame in which players can play with theire friends or with Ai ", image: "/images/chess.png", github: "https://github.com/EkambaramGowthami/Chessgame", live: "https://chessgame-the8thrank.onrender.com/dashboard", video: "/public/images/Myvideos-2025-12-29_21.52.39.mkv",langs:[<Node />,<Db />,<React />,<Tailwind />,] },
  { title: "Admin-panel", description: "Admin panel for the civic issues resolution app ", image: "/images/adminpanel.jpeg", github: "https://github.com/EkambaramGowthami/Admin-panel", live: "https://chessgame-the8thrank.onrender.com/dashboard", video: "/public/images/Myvideos-2025-12-29_21.52.39.mkv",langs:[<Node />,<Db />,<React />,<Tailwind />] },
  ];
  return (
    <div className="pl-80 pr-80 pt-20 bg-zinc-50 font-sans dark:bg-[#F6F7FB] ">
      <div className="bg-white text-black p-18 rounded-xl">
        <div className="flex perspective-[1500px]">
          <h1 className="text-4xl font-bold ">Hey, I'm</h1>
          <div className="shadow-3xl rounded-2xl p-1 border border-black/5 shadow-[0_6px_12px_rgba(0,0,0,0.06),0_8px_16px_rgba(0,0,0,0.08),0_16px_32px_rgba(0,0,0,0.05)] transform rotate-x-[-4deg] rotate-y-[-6deg] rotate-z-[-8deg] -translate-y-6">
            <Image src={"/images/Gemini_Generated_Image_7t3h4q7t3h4q7t3h.png"} alt="skyra" width={80} height={80} className="rounded-xl" />
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
            {Tags.map((tag) => (
              <div className="flex items-center space-x-2 text-black font-semibold px-3 py-1 rounded-md" key={tag.tag}>
                <div>{tag.tag}</div>
                <div>{tag.element}</div>
              </div>
            ))}
          </Marquee>
          <Marquee reverse={true} speed={60} >
            {TagsTwo.map((tag) => (
              <div className="flex space-x-2 items-center text-black font-semibold px-3 py-1 rounded-md" key={tag.tag}>
                <div>{tag.tag}</div>
                <div>{tag.element}</div>
              </div>
            ))}
          </Marquee>
        </div>
        <div className="mt-12 bg-[#F6F7FB] p-10 shadow shadow-xl rounded-xl">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div>Building ideas into realiable,user friendly products</div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div className="shadow shadow-xl rounded-xl bg-white"  key={project.title}>
              <Image
                src={project.image}
                alt="project image"
                width={600}
                height={300}
                className="rounded-xl"
              />
              <div className="p-8">
                   <div className="text-xl font-bold text-black ">{project.title}</div>
                    <div className="text-md mt-2 italic">{project.description }</div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex">
                        {project.langs.map((lang,index)=>(
                          <span key={index} className={`flex w-8 h-8 rounded-full  text-center bg-[#F6F7FB] shadow ring-1 ring-gray-600 border border-black/5 shadow-[0_6px_12px_rgba(0,0,0,0.06),0_8px_16px_rgba(0,0,0,0.08),0_16px_32px_rgba(0,0,0,0.05)] shadow-xl ${index == 0 ? "" : "-ml-2"} ${index === 0 ? "z-50" : index === 1 ? "z-40" : "z-30"}}`}>{lang}</span>
                        ))}
                    </div>
                    <div className="flex space-x-1">
                      <a className="px-4 py-2 rounded-xl border border-gray-300 shadow shadow-xl bg-[#F6F7FB]" href={project.video}>V</a>
                      <a className="px-4 py-2 rounded-xl border border-gray-300 shadow shadow-xl bg-[#F6F7FB]" href={project.live}>L</a>
                      <a className="px-4 py-2 rounded-xl border border-gray-300 shadow shadow-xl bg-[#F6F7FB]" href={project.github}>G</a>
                    </div>
                    </div>
              </div>
              
             
            </div>
          ))}
        </div>
        </div>
        
   </div>
    </div>
  );
}
