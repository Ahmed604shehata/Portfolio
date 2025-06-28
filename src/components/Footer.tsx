import React from 'react';
import { WiDirectionUp } from "react-icons/wi";
import { Link, animateScroll as scroll } from 'react-scroll';
const Footer: React.FC = () => {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

// nav Items
const navItems: { link: string; path: string }[] = [
  {link : 'Home', path:'home'},
  {link : 'Projects' , path:'projects'},
  {link : 'Contact' , path:'contact'},
];
return(
<>
<footer>
    <div className=" flex my-5 p-3 justify-end items-center flex-col container w-[100%] mx-auto  text-center h-[450px]">
        <div onClick={scrollTop} className='bg-white flex justify-center my-5 text-center p-2 rounded-2xl text-black cursor-pointer' >
            <WiDirectionUp/>
        </div>
        <div className='footer_menu w-75 rounded-full py-2 '>
            <ul className=" flex justify-center items-center gap-5">
                { navItems.map(({link ,path})=>( <div key={path} className='w-full my-1 text-amber-50  cursor-pointer transation-all ease-all ease-in-out duration-500'>
                    <Link classList=" text-start pl-3 cursor-pointer" to={path} smooth={true} duration={500} >{link}</Link>
                    </div>
                ))}
            </ul>
        </div>
        <div className='footer_links my-6'>
            <a href="#" className='' target="_blank" rel="">
                GitHub
            </a>
            <a href="#" className='mx-8 text-gray-500' target="_blank" rel="">
                LinkedIn
            </a>
            <a href="https://www.ahmedshehata406@gmail.com" className='text-gray-500'>
                Email
            </a>
        </div>
        <div>
            &copy; {new Date().getFullYear()} <span className='text-amber-300 py-5'>Ahmed Shehate</span> . All rights reserved.
        </div>
    </div>
</footer>
</>)
};

export default Footer;