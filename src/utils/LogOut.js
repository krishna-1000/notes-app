import React from 'react'

export const LogOut = () => {
    localStorage.removeItem('token');
    window.location.href = '/'
}
