import Link from "next/link";
export default function Footer(){
  return  (
        <footer >
          <div className="footerContainer flex bg-[rgb(63,61,61)] text-[#b74b4b] justify-center items-center flex-col w-full flex-wrap p-5 left-0 bottom-0">
          <h3 className="footerLogo text-3xl font-semibold ml-[-50px]">  <Link href={`/`}> WASEEM AHMED</Link> </h3>
            <p className="footerParagraph text-[15px] font-semibold opacity-[85%] mt-5">All rights reserved.</p>
          </div>
        </footer>
      );
}