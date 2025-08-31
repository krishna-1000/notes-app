import React, { useRef, useState } from 'react'
import { IoClose } from "react-icons/io5";
import useCountDown from '../../../hooks/useCountDown';
import { useModal } from '../../../hooks/useModal';
const TImerbox = () => {
    const { setDuration, setSoundCheckbox } = useCountDown();
    const {closeModal} = useModal()
    const [checkbox, setCheckbox] = useState(false);
    const handleOnCheck = (e) => {
        setCheckbox(e.target.checked);
    }
    const handleOnclick = (time) => {
        setDuration(time);
        setSoundCheckbox(checkbox)
        closeModal();
    }
    return (
        <div className='flex flex-col gap-1 text-black w-[40vw] h-[50vh] bg-white rounded-2xl'>
            <div className='flex justify-between'>
                <p className='text-2xl border-b-1 border-gray-300 h-1/4 pl-4 pt-2'>Select Writing Duration </p>
            </div>
            <div className='flex justify-around items-center border-b-1 border-gray-300 h-1/2'>
                <button onClick={() => handleOnclick(15)} className='bg-blue-400 pl-4 pr-4 pt-2 pb-2 rounded-3xl hover:bg-blue-500 cursor-pointer'>15 minutes</button>
                <button onClick={() => handleOnclick(30)} className='bg-blue-400 pl-4 pr-4 pt-2 pb-2 rounded-3xl hover:bg-blue-500 cursor-pointer'>30 minutes</button>
                <button onClick={() => handleOnclick(45)} className='bg-blue-400 pl-4 pr-4 pt-2 pb-2 rounded-3xl hover:bg-blue-500 cursor-pointer'>45 minutes</button>
                <button onClick={() => handleOnclick(60)} className='bg-blue-400 pl-4 pr-4 pt-2 pb-2 rounded-3xl hover:bg-blue-500 cursor-pointer'>60 minutes</button>
            </div>
            <p className='text-center'><span><input onChange={(e) => handleOnCheck(e)} type='checkbox'></input></span> play a charm music </p>
        </div>
    )
}

export default TImerbox
