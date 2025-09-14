import React, { useContext, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoDownloadOutline } from "react-icons/io5";
import { MdOutlineFileCopy } from "react-icons/md";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { TfiTimer } from "react-icons/tfi";
import { CiShare2 } from "react-icons/ci";
import { BsWindowStack } from "react-icons/bs";
import { MdOutlineKeyboard } from "react-icons/md";
import { AiOutlineFullscreen } from "react-icons/ai";
import { AiOutlineFullscreenExit } from "react-icons/ai";

import { CiSettings } from "react-icons/ci";
import DropDown from '../NabarComponent/DropDown/DropDown';
import DownloadDropDown from '../NabarComponent/DownloadDropDown/DownloadDropDown';
import TImerbox from '../NabarComponent/TimerBox/TImerbox';
import useFullScreen from '../../hooks/useFullScreen';
import { Link } from 'react-router-dom';
import useNote from '../../hooks/useNote';
import noteFunction from '../../utils/NoteFunction';
import Settingbox from '../NabarComponent/Setting/Settingbox';
import {useModal} from '../../hooks/useModal.jsx'
import { useProfile } from '../../hooks/useProfile.jsx';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  const {isProfileopen,setIsProfileOpen} = useProfile();
    
    const {notes,handelDelete} = useNote();
    const {handelCopy,handelShare} = noteFunction();
    const [DownloadisOpen, setDownloadIsOpen] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const { goFullScreen, exitFullScreen } = useFullScreen();
    const {openModal} = useModal()
    const handlePopup = () => {
        if (isOpen) {

            setIsOpen(false);
        }
        else if (DownloadisOpen) {
            setDownloadIsOpen(false);
        }

    }
    return (
        <div onClick={() => handlePopup()} className='bg-[#26313f] h-11 flex justify-between items-center  '>
            <div className='flex gap-4 items-center ml-15    text-white h-full w-1/2'>
                <Link to={"/home"}><h1 className='text-cyan-400 drop-shadow-cyan-300 font-extrabold cursor-pointer'>Notepad</h1></Link>
                <span className='text-2xl font-extrabold' onClick={() => setIsOpen(!isOpen)}><IoIosArrowDown />
                </span>
                {isOpen && <DropDown />}
                <span className='text-2xl font-extrabold' onClick={handelDelete}><RiDeleteBinLine />
                </span>
                <span className='text-2xl font-extrabold' onClick={() => setDownloadIsOpen(!DownloadisOpen)}><IoDownloadOutline />
                </span>
                {DownloadisOpen && <DownloadDropDown/>}
                <span className='text-2xl font-extrabold' onClick={()=>handelCopy(notes)}><MdOutlineFileCopy />
                </span>
                <span className='text-2xl font-extrabold' onClick={()=>openModal(<Settingbox/>)} ><CiSettings />
                </span>
                <span className='text-2xl font-extrabold'><IoMusicalNoteOutline />
                </span>
                <span className='text-2xl font-extrabold' onClick={() => openModal(<TImerbox/>)}><TfiTimer />
                </span>
                <span className='text-2xl font-extrabold' onClick={()=>handelShare(notes)} ><CiShare2 />
                </span>
            </div>
            <div className='flex justify-end gap-4 pr-4 items-center h-full w-1/2 mr-8  text-white'>
                <span className='text-2xl font-extrabold'><BsWindowStack />
                </span>
                <span className='text-2xl font-extrabold'><MdOutlineKeyboard />
                </span>
                {isFullScreen ?
                    <span className='text-2xl font-extrabold'
                        onClick={()=>{
                            exitFullScreen()
                            setIsFullScreen(false)
                            }}><AiOutlineFullscreenExit />
                    </span>:<span className='text-2xl font-extrabold'
                        onClick={()=>{
                            goFullScreen()
                            setIsFullScreen(true)
                            }}><AiOutlineFullscreen />
                    </span>
                }
               <Link to={"/about"}> <span className='text-gray-400 font-serif cursor-pointer hover:text-gray-200'>About</span></Link>
               <img onClick={()=>setIsProfileOpen(true)} className='bg-white rounded-2xl bg-repeat' src='public/img/vite.svg'></img>
            </div>
        </div>
    )
}

export default Navbar
