import api from './api'

export const createNote = (note) => api.post("/savenotes", {
    user_id: localStorage.getItem("userid"),
    content: note
}, {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
});

export const getAllNote = () => api.get(`/getnotes/${localStorage.getItem("userid")}`, {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
});