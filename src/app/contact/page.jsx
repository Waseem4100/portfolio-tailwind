"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import github from "@/public/github.png"
import linkdine from "@/public/linkdine.png" 



export default function Contact () {
    
    return (
        <div className="contactSection flex flex-wrap pt-10 mt-24 w-full">



<div className="contactForm w-full sm:w-1/2 md:w-1/2 lg:w-2/5 xl:w-2/5 ml-10 h-[600px]">  
        
       
           <form  className="h-[600px] mr-12 p-2 block" >

            <div className="emailSection">
              <label
                htmlFor="email"
                
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
             
                placeholder="  example@gmail.com"
              />
            </div>
            <div className="subjectSection">
              <label
                htmlFor="subject"
                
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                
                placeholder="  Just saying hi"
              />
            </div>
            <div className="messagetSection">
              <label
                htmlFor="message"
               
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
              
                placeholder="  Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="submitButton"
            >
              Send Message
            </button>
          </form>
            
          </div>
    

<div className="conectSection w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 ml-5 h-[500px]">


<h5 className="conectHeading text-3xl font-semibold">
Let&apos;s{" "} Connect
</h5>
<p className="conectDescription w-[300px] text-xl opacity-85">
 
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