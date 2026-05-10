import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import ConfirmToast from '../Component/ToastMessgase/ConfirmToast';
 import { NotesLocalStorage } from '../Service/NotesLocalStorage';

export const NotesContext = createContext();
export const NotesProvider = ({ children }) => {

   const { loadNote, saveNote } = NotesLocalStorage();

  const [notes, setNotes] = useState("");


  useEffect(() => {


    const fetchNotes = async () => {

      try {

        const localNote = loadNote();
        setNotes(localNote);

      } catch (error) {
        setNotes("No notes found")
        console.log("not found anything");
      }
    }
    fetchNotes();
  }, [])


  useEffect(() => {

    const timeout = setTimeout(async () => {
      try {
        
        saveNote(notes);
        toast.info(" Saved", {
          position: "bottom-center",
          autoClose: 400
        })
      } catch (error) {
        console.log("eroror occured in save" + error);
      }
    }, 1000)
    return () => clearTimeout(timeout);
  }, [notes])

  const addNote = (text) => {
    setNotes(text);
  }
  const handelDelete = () => {
    toast((props) => {
      return <ConfirmToast {...props} message={"Do you want to delete?"}
        onCancel={() => toast.dismiss()}
        onConfirm={() => {
          setNotes("")
          toast.dismiss();
          toast.info("Note Deleted", { position: "bottom-center", autoClose: 1000, closeOnClick: true })
        }}
        closeToast={() => toast.dismiss()} />
    }, {
      position: "top-center",
      autoclose: false,
      closeOnClick: false,
    })
  }
  return (
    <NotesContext.Provider value={{ notes, addNote, handelDelete }}>
      {children}
    </NotesContext.Provider>
  )
}

