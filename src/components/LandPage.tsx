import React from "react";
import { ReactTyped } from "react-typed";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import img from '../assets/landImg.png'
import Cv from '../assets/AhmedShehataResume.pdf'
const LandPage: React.FC =({})=>{

return(
<>
<div id='home' className="container mx-auto mb-[500px]w-[80%] h-[92vh] max-w-[80%]">
    <div className="land_page_content flex lg:flex-row md:flex-col sm:flex-col items-center h-[100%] justify-evenly">
{/* text section */}
        <div className="flex flex-col max-w-[470px] lg:mx-0 md:mx-auto">
            <div className="flex lg:mx-0 md:mx-auto">
                <h2 className="header_title gradient lg:text-5xl md:text-4xl font-bold mb-5 mrs-2 pr-4 ">{"I`m "}</h2>
                <ReactTyped className='header_title gradient lg:text-5xl md:text-4xl font-bold '
                strings={['Ahmed Shehata']}
                typeSpeed={120}/>
            </div>

            <div className="lg:text-start md:text-center mb-5">
                <ReactTyped className='text-2xl text-gray-500 font-bold'
                strings={['frontEnd Developer' , 'Graphic Designer' , 'Freelancer' , 'UI/UX Designer']}
                typeSpeed={80}
                startDelay={2000}
                loop
                />
            </div>
            <div className="text_pra lg:text-start md:text-center mb-5">
                <ReactTyped className='lg:text-xl md:text-2xl sm:text-1xl text-gray-500 font-bold'
                strings={['I have experience in  Vue.js framework and React.js' , 'i am a member of compatitave programming Acpc and have experience in problem Solving', 'i have experiance in Linux admainstration']}
                typeSpeed={80}
                startDelay={2000}
                loop
                />
            </div>
            <div className="land_btns flex items-center lg:justify-start justify-center space-x-2 gap-2 lg:mx-0 md:mx-auto">
                    <button className="cv_btn border-1 w-[150px] h-13 px-3 py-1 my-5 rounded-2xl cursor-pointer text-gray-500 hover:bg-amber-300 ease-all decoration-50 ">
                        <a href={Cv} download>Download Cv</a>
                    </button>
                    <a className="" href="https://github.com/Ahmed604shehata?tab=repositories" target="_blank">
                    <FaGithub size={50} className="social_i border-1 text-gray-500 border-amber-300 p-2 rounded-2xl cursor-pointer hover:bg-amber-300 ease-all decoration-50"/>
                    </a>
                <IoLogoVercel size={50} className="social_i border-1 text-gray-500 border-amber-300 p-2 rounded-2xl cursor-pointer hover:bg-amber-300 ease-all decoration-50"/> 
            </div>
        </div>
{/* img section */}
        <div className="box_image movebale py-3 mt-15 h-[330px] w-[280px] bg-amber-300 relative">
            <img src={img}  className="animation_img box_image border-amber-50  absolute h-[330px] w-[99%] left-0 bottom-[-1px]" alt="" />
        </div>
    </div>
</div>
</>
    )
}
export default LandPage;