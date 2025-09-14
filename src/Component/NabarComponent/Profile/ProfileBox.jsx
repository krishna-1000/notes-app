import React from 'react'
import { useProfile } from '../../../hooks/useProfile'
import { LogOut } from '../../../utils/LogOut';

const ProfileBox = () => {

    const {isProfileopen,setIsProfileOpen} = useProfile();
    if(!isProfileopen) return null
    return (
        <div className=" fixed inset-0 z-50 flex items-end justify-end overflow-auto">
            <div
                className="absolute inset-0 bg-transparent bg-opacity-1 "
            onClick={()=>setIsProfileOpen(false)}
            />
            <div className='flex flex-col relative border-2 border-white bg-black rounded-2xl shadow-lg w-[25vw] h-[92vh] mr-1 max-w-[90%]  z-10'>
                <header className='border-b-2 border-gray-400 h-1/4  flex flex-col items-center justify-center'>
                    <img className='rounded-3xl  bg-white h-15 w-15 ' src='public/img/vite.svg'></img>
                    <p>{localStorage.getItem("username")} <span className='text-2xl cursor-pointer'>+</span></p>
                    
                </header>

                <article className=' flex flex-col ml-2 gap-3 mt-2'>
                    <label className='hover:bg-gray-700'>Privacy setup</label>
                    <label className='hover:bg-gray-700'>Help about the notes app</label>
                    <label className='hover:bg-gray-700'>About the app</label>
                    <label className='hover:bg-gray-700'>Setting of this app</label>
                </article>
                <footer className='mt-auto mb-3 text-center'>
                    <button onClick={()=>LogOut()} className='bg-red-500 h-full w-full rounded-2xl'>Log Out</button>
                </footer>
            </div>
        </div>

    )
}

export default ProfileBox
