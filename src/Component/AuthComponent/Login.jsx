import React, { useContext, useState } from 'react'
import axios from 'axios';
import { LoginContext } from '../../contextApi/LoginContextAPi';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../hooks/useModal'
import {toast} from 'react-toastify'


const Login = () => {
    const navigate = useNavigate();
    const { closeModal} = useModal();
    const { username, setUserName, password, setPassword, LoginUser } = useContext(LoginContext);

    return (
        <div className='text-black gap-20 w-[60vh] h-[70vh] flex flex-col'>

            <h1 className='text-3xl text-green-500 self-center'>Login</h1>
            <div className='flex flex-col gap-3'>
                <label>Username</label>
                <input value={username} onChange={(e) => setUserName(e.target.value)} className='outline-none border-b-2 border-b-gray-500' type='text' placeholder='Enter username'></input>
                <label>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className='outline-none border-b-2 border-b-gray-500' type='password' placeholder='Enter password'></input>
            </div>
            <footer className='flex justify-center'>
                <button onClick={async () => {
                    const res = await LoginUser()
                    if (res) {

                        navigate('/home')
                        closeModal();
                        
                    }
                    else{
                        toast.info("Cradiantial wrong")
                    }
                }} className='bg-green-400 rounded-md pl-3 pr-3'>Login</button>
            </footer>
        </div>
    )
}

export default Login
