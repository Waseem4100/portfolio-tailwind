import Link from "next/link";
export default function Footer(){
  return  (
        
          <div className="flexblock  bg-[#3f3d3d] text-[#b74b4b] p-5 justify-center items-center flex-col w-full fixed bottom-0 left-0 flex-wrap">
          <h1 className="text-4xl font-semibold ml-[-50px]">  <Link href={`/`}> WASEEM AHMED</Link> </h1>
            <p className="text-3xl font-semibold opacity-85 ">All rights reserved.</p>
          </div>
       
      );
}