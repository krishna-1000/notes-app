import React from 'react'
import { LuLetterText } from "react-icons/lu";
import { RiDeleteBinLine, RiMarkdownLine } from "react-icons/ri";
import { IoDownloadOutline, IoTimer } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";
import { RiKanbanView2 } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { IoKeypadOutline } from "react-icons/io5";
import { CiPen, CiSettings, CiShare2 } from "react-icons/ci";
import { CgGoogleTasks } from "react-icons/cg";

import { LiaDiagnosesSolid } from "react-icons/lia";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import useNote from '../../../hooks/useNote';
import noteFunction from '../../../utils/NoteFunction';
import { MdOutlineFileCopy } from 'react-icons/md';
import { TfiTimer } from 'react-icons/tfi';
import Settingbox from '../Setting/Settingbox';
import { useModal } from '../../../hooks/useModal';
import TImerbox from '../TimerBox/TImerbox';




const DropDown = () => {
    const { notes, handelDeleteNotes } = useNote();
    const { handelCopy, handelShare } = noteFunction();
    const {openModal} = useModal()


    return (
        <div className='z-50 pb-4 h-fit absolute flex hover:cursor-pointer flex-col gap-1 top-10 md:left-37 md:w-45 left-10 w-30 rounded-sm  pt-4 bg-[#26313f] border border-gray-400 shadow-lg '>

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

            <div className='md:hidden visible'>


                <div onClick={handelDeleteNotes} className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                    <span><RiDeleteBinLine />
                    </span>
                    <p className='font-sans text-sm'>Delete Note</p>
                </div>


                <div onClick={()=>handelShare(notes)} className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                    <span><CiShare2 />
                    </span>
                    <p className='font-sans text-sm'>Share</p>
                </div>


                <div onClick={()=>handelCopy(notes)} className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                    <span><MdOutlineFileCopy />
                    </span>
                    <p className='font-sans text-sm'>Copy Notes</p>
                </div>

                <div onClick={() => openModal(<TImerbox/>)} className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                    <span><TfiTimer />
                    </span>
                    <p className='font-sans text-sm'>Timer</p>
                </div>
                <div onClick={()=>openModal(<Settingbox/>)} className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                    <span><CiSettings />
                    </span>
                    <p className='font-sans text-sm'>Setting</p>
                </div>





            </div>




        </div>
    )
}

export default DropDown
