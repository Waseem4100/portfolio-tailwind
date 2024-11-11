import Image from "next/image";
import Main from "@/component/main" ;
import About from "@/app/about/page"
import Contact from "@/app/contact/page"
import Projects from "@/app/projects/page"



export default function Home() {
  return (
<div className="m-0 p-0 box-border border-none outline-none font-tahoma text-white w-full h-screen overflow-x-hidden bg-[#3d3d3d]">
   <Main/>
    <About />
    <Projects/>
    <Contact />
  </div>
  );
}
