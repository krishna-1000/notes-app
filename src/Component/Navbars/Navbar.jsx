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
import { useModal } from '../../hooks/useModal.jsx'
import { useProfile } from '../../hooks/useProfile.jsx';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isProfileopen, setIsProfileOpen } = useProfile();

    const { notes, handelDeleteNotes } = useNote();
    const { handelCopy, handelShare } = noteFunction();
    const [DownloadisOpen, setDownloadIsOpen] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const { goFullScreen, exitFullScreen } = useFullScreen();
    const { openModal } = useModal()
    const handlePopup = () => {
        if (isOpen) {

            setIsOpen(false);
        }
        else if (DownloadisOpen) {
            setDownloadIsOpen(false);
        }

    }
    return (
       <div onClick={handlePopup} className='bg-[#26313f] h-11 w-full flex justify-between items-center'>
    
    <div className='flex gap-2 items-center px-2 text-white h-full min-w-0 flex-1'>
        <Link to="/">
            <h1 className='text-cyan-400 font-extrabold cursor-pointer text-sm sm:text-base whitespace-nowrap'>Notepad</h1>
        </Link>

        <span
            className='text-2xl cursor-pointer hover:text-cyan-400 shrink-0'
            onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
        >
            <IoIosArrowDown />
        </span>
        {isOpen && <DropDown />}

        <span
            className='text-2xl cursor-pointer hover:text-cyan-400 shrink-0'
            onClick={(e) => { e.stopPropagation(); setDownloadIsOpen(!DownloadisOpen); }}
        >
            <IoDownloadOutline />
        </span>
        {DownloadisOpen && <DownloadDropDown />}

        <div className='hidden md:flex gap-4 items-center'>
            <span className='text-2xl cursor-pointer hover:text-cyan-400 shrink-0' onClick={handelDeleteNotes}><RiDeleteBinLine /></span>
            <span className='text-2xl cursor-pointer hover:text-cyan-400 shrink-0' onClick={() => handelCopy(notes)}><MdOutlineFileCopy /></span>
            <span className='text-2xl cursor-pointer hover:text-cyan-400 shrink-0' onClick={() => openModal(<Settingbox />)}><CiSettings /></span>
            <span className='text-2xl cursor-pointer hover:text-cyan-400 shrink-0' onClick={() => openModal(<TImerbox />)}><TfiTimer /></span>
            <span className='text-2xl cursor-pointer hover:text-cyan-400 shrink-0' onClick={() => handelShare(notes)}><CiShare2 /></span>
        </div>
    </div>

    <div className='flex items-center gap-2 px-2 text-white shrink-0'>
        {isFullScreen ? (
            <span className='text-2xl cursor-pointer hover:text-cyan-400 shrink-0' onClick={() => { exitFullScreen(); setIsFullScreen(false); }}>
                <AiOutlineFullscreenExit />
            </span>
        ) : (
            <span className='text-2xl cursor-pointer hover:text-cyan-400 shrink-0' onClick={() => { goFullScreen(); setIsFullScreen(true); }}>
                <AiOutlineFullscreen />
            </span>
        )}
    </div>
</div>
    )
}

export default Navbar
