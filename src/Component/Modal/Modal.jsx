import React from "react";
import {useModal} from '../../hooks/useModal.jsx'

const Modal = () => {
    const {isOpen,content,closeModal} = useModal()
    if (!isOpen) return null; 

    return (
        <div className=" fixed inset-0 z-50 flex items-center justify-center overflow-auto">
            <div
                className="absolute inset-0 bg-transparent bg-opacity-1 backdrop-blur-sm"
                onClick={closeModal}
            />

            <div className="relative bg-white rounded-2xl shadow-lg w-fit h-fit max-w-[90%] p-6 z-10">
                <button
                    onClick={closeModal}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg"
                >
                    ✕
                </button>

                
                <div>{content}</div>
            </div>
        </div>
    );
};

export default Modal;
