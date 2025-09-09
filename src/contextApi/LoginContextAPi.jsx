import React, { createContext, useState } from 'react'
import api from '../api/api';

export const LoginContext = createContext();
const LoginContextProvider = ({ children }) => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [resdata, setResData] = useState([]);


  const LoginUser = async () => {
    try {


      const res = await api.post(`/auth/login?username=${username}&password=${password}`);
      if (res.data.token != "") {
        setResData(res.data);
        localStorage.setItem("token", res.data.token);
        console.log(resdata);
        return true;
      }
      else{
        return false
      }



    } catch (e) {
      console.log(e)
    }
  }


  return (
    <LoginContext.Provider value={{ username, setUserName, password, setPassword, LoginUser, resdata }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider
