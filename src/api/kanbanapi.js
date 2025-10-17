import api from "./api";

export const deleteKanban =(id)=>{
   return api.get(`/getkanban/${id}`,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('token')}`
        }
    })
}