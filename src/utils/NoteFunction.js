import { toast } from "react-toastify"

const noteFunction = () => {
    const handelCopy = (text)=>{
        navigator.clipboard.writeText(text)
        toast.info("Copied to clipboard",{position:"bottom-center",autoClose:1000})
    
    }
    const handelShare = (text)=>{
        navigator.share({
            text:text,
            title:"Notepad",
           
        }).then(()=>{
            toast.info("Shared",{position:"bottom-center",autoClose:1000})
        }).catch((err)=>{
            toast.error("Error in sharing",{position:"bottom-center",autoClose:1000})
        })
    }

    return {handelCopy,handelShare};
}

export default noteFunction;