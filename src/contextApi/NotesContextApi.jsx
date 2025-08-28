import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';
import ConfirmToast from '../Component/ToastMessgase/ConfirmToast';

export const NotesContext = createContext();
export const NotesProvider = ({children}) => {

    const [notes, setNotes] = useState("");

    const addNote =(text)=>{
        setNotes(text);
    }
    const handelDelete = () => {
        toast((props) => {
            return <ConfirmToast {...props} message={"Do you want to delete?"}
                onCancel={() => toast.dismiss()}
                onConfirm={() => {
                    setNotes("")
                    toast.dismiss();
                   toast.info("Note Deleted", {position: "bottom-center", autoClose: 1000, closeOnClick: true})
                }}
                closeToast={()=>toast.dismiss()} />
        }, {
            position: "top-center",
            autoclose: false,
            closeOnClick: false,
        })
    }
  return (
    <NotesContext.Provider value={{notes,addNote,handelDelete}}>
      {children}
    </NotesContext.Provider>
  )
}

