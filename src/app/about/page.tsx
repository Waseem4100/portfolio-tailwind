
import Image from "next/image"
import about from "@/public/about.png"


export default function About() {

  
    
    return (
      <div className="flex flex-wrap gap-32 mt-24 p-2">

     <div > <Image src={about} alt="about" loading="lazy" className="AboutPicture mt-12 ml-12 relative w-[32vw] rounded-[30px] shadow-lg cursor-pointer transition duration-500 hover:scale-110 hover:-translate-y-1 hover:border-4 hover:border-[#b74b4b] hover:shadow-[#b74b4b]"  />
     </div>



     <div className=" w-[35%] ml-10">
      <h2 className=" text-4xl font-semibold">About Me</h2>
      <p className=" w-[400px]   text-[20px]  opacity-85"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo esse molestiae dignissimos animi facilis dolore voluptates rem laudantium non iusto, odio dolores, repellendus vero iure corporis magni pariatur suscipit! Expedita.</p>
     
     <div className="flex flex-row mt-8">
      <span className="skillSection w-[500px] text-lg opacity-85 ml-2 font-normal text-white transition duration-500 hover:scale-110 hover:-translate-y-1 hover:text-[#b74b4b] hover:opacity-100">Skill

      <ul className="mt-3 hover: text-white">
        <li>html</li>
        <li>css</li>
        <li> typescript</li>
      </ul>
      
      </span>
     
      <span className="educationSection w-[500px] text-lg opacity-85 ml-2 mr-4 font-normal text-white transition duration-500 hover:scale-110 hover:-translate-y-1 hover:text-[#b74b4b] hover:opacity-100">Education
      <ul className="mt-3 hover: text-white" >
          <li>INTERMEDIATE</li>
     </ul>
      </span>

      <span className="experienceSection w-[500px] text-lg opacity-85 ml-4 font-normal text-white transition duration-500 hover:scale-110 hover:-translate-y-1 hover:text-[#b74b4b] hover:opacity-100">Experience
        <ul className="mt-3 hover: text-white" >
          <li>FRESH</li>
        </ul>
      </span>
      

     </div>
     </div>
 
   
     
  </div>
    )}