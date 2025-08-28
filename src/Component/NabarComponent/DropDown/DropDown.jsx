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
        <div className='absolute flex hover:cursor-pointer flex-col gap-1 top-10 left-37 w-45 rounded-sm h-65 pt-4 bg-[#26313f] border border-gray-400 shadow-lg z-10'>
            <Link to={'/rich-text-editor'}> <div className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                <span><LuLetterText /></span>
               <p className='font-sans text-sm' onClick={()=>toast.info("yes")}>Rich Text Editor</p>
            </div>
            </Link>
            <Link to={'/markdown-editor'}>
            <div className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                <span><RiMarkdownLine />
                </span>
                <p className='font-sans text-sm'>Markdown Editor</p>
            </div>
            </Link>
            <div className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                <span><IoTimer />
                </span>
                <p className='font-sans text-sm'>Pomodoro Timer</p>
            </div>
            <div className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                <span><IoMicOutline />
                </span>
                <p className='font-sans text-sm'>Voice Notes</p>
            </div>
            <div className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                <span><RiKanbanView2 />
                </span>
                <p className='font-sans text-sm'>Simple Kanban</p>
            </div>
            <div className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                <span><BsCashCoin />
                </span>
                <p className='font-sans text-sm'>Case Converter</p>
            </div>
            <div className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                <span><IoKeypadOutline />
                </span>
                <p className='font-sans text-sm'>Tabbypad</p>
            </div>
            <div className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                <span><LiaDiagnosesSolid />
                </span>
                <p className='font-sans text-sm'>Deep Breath</p>
            </div>
            <div className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                <span><CiPen />
                </span>
                <p className='font-sans text-sm '>Drawingpad</p>
            </div>
            <div className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                <span><CgGoogleTasks />
                </span>
                <p className='font-sans text-sm'>Tasks</p>
            </div>


        </div>
    )
}

export default DropDown
