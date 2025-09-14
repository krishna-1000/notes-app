import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GetAllUsers } from '../api/Authapi';

const Dashboard = () => {
    const [allusers, setAllUsers] = useState([]);
    useEffect(() => {
        const fetchNote = async () => {
            const res = await GetAllUsers()
            setAllUsers(res.data)

        }
        fetchNote();

    }, [])
    const navigate = useNavigate();


    return (
        <div className=' mt-4  flex flex-col gap-4 justify-center items-center'>
            <div className='border-b-2 border-gray-600 items-center flex justify-between w-full'>
                <h1>Dashboard</h1>
                <div className='flex gap-10'>
                    <button className='bg-green-400 rounded-sm w-20 align-middle' onClick={() => navigate("/login")}>Login</button>
                    <button className='bg-green-400 rounded-sm w-20 align-middle' onClick={() => navigate("/signup")}>Signup</button>
                </div>
            </div>
            <p className='text-2xl underline italic font-bold'>
                This is a Notes web app where you can manage your <br />
                <span className='text-green-500 flex justify-center border-2'>NOTES</span>
            </p>

            <ul className='self-start flex flex-col gap-4 h-[70vh] overflow-auto bg-gray-800'>


                {
                    allusers.map((item) => (

                        <li className='flex flex-col border-2  border-b-gray-400' key={item.id}>
                            <label>Id : {item.id}</label>
                          <label className='text-2xl italic'>  username : {item.username}</label>
                            <label>
                                password : {item.passwrod}
                            </label>
                            <label>Roll : {item.roll}</label>
                        </li>


                    ))
                } 
            </ul> 
                

        </div>
    )
}

export default Dashboard
