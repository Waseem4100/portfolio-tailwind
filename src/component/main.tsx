import Image from "next/image";
import Link from "next/link";
import SS from "@/public/SS.png";
import github from "@/public/github.png";
import linkedin from "@/public/linkdine.png";


export default function Main(){
    return(

        <div className=" flex gap-32 mt-24 p-10 ">
  


 <div>  <Image src={SS} alt="profilePicture"  loading="lazy"  className=" ml-12 relative w-[32vw] rounded-[30px] shadow-lg cursor-pointer transition duration-500 hover:scale-110 hover:-translate-y-1 hover:border-4 hover:border-[#b74b4b] hover:shadow-[#b74b4b]"  />
  
</div>

    

      
<div className="w-[50%] ml-10">

<h1 className="text-6xl font-semibold " >Hi,Im <span className="text-[#b74b4b]" >Waseem </span></h1>

<h2 className="text-4xl font-semibold" >  I&apos;m{" "} a <span className=" text-[#b74b4b] animate-words">next js</span></h2>
<p className="w-[400px]   text-[20px]  opacity-85" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit dolor impedit et quae ea earum quam nihil eligendi nobis doloribus fuga aspernatur deleniti quo provident, at deserunt modi? Impedit, quia.</p>





<div className="social-icon flex ml-28 mt-4 gap-2">
<Link href ="https://github.com/Waseem4100"> <Image src={github} alt="github"  loading="lazy"   id="social" className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-2 border-[#b74b4b] rounded-full m-4 mb-8 transition ease duration-500 text-white hover:text-black hover:scale-125 hover:-translate-y-1.5 hover:bg-[#b74b4b] hover:shadow-[0_0_25px_#b74b4b]"/></Link>
<Link href ="https://www.linkedin.com/in/waseem-ahmed117068/"> <Image src={linkedin} alt="github"  loading="lazy"    id="social" className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-2 border-[#b74b4b] rounded-full m-4 mb-8 transition ease duration-500 text-white hover:text-black hover:scale-125 hover:-translate-y-1.5 hover:bg-[#b74b4b] hover:shadow-[0_0_25px_#b74b4b]"/></Link>

</div>
</div>


</div>






    )
}



