import Link from "next/link";
export default function Footer(){
  return  (
        
          <div className= "  bg-[#3d3d3d] ml-96   text-[#b74b4b] p-5   w-full fixed bottom-0 left-0 ">
       
          <h1 className="text-4xl font-semibold ml-[-50px]">  <Link href={`/`}> WASEEM AHMED</Link> </h1>
            
            <p className="text-3xl font-semibold opacity-85 mt-10 ">All rights reserved.</p>
          
           
          </div>
       
      );
}