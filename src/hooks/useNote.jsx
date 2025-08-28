import { useContext } from "react";

import { NotesContext } from "../contextApi/notesContextApi";

const useNote = () => {
    const context = useContext(NotesContext);
    if(!context){
        throw new Error("this is wrong")
    }
    return context;

}
export default useNote;
