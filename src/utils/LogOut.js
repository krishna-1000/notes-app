import React from 'react'
import {toast} from "react-toastify"
export const LogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    toast.info("LogOut successfully",{position:"top-center",autoClose:1000})
    window.location.href = '/'
}
