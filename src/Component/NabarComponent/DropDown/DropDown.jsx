import React from 'react'
import { LuLetterText } from "react-icons/lu";
import { RiMarkdownLine } from "react-icons/ri";
import { IoTimer } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";
import { RiKanbanView2 } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { IoKeypadOutline } from "react-icons/io5";
import { CiPen } from "react-icons/ci";
import { CgGoogleTasks } from "react-icons/cg";

import { LiaDiagnosesSolid } from "react-icons/lia";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';




const DropDown = () => {
    return (
        <div className='z-50 pb-4 h-fit absolute flex hover:cursor-pointer flex-col gap-1 top-10 left-37 w-45 rounded-sm  pt-4 bg-[#26313f] border border-gray-400 shadow-lg '>
                     
            <Link to={"/voice-notes"}>
                <div className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                    <span><IoMicOutline />
                    </span>
                    <p className='font-sans text-sm'>Voice Notes</p>
                </div>
            </Link>
            <Link to={'/simple-kanban'}>
                <div className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                    <span><RiKanbanView2 />
                    </span>
                    <p className='font-sans text-sm'>Simple Kanban</p>
                </div>
            </Link>

            <Link to={'/case-converter'}>
                <div className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                    <span><BsCashCoin />
                    </span>
                    <p className='font-sans text-sm'>Case Converter</p>
                </div>
            </Link>
            
          


        </div>
    )
}

export default DropDown
