import { useState } from "react";
import ConfirmToast from "../Component/ToastMessgase/ConfirmToast";
import { toast } from "react-toastify";
import OkToast from "../Component/ToastMessgase/OkToast";

const useNote = () => {
    const [notes, setNotes] = useState("");

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
    return {notes, setNotes, handelDelete};

}
export default useNote;
