import React from 'react'
import { IoClose } from "react-icons/io5";
const TImerbox = ({setIsopen,setDuration}) => {
    const handleOnclick=(time)=>{
        setIsopen(false);
        setDuration(time);
    }
    return (
        <div className='flex flex-col gap-1 text-black absolute top-15 left-80 w-[50%] h-50 bg-white rounded-2xl'>
            <div className='flex justify-between'>
                <p className='text-2xl border-b-1 border-gray-300 h-1/4 pl-4 pt-2'>Select Writing Duration </p>
                <button onClick={()=>setIsopen(false)} className='mr-7 text-2xl text-gray-300'><IoClose/></button>
            </div>
            <div className='flex justify-around items-center border-b-1 border-gray-300 h-1/2'>
                <button onClick={()=>handleOnclick(15)} className='bg-blue-400 pl-4 pr-4 pt-2 pb-2 rounded-3xl hover:bg-blue-500 cursor-pointer'>15 minutes</button>
                <button onClick={()=>handleOnclick(30)} className='bg-blue-400 pl-4 pr-4 pt-2 pb-2 rounded-3xl hover:bg-blue-500 cursor-pointer'>30 minutes</button>
                <button onClick={()=>handleOnclick(45)} className='bg-blue-400 pl-4 pr-4 pt-2 pb-2 rounded-3xl hover:bg-blue-500 cursor-pointer'>45 minutes</button>
                <button onClick={()=>handleOnclick(60)} className='bg-blue-400 pl-4 pr-4 pt-2 pb-2 rounded-3xl hover:bg-blue-500 cursor-pointer'>60 minutes</button>
            </div>
            <p className='text-center'><span><input type='checkbox'></input></span> play a charm music </p>
        </div>
    )
}

export default TImerbox
