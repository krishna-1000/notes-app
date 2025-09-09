import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
export const NotesLocalStorage = () => {

    const NOTES_API = 'notes:v1';

    const loadNote = () => {
        try {
            const raw = localStorage.getItem(NOTES_API);
            if (!raw) return "";
            const parsed = JSON.parse(raw);
            return parsed;

        } catch (error) {
            return toast.info("There is error in Reading data")
        }
    }


    const saveNote = (notes) => {
        try {
            localStorage.setItem(NOTES_API, JSON.stringify(notes))
        } catch (error) {
            return toast.info("Error occured in Saving Note" + error)
        }
    }

    return { loadNote, saveNote };

}

