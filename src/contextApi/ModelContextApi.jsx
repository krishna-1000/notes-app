import React, { createContext, useState } from 'react'

export const ModelContext = createContext();


const ModelProvider = ({children}) => {
    const [isOpen , setIsOpen] = useState(false);
    const [content,setContent] = useState(null);

    const openModal = (Content)=>{
        setIsOpen(true);
        setContent(Content);
    }
    const closeModal = ()=>{
        setIsOpen(false);
        setContent(null);
    }

   
  return (
    <ModelContext.Provider value={{isOpen,content,openModal,closeModal}}>
        {children}
    </ModelContext.Provider>
  )
}


export default ModelProvider
