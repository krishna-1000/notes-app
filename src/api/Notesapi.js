import api from './api'

export const  createNote =(note)=>api.post("/savenotes",{id:1,content:note});
export const  getAllNote =()=>api.get("/getnotes/1");