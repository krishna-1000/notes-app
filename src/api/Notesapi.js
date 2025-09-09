import api from './api'

export const createNote = (note) => api.post("/savenotes", { id: 1, content: note }, {
    headers: {
        'Authorization':`Bearer ${localStorage.getItem("token")}` 
    }
});
export const getAllNote = () => api.get("/getnotes/1",{
    headers:{
        'Authorization':`Bearer ${localStorage.getItem("token")}`
    }
});