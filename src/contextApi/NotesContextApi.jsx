import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import ConfirmToast from '../Component/ToastMessgase/ConfirmToast';
import { createNote, getAllNote } from '../api/Notesapi';
import { NotesLocalStorage } from '../Service/NotesLocalStorage';

export const NotesContext = createContext();
export const NotesProvider = ({ children }) => {

  const {loadNote,saveNote} = NotesLocalStorage();

  const [notes, setNotes] = useState("");


  useEffect(() => {

    const fetchNotes = async () => {
      try {
        const res = await getAllNote();
        const localNote = loadNote();
        const dbNote = res.data;
        if(localNote.length > dbNote.length){
          setNotes(localNote)
        }
        else{
          setNotes(res.data);

        }
      } catch (error) {
        setNotes(loadNote())
        console.log("not found anything");
      }
    }
    fetchNotes();
  }, [])


  useEffect( () => {
    if(notes.length == 0) return;

    saveNote(notes);
    const timeout = setTimeout( async ()=>{
      try{
       await createNote(notes)
       toast.info("Auto Saved",{
        position:"bottom-center",
        autoClose:400
       })
      }catch(error){
        console.log(localStorage.getItem("token"));
        console.log("eroror occured in save"+error);
      }
    },1000)
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

