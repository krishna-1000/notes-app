import React from 'react'

const PrivateRoute = ({children}) => {

    const token = localStorage.getItem('token');
    return token ? children : window.location.href = '/'
  
}

export default PrivateRoute
