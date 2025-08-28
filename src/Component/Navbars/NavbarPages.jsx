import React from 'react'


import { BsWindowStack } from "react-icons/bs";
import { MdOutlineKeyboard } from "react-icons/md";

import { Link } from 'react-router-dom';
const NavbarPages = ({path}) => {
  return (
     <div  className='bg-[#26313f] h-auto flex justify-between items-center  '>
            <div className='flex flex-col gap-1 ml-15    text-white h-full w-1/2'>
                <Link to={"/"}><h1 className='text-cyan-400 drop-shadow-cyan-300 font-extrabold cursor-pointer'>Notepad</h1></Link>
                <h2>Notepad {path}</h2>
            </div>
            <div className='flex justify-end gap-4 pr-4 items-center h-full w-1/2 mr-8  text-white'>
                <span className='text-2xl font-extrabold'><BsWindowStack />
                </span>
                <span className='text-2xl font-extrabold'><MdOutlineKeyboard />
                </span>
               
               <Link to={"/about"}> <span className='text-gray-400 font-serif cursor-pointer hover:text-gray-200'>About</span></Link>
            </div>
        </div>
  )
}

export default NavbarPages
