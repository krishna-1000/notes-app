import React from 'react'


import { BsWindowStack } from "react-icons/bs";
import { MdOutlineKeyboard } from "react-icons/md";

import { Link } from 'react-router-dom';
const NavbarPages = ({path}) => {
  return (
     <div  className='bg-[#26313f] h-auto flex justify-between items-center  '>
            <div className='flex  gap-1 ml-15    text-white h-10 items-center text-lg w-1/2'>
              <Link to={'/'}> <h2 className='font-bold'>Notepad </h2></Link><span>{path}</span>
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
