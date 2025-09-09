import api from "./api"


export const LoginUser = (username,password)=>{
   return api.post(`/auth/login?username=${username}&password=${password}`)
   
}