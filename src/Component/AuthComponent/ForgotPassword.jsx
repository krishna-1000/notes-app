import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../hooks/useModal'
import { toast } from 'react-toastify'
import { ForgotPassword } from '../../api/Authapi';


const ForgotPasswordUser = () => {
    const navigate = useNavigate();
    
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [resdata, setResData] = useState([]);


    const onClickForgotPassword = async (e) => {
        e.preventDefault();
        try {
            const res =  await ForgotPassword(username, password);
           console.log(res.data)

        } catch (e) {
            if (e.code == "ERR_BAD_REQUEST") {

                toast.info("Cradiantial wrong", { autoClose: 1000 })
            }
            else {
                toast.info(e.message)
            }

        }
    }

    return (
        <form onSubmit={(e) => onClickForgotPassword(e)}>
            <div className='text-black relative top-25 left-1/3 rounded-2xl bg-white gap-10 w-[60vh] h-[70vh] flex flex-col'>

                <div onClick={()=>window.history.back()} className='flex mr-3 cursor-pointer justify-end'>back</div>
                <h1 className='text-3xl  text-cyan-500 self-center'>ForgotPassword</h1>



                <div className='flex flex-col gap-3'>
                    <label>Old Username</label>
                    <input required
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        className='outline-none border-b-2 border-b-gray-500'
                        type='text'
                        placeholder='Enter username'>
                    </input>
                    <label>New Password</label>
                    <input required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='outline-none border-b-2 border-b-gray-500'
                        type='password'
                        placeholder='Enter password'></input>
                </div>
                <footer className='flex flex-col justify-center'>
                    <button type='submit' className='bg-yellow-400 rounded-md pl-3 pr-3'>ForgotPassword</button>
                </footer>

            </div>
        </form>
    )
}

export default ForgotPasswordUser
