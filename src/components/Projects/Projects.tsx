import React, { useState } from 'react'
// import {myProjects} from './MyProjects';
import { AnimatePresence, motion } from "framer-motion";
// import { IoLogoVercel } from "react-icons/io5";
import img1 from '../../assets/projects/Htm&css/Active.png'
import img2 from '../../assets/projects/Htm&css/DashBoard.png'
import img3 from '../../assets/projects/Htm&css/tem3.png'
import img4 from '../../assets/projects/Htm&css/Screenshot 2025-06-16 193658.png'
import img5 from '../../assets/projects/Htm&css/recipe.png'
import img6 from '../../assets/projects/react/t.png'
import img7 from '../../assets/projects/react/fresh.png'
import img8 from '../../assets/projects/react/move.png'
import img9 from '../../assets/projects/react/prof.png'
import img10 from '../../assets/projects/vue/p8.png'
import img11 from '../../assets/projects/vue/food.png'
import img12 from '../../assets/projects/vue/ela.png'
import img13 from '../../assets/projects/Htm&css/p10.png'
import img14 from '../../assets/projects/Htm&css/p7.png'
import img15 from '../../assets/projects/vue/admiro.png'
import img16 from '../../assets/projects/Htm&css/hangman.png'
import img17 from '../../assets/projects/Htm&css/p9.png'
import img18 from '../../assets/projects/Htm&css/cruds.png'
import { FaGithub } from "react-icons/fa";
const Skills:React.FC =() => {
  interface myProjects {
    projectTitle: string;
    category: string[];
    imgPath: string;
    vercel: string;
    FaGithub: string;
  }
  
 const myProjects: myProjects[] = [
  {
    projectTitle: "DashBoard",
    imgPath:img2,
    category: ["basics"],
    FaGithub:'https://github.com/Ahmed604shehata/Dashboard',
    vercel: '',
  },
  {
    projectTitle: "Active",
    imgPath:img1,
    category: ["basics"],
    FaGithub:'',
    vercel: 'https://new-524d-a517b78g6-ahmeds-projects-17432d63.vercel.app/e_show_more.html',
  },
  { 
    projectTitle: "Responsive Template",
    imgPath: img3,
    category: ["basics"],
    FaGithub:'https://github.com/Ahmed604shehata/Responsive-project',
    vercel: '',
  },
  {
    projectTitle: "Fresh Crart Ecommerce",
    imgPath: img7,
    category: ["react"],
    FaGithub:'https://github.com/Ahmed604shehata/React-e-commerce',
    vercel: '',
  },
  {
    projectTitle: "Responsive E-commerce",
    imgPath: img4,
    category: ["basics"],
    FaGithub:'https://github.com/Ahmed604shehata/Responsive-Template',
    vercel: '',
  },
  {
    projectTitle: "Recipe",
    imgPath: img5,
    category: ["basics"],
    FaGithub:'https://github.com/Ahmed604shehata/Restaurant-Recipe-App',
    vercel: '',
  },
    {
    projectTitle: "React Template",
    imgPath: img6,
    category: ["react"],
    FaGithub:'',
    vercel: '',
  },
    {
    projectTitle: "Movies App",
    imgPath: img8,
    category: ["react"],
    FaGithub:'https://github.com/Ahmed604shehata/Movies-App',
    vercel: '',
  },
    {
    projectTitle: "My portfolio",
    imgPath: img9,
    category: ["react"],
    FaGithub:'https://github.com/Ahmed604shehata/Movies-App',
    vercel: '',
  },
  {
    projectTitle: "TODO APP",
    imgPath:img10,
    category: ["vue"],
    FaGithub:'https://github.com/Ahmed604shehata/Vue_toDoApp',
    vercel: 'https://vue-to-do-app-9m92-7yz6sw3bc-ahmeds-projects-17432d63.vercel.app/',
  },
  {
    projectTitle: "Get Away Resturant",
    imgPath: img11,
    category: ["vue"],
    FaGithub:'',
    vercel: '',
  },
  {
    projectTitle: "Responsive E-commerce",
    imgPath:img12,
    category: ["vue"],
    FaGithub:'https://github.com/Ahmed604shehata/vue_ella_e_commerce',
    vercel: '',
  },
  { 
    projectTitle:"Drag & Drop", 
    imgPath: img13,
    category: ["basics"],
    FaGithub:'https://github.com/Ahmed604shehata/managing-project',
    vercel: '',
  },
   {
    projectTitle:"Images Editor",
    imgPath:img14,
    category: ["basics"],
    FaGithub:'https://github.com/Ahmed604shehata/Editor-project',
    vercel: '',
  },
  {
    projectTitle: "Admiro Dashboard",
    imgPath:img15,
    category: ["vue"],
    FaGithub:'https://github.com/Ahmed604shehata/admiroProject',
    vercel: '',
  },
{
  projectTitle: "Hangman Game",
  imgPath: img16,
  category: ["basics"],
  FaGithub:'',
  vercel: 'https://react-e-commerce-9pdb-qx8mxu7mu-ahmeds-projects-17432d63.vercel.app/',
},
  {
    projectTitle: "Age Counter",
    imgPath: img17,
    category: ["basics"],
    FaGithub:'https://github.com/Ahmed604shehata/Age-Counter',
    vercel: '',
  },
  {
    projectTitle: "Curds System",
    imgPath: img18,
    category: ["basics"],
    FaGithub:'https://github.com/Ahmed604shehata/Curds-project',
    vercel: '',
  },
];

  const [currentActive, setcurrentActive] = useState<string>("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory: string) => {
    setcurrentActive(buttonCategory);


    const newArr = myProjects.filter((item: myProjects) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <>
    <main className='mx-auto lg:w-[80%]' id='projects'>
        <h1 className='Skills_header text-4xl text-center lg:w-[80%] mg:w-[100%] my-[100px] font-bold text-amber-300'>MyProjects</h1>
        <div className="skills_content contaier flex gap-6 lg:w-[100%] md:w-[90%] md:mx-5 mb-[300px] mx-auto w-[80%]">
           
            <div className="left_section w-[150px] flex items-start justify-start pb-3 flex-col ">
                <button onClick={() => {handleClick("basics");}} className={`${currentActive === "basics" ? "active" : null } my-3 text-center p-2 border-gray-500 hover:border-gray-500 border-2 rounded-xl w-[150px] cursor-pointer hover:bg-amber-300 ease-all decoration-50 text-gray-500 font-bold`}>Basics</button>
                <button onClick={() => {handleClick("vue");}} className={`${currentActive === "vue" ? "active" : null } my-3 text-center p-2 border-gray-500 border-2 hover:border-gray-500 rounded-xl w-[150px] cursor-pointer hover:bg-amber-300 ease-all decoration-50 text-gray-500 font-bold`}>Vue Frameeork</button>
                <button onClick={() => {handleClick("react");}} className={`${currentActive === "react" ? "active" : null } my-3 text-center p-2 border-gray-500 border-2 hover:border-gray-500 rounded-xl w-[150px] cursor-pointer hover:bg-amber-300 ease-all decoration-50 text-gray-500 font-bold`}>React Framework</button>
            </div>
            <div className="rihgt_section flex flex-wrap mx-auto gap-6 justify-center lg:w-[80%] md:w-[100%]">
  <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="  card overflow-hidden"
              >
                <img  src={item.imgPath} alt="" className='h-[180px] w-[270px]'/>
                <div  className="box h-[180px] w-[270px]">
                    <h1 className="title">{item.projectTitle}</h1>
                    <p className="sub-title text-gray-500 ">
                      Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                      tempore dolor in, accusantium laudantium accusamus.
                    </p>
                  <div className="flex icons">
                      <div style={{ gap: "11px" }} className="flex">
                        <div className="icon-link"></div>
                        <div className="icon-github"></div>
                      </div>
                  <div className="flex justify-between items-center w-100">
                      <div className="icon_sec flex gap-3">
                          <FaGithub/>
                          {/* <IoLogoVercel/> */}
                      </div>
                      <a className="link flex" href="https://github.com/Ahmed604shehata?tab=repositories" target='_balank'>
                        more
                        <span
                          style={{ alignSelf: "end" }}
                          className="icon-arrow-right"
                        >
                        </span>
                      </a>
                  </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
            </div>
        </div>
    </main>
    </>
  )
}

export default Skills;