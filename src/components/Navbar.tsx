import React, { useEffect, useState } from 'react';
import LightButton from "../assets/mood/light-mode-button.png";
import DarkButton from "../assets/mood/dark-mode-button.png";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link, animateScroll as scroll } from 'react-scroll';
import { MdFullscreen } from "react-icons/md";
import { MdFullscreenExit } from "react-icons/md";
const Navbar: React.FC = ({}) => {

  const [isOpened , setIsOpened] = useState<boolean>(false)
  const [isSticky , setMySticky] = useState<boolean>(false)
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

  function toggleMenu(){
    setIsOpened(!isOpened)
  }


useEffect(()=>{
  // handle theme
  if (theme === "light") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }

  // handle scroll
const handleScroll = () => {
  if(window.scrollY > 100){
    setMySticky(true)
  }else{
    setMySticky(false)
  }
    window.addEventListener('scroll' , handleScroll )
  }
  return ()=>{
    window.addEventListener('scroll' , handleScroll )
  }
} , [theme])


// full screen
const toggleFullscreen = () => {
  if (!isFullscreen) {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } 
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } 
  }
  setIsFullscreen(!isFullscreen);
};

// nav Items
const navItems: { link: string; path: string }[] = [
  {link : 'Home', path:'home'},
  {link : 'Projects' , path:'projects'},
  {link : 'Contact' , path:'contact'},
];

return(
  <header className='w-full bg-transparent'>
    <nav>
      <div className="px-10 py-3">
        <div className="nav_content">
              <div>{" "}</div>
          {/* right content */}
            <div className=' flex items-center justify-end md:space-x-15  space-x-0'>
              {/* navbar */}
              <ul className='md:flex hidden space-x-12'>
                { navItems.map(({link ,path})=>( <div key={path} className='w-full my-1 py-4  cursor-pointer transation-all ease-all ease-in-out duration-500'>
                    {link === 'Home' ? <Link  to={path} smooth={true} duration={500} className={theme === 'light' ? 'text-black text-start pl-3 cursor-pointer' : 'text-amber-300 text-start pl-3 cursor-pointer'}>{link}</Link>
                      : <Link  to={path} smooth={true} duration={500}>{link}</Link>}
                  </div>
                ))}
              </ul>
              <div className="theme_btn flex items-center justify-end z-500">
                {/* theme Icon */}
                <div className=" col-span-2 py-4 flex justify-end pr-4 " onClick={()=>setTheme}>
                    <div className="relative">
                      <img
                        src={LightButton}
                        alt=""
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className={`mx-2 w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
                          theme === "dark" ? "opacity-0" : "opacity-100"
                        } `}
                      />
                      <img
                        src={DarkButton}
                        alt=""
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="mx-2 w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"/>
                    </div>
                      <button onClick={toggleFullscreen} className='mx-1'>
                        {isFullscreen ? <MdFullscreenExit className='h-6 w-6 rounded-2xl cursor-pointer'/> : < MdFullscreen className='h-6 w-6 rounded-2xl cursor-pointer'/>}
                      </button>
                </div> 
                  {/* menu btn for only mobile devices */}
                  {isOpened ? <button onClick={toggleMenu}><IoClose  className='h-6 w-6'/></button> : <div className="md:hidden pt-1 z-50">
                    <button onClick={toggleMenu} className='focus:outline cursor-pointer'>
                        {isOpened ? <IoClose  className='h-6 w-6'/> : <CiMenuBurger className='h-6 w-6' />}
                    </button>
                    </div>}
                  </div>
                {/* menu bar btn */}
                <div className={`${isOpened ? `fixed top-0 ${theme ==='light' ? 'dark' : 'light'}  left-0 right-0 w-[100%] inset-0 z-50` : 'hidden'}`}>
                  <ul className='flex flex-col space-x-12  h-full py-15 px-2 z-100'>
                    { navItems.map(({link ,path})=>( <div  className='w-full my-1 py-4 border-b-1 border-gray-500 cursor-pointer hover:scale-[0.97] transation-all ease-all ease-in-out duration-500 px-3'>
                      {link === 'Home' ? <Link onClick={toggleMenu} to={path} smooth={true} duration={500} className={theme === 'dark' ? 'text-amber-300 text-start  cursor-pointer' : 'text-white text-start  cursor-pointer'}>{link}</Link>: <Link onClick={toggleMenu}  to={path} smooth={true} duration={500}>{link}</Link>}
                      </div>
                    ))}
                  </ul>
              </div>
            </div>
        </div>
      </div>
    </nav>
  </header>
)};export default Navbar;