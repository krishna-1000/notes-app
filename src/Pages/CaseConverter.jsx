import React, { useState } from 'react'

const CaseConverter = () => {
    const [text, setText] = useState("");
    const [Textcase, setTextCase] = useState("default");

    const handelConvert = () => {
        switch (Textcase) {
            case "lowercase":
                if (text != null && text != undefined) {
                    let newText = text.toLowerCase();
                    setText(newText)
                }
                break;
            case "UPPERCASE":
                if (text != null && text != undefined) {
                     let newText = text?.toUpperCase();
                    setText(newText)
                }
                break;
            case "formate":
               if (text) {
                let newText = text.replace(/\s+/g, ' ').trim(); 
                setText(newText);
            }
                break;
            default:
                break;
        }
    }
    return (
        <div className='bg-gray-900 w-[100vw] h-[90vh] flex items-center justify-center'>

            <div className=' border-white w-200 h-120 flex flex-col gap-2 '>
                <div className='bg-pink-500 flex '>
                    <select value={Textcase} onChange={(e) => setTextCase(e.target.value)} className='w-full bg-black'>
                        <option>lowercase</option>
                        <option>UPPERCASE</option>
                        <option>formate</option>
                    </select>
                    <button onClick={() => handelConvert()}>Convert</button>
                </div>
                <div>
                    <textarea value={text} onChange={(e) => setText(e.target.value)} className='w-full h-120 bg-white text-black'></textarea>
                </div>
            </div>
        </div>
    )
}

export default CaseConverter
