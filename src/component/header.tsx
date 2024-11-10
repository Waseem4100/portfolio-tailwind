

import Link from "next/link"









export default function Header (){
 
    
    return(
       
        <div >

        <header className="fixed top-0 left-0 w-full mt-5 p-4 pl-[9%] pr-[9%] bg-transparent drop-shadow-lg flex justify-between items-center z-[100]" > 


       <h3 className="text-3xl italic text-[#b74b4b] font-extrabold ml-4 transition ease-in-out duration-500 transform hover:scale-110 hover:-translate-y-1">  <Link href={`/`}> WASEEM AHMED</Link> </h3>
      
       
    
     <ul className="flex gap-9 ml-16 text-[1.8rem] text-white font-medium pb-1 border-b-3 border-transparent transition duration-300">
      <Link href={`/`}> <li className="transition duration-200 hover:text-[#b74b4b] hover:border-b-[#b74b4b] active:text-[#b74b4b] active:border-b-[#b74b4b] border-b-3">Home</li></Link> 
      <Link href={`/contact`}> <li className="transition duration-200 hover:text-[#b74b4b] hover:border-b-[#b74b4b] active:text-[#b74b4b] active:border-b-[#b74b4b] border-b-3">Contact</li></Link>
      <Link href={`/about`}> <li className="transition duration-200 hover:text-[#b74b4b] hover:border-b-[#b74b4b] active:text-[#b74b4b] active:border-b-[#b74b4b] border-b-3">About</li></Link>
      <Link href={`/projects`}> <li className="transition duration-200 hover:text-[#b74b4b] hover:border-b-[#b74b4b] active:text-[#b74b4b] active:border-b-[#b74b4b] border-b-3">Project</li></Link>
        </ul>
  
        </header>   
        
        </div>
      

    )
}