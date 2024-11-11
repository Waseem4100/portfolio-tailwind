import calculator from "@/public/calculator.png"
import loginpage  from "@/public/loginpage.png"
import resumebulider  from "@/public/resumebuilder.png"
import Image from "next/image"
import Link from "next/link"

export default function Jobs() {
    
    return (
     <div className="projectContainer flex w-full min-h-[500px] p-10 flex-wrap gap-7">
    

       <div className="projectCard w-[325px] h-[325px] min-h-[325px] bg-[#161616] rounded-[12px] border-3 border-transparent mt-24 transition duration-500 ml-8 hover:scale-110 hover:-translate-y-1 hover:border-[#b74b4b] hover:shadow-[0_0_25px_#b74b4b]">
        <div >
        <Image src={calculator} alt="calculator"  className="projectImage w-full h-[220px] bg-[#b74b4b] rounded-[10px]" />
        </div>
        <h1 className="projectTitle text-[20px] mt-2 ml-12 bg-[#161616]">SIMPLE CALCULATOR</h1>
    
        <div className="projectButton flex gap-16 mt-2 mb-1 ml-8 bg-[#161616]">
        <Link href="https://simplecalculatorbywaseemahmed.vercel.app/"><button className=" ml-2 h-[30px] w-[100px] mb-1 font-normal  pl-2 pr-2  border-2 border-transparent rounded-[10px] transition duration-500 hover:scale-110 hover:-translate-y-1 hover:border-[#b74b4b] hover:shadow-[0_0_25px_#b74b4b] bg-[#161616]">DEMO</button></Link>
          <Link href="https://github.com/Waseem4100/SIMPLE-CALCULATOR"><button className=" ml-2 h-[30px] w-[100px] mb-1 font-normal  pl-2 pr-2  border-2 border-transparent rounded-[10px] transition duration-500 hover:scale-110 hover:-translate-y-1 hover:border-[#b74b4b] hover:shadow-[0_0_25px_#b74b4b] bg-[#161616]">GITHUB</button></Link>
          
          </div>
      </div>

      <div className="projectCard w-[325px] h-[325px] min-h-[325px] bg-[#161616] rounded-[12px] border-3 border-transparent mt-24 transition duration-500 ml-8 hover:scale-110 hover:-translate-y-1 hover:border-[#b74b4b] hover:shadow-[0_0_25px_#b74b4b]">
        <div className="projectImage">
        <Image src={loginpage} alt="loginpage"  className="projectImage w-full h-[220px] bg-[#b74b4b] rounded-[10px] " />
        </div>
        <h1 className="projectTitle text-[20px] mt-2 ml-12 bg-[#161616]">LOGIN PAGE</h1>
      
        <div className=" flex gap-16 mt-2 mb-1 ml-8 bg-[#161616]">
          <Link href="https://loginpage-olive-gamma.vercel.app/"><button className="bg-[#161616] h-[30px] w-[100px] mb-1 font-normal pl-2 pr-2   transition duration-500 hover:scale-110 hover:-translate-y-1 hover:border-[#b74b4b] hover:shadow-[0_0_25px_#b74b4b]">DEMO</button></Link>
          <Link href="https://github.com/Waseem4100/log-in-page"><button className="bg-[#161616] ml-2 h-[30px] w-[100px] mb-1 font-normal  pl-2 pr-2  border-2 border-transparent rounded-[10px] transition duration-500 hover:scale-110 hover:-translate-y-1 hover:border-[#b74b4b] hover:shadow-[0_0_25px_#b74b4b]">GITHUB</button></Link>
          
          </div>
      </div>

      <div className="projectCard w-[325px] h-[325px] min-h-[325px] bg-[#161616] rounded-[12px] border-3 border-transparent mt-24 transition duration-500 ml-8 hover:scale-110 hover:-translate-y-1 hover:border-[#b74b4b] hover:shadow-[0_0_25px_#b74b4b] ">
        <div className="projectImage">
        <Image src={resumebulider} alt="resumebulder"  className="projectImage w-full h-[220px] bg-[#b74b4b] rounded-[10px] " />
        
        </div>
        <h1 className=" text-[20px] mt-2 ml-12 bg-[#161616]">RESUME BUILDER</h1>
        <div className="bg-[#161616] flex gap-16 mt-2 mb-1 ml-8">  
        <Link href="https://milestone5downloadableresumebuilderbywaseemahmed.vercel.app/"><button className="bg-[#161616] ml-2 h-[30px] w-[100px] mb-1 font-normal   pl-2 pr-2 border-2 border-transparent rounded-[10px] transition duration-500 hover:scale-110 hover:-translate-y-1 hover:border-[#b74b4b] hover:shadow-[0_0_25px_#b74b4b]">DEMO</button></Link>
        <Link href="https://github.com/Waseem4100/milestone5-Downloadable-Resume-Builder-"><button className="bg-[#161616] ml-2 h-[30px] w-[100px] mb-1 font-normal  pl-2 pr-2 border-2 border-transparent rounded-[10px] transition duration-500 hover:scale-110 hover:-translate-y-1 hover:border-[#b74b4b] hover:shadow-[0_0_25px_#b74b4b]">GITHUB</button></Link>
          </div>
      </div>

    
     
     
     </div>
     

    )}