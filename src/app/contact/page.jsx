"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import github from "@/public/github.png"
import linkdine from "@/public/linkdine.png" 



export default function Contact () {
    
    return (
        <div className="flex flex-wrap pt-10 mt-24 w-full">



<div className="w-[45%] h-[600px] ml-10">  
        
       
           <form  className="h-[600px] mr-12 p-2 block" >

            <div className="emailSection">
              <label className="text-lg mt-4"
                htmlFor="email"
                
              >
                Your email
              </label >
              <input
                name="email"
                type="email"
                id="email"
                className="block h-[35px] border-3 border-[#b74b4b] rounded-lg w-[90%] text-[15px] text-[#b74b4b] bg-[#ebebeb]"
                required
             
                placeholder="  example@gmail.com"
              />
            </div>
            <div className="subjectSection">
              <label
                htmlFor="subject"
                className="text-lg mt-4"
                
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="block h-[35px] border-3 border-[#b74b4b] rounded-lg w-[90%] text-[15px] text-[#b74b4b] bg-[#ebebeb]"
                
                placeholder="  Just saying hi"
              />
            </div>
            <div className="messagetSection">
              <label
                htmlFor="message"
                className="text-lg mt-4"
               
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="block h-[35px] border-3 border-[#b74b4b] rounded-lg w-[90%] text-[15px] text-[#b74b4b] bg-[#ebebeb]"
              
                placeholder="  Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="h-[30px] w-[150px] font-thin mt-5  pl-2 pr-2  border-2 border-transparent rounded-lg transition duration-500 hover:scale-110 hover:-translate-y-[1px] hover:border-[#b74b4b] hover:shadow-[0_0_25px_#b74b4b]"
            >
              Send Message
            </button>
          </form>
            
          </div>
    

<div className="conectSection w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 ml-5 h-[500px]">


<h5 className="conectHeading text-4xl font-semibold">
Let&apos;s{" "} Connect
</h5>
<p className="conectDescription  w-[400px]   text-[20px]  opacity-85">
 
  I&apos;m currently looking for new opportunities, my inbox is always
  open. Whether you have a question or just want to say hi, I&apos;ll
  try my best to get back to you!
</p>
{ <div className="socials flex flex-row gap-2">
  <Link href="https://github.com/Waseem4100">
 <Image src={github} alt="github" id="social"  className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-2 border-[#b74b4b] rounded-full m-4 mb-8 transition ease duration-500 text-white hover:text-black hover:scale-125 hover:-translate-y-1.5 hover:bg-[#b74b4b] hover:shadow-[0_0_25px_#b74b4b]"/>
  </Link>
  <Link href="https://www.linkedin.com/in/waseem-ahmed117068/">
    <Image src={linkdine} alt="linkedin" id="social"  className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-2 border-[#b74b4b] rounded-full m-4 mb-8 transition ease duration-500 text-white hover:text-black hover:scale-125 hover:-translate-y-1.5 hover:bg-[#b74b4b] hover:shadow-[0_0_25px_#b74b4b]"/>
  </Link>


</div>  }

</div> 



    
   

     </div> 
    )}