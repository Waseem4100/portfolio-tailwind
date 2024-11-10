import Image from "next/image";
import Link from "next/link";
import SS from "@/public/SS.png";
import github from "@/public/github.png";
import linkedin from "@/public/linkdine.png";


export default function Main(){
    return(

        <div className="Main flex gap-32 mt-24 p-10 ">
  


 <div>  <Image src={SS} alt="profilePicture"  loading="lazy"  className="picture mt-10 ml-8 relative w-1/3 rounded-[30px] shadow-[0_0_25px_rgba(0,0,0,0.25)] cursor-pointer transition duration-500 hover:scale-110 hover:-translate-y-0.5 hover:border-4 hover:border-[#b74b4b] hover:shadow-[0_0_25px_#b74b4b] "  />
  
</div>

    

      
<div className="intro w-1/2 ml-10 h-[500px] mt-24">

<h1 className="name text-7xl font-bold leading-tight" >Hi,Im <span className="text-[#b74b4b]" >Waseem </span></h1>

<h3 className="text-4xl font-bold mb-4" >  I&apos;m{" "} a <span className="profession-span text-[#b74b4b] animate-words">next js</span></h3>
<p className="mainPragraph w-[400px] text-[20px] opacity-85" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit dolor impedit et quae ea earum quam nihil eligendi nobis doloribus fuga aspernatur deleniti quo provident, at deserunt modi? Impedit, quia.</p>





<div className="social-icon flex ml-28 mt-4 gap-2">
<Link href ="https://github.com/Waseem4100"> <Image src={github} alt="github"  loading="lazy"   id="social" className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-2 border-[#b74b4b] rounded-full m-4 mb-8 transition ease duration-500 text-white hover:text-black hover:scale-125 hover:-translate-y-1.5 hover:bg-[#b74b4b] hover:shadow-[0_0_25px_#b74b4b]"/></Link>
<Link href ="https://www.linkedin.com/in/waseem-ahmed117068/"> <Image src={linkedin} alt="github"  loading="lazy"    id="social" className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-2 border-[#b74b4b] rounded-full m-4 mb-8 transition ease duration-500 text-white hover:text-black hover:scale-125 hover:-translate-y-1.5 hover:bg-[#b74b4b] hover:shadow-[0_0_25px_#b74b4b]"/></Link>

</div>
</div>


</div>






    )
}



