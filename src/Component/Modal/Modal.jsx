import React from "react";
import { useModal } from '../../hooks/useModal.jsx'

const Modal = () => {
    const { isOpen, content, closeModal } = useModal()
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            
            <div
                className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                onClick={closeModal}
            />

            <div className="relative z-10 w-full max-w-fit max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl">
                
                
                <button
                    onClick={closeModal}
                    className="absolute top-3 right-3 z-20 flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 text-sm transition-colors"
                >
                    ✕
                </button>

                <div className="w-full h-full">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Modal;