

import Link from "next/link"









export default function Header (){
 
    
    return(
       
        
      <div className=" mt-5 justify-between  fixed top-0 left-0 w-full p-4 px-[9%] bg-transparent drop-shadow-[10px] flex  items-center z-[100] bg-black" >
        

      <div className="gap-32 ">
        
         <h3 className=" text-3xl italic text-[#b74b4b] m-4 font-extrabold transition duration-500 ease hover:scale-110 hover:-translate-y-0.5">  <Link href={`/`}> WASEEM AHMED</Link> </h3>
         </div>
      
      
       
    <div className=" gap-8 flex p-5 text-xl text-white ml-16 font-medium transition duration-300 border-b-4 border-transparent">
    
      <Link href={`/`}><button className=" gap-10 transition duration-200 hover:text-[#b74b4b] hover:border-b-[3px] hover:border-b-solid active:text-[#b74b4b] active:border-b-[3px] active:border-b-solid">Home</button></Link> 
      <Link href={`/contact`}> <button className="transition duration-200 hover:text-[#b74b4b] hover:border-b-[3px] hover:border-b-solid active:text-[#b74b4b] active:border-b-[3px] active:border-b-solid">Contact</button></Link>
      <Link href={`/about`}><button className="transition duration-200 hover:text-[#b74b4b] hover:border-b-[3px] hover:border-b-solid active:text-[#b74b4b] active:border-b-[3px] active:border-b-solid">About</button></Link>
      <Link href={`/projects`}><button className="transition duration-200 hover:text-[#b74b4b] hover:border-b-[3px] hover:border-b-solid active:text-[#b74b4b] active:border-b-[3px] active:border-b-solid">Project</button></Link>
       
        
    </div> 

    
  
         
        </div> 
        
        
      

    )
}