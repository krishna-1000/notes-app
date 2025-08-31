import React from 'react'
import { LuLetterText } from "react-icons/lu";
import { RiMarkdownLine } from "react-icons/ri";
import { IoTimer } from "react-icons/io5";
import {downloadPlainText,downloadPDF} from '../../../utils/DownloadNotes';
import useNote from '../../../hooks/useNote';
const DownloadDropDown = () => {
    const {notes} = useNote();
  return (
            <div className='absolute flex hover:cursor-pointer flex-col gap-1 top-10 left-56 w-45 rounded-sm h-30 pt-4 bg-[#26313f] border border-gray-400 shadow-lg z-10'>
                <div className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                    <p className='font-sans text-sm' onClick={()=>downloadPlainText(notes)}>Download as plain text</p>
                </div>
                <div className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                    
                    <p className='font-sans text-sm'>Download as Html</p>
                </div>
                <div className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                    
                    <p className='font-sans text-sm' onClick={()=>downloadPDF(notes)}>Download as Pdf</p>
                </div>
                <div className='flex gap-2 items-center ml-4 hover:bg-[#38485e] cursor-pointer'>
                  
                    <p className='font-sans text-sm'>Download as DOCS</p>
                </div>
               
    
    
            </div>
  )
}

export default DownloadDropDown
