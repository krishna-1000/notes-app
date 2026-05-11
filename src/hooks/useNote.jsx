import { useContext } from "react";

import { NotesContext } from "../contextApi/NotesContextApi";

const useNote = () => {
    const context = useContext(NotesContext);
    if(!context){
        throw new Error("this is wrong")
    }
    return context;

}
export default useNote;
