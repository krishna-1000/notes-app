import api from "./api"


export const LoginUser = (username,password)=>{
   return api.post(`/auth/login?username=${username}&password=${password}`)
   
}
export const SignUpUser = (username,password)=>{
   return api.post(`/auth/signup?username=${username}&password=${password}`)
   
}
export const GetAllUsers = ()=>{
   return api.get(`/auth/getallusers`)
   
}
export const ForgotPassword = (username,newpassword)=>{
   return api.post(`/auth/forgot-password?username=${username}&newpassword=${newpassword}`)
   
}