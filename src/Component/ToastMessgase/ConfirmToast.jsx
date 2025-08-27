import React from 'react'

const ConfirmToast = ({message,onConfirm,onCancel,closeToast}) => {
  return (
    <div className='bg-white p-2 flex flex-col gap-2 rounded shadow-lg '>
      <p className='text-2xl text-black'>{message}</p>
      <div className='flex justify-center'>
        <button onClick={
            ()=>{
                onConfirm(); 
            }
        } className='bg-green-500 text-white px-2 py-1 m-1 rounded'>Ok</button>
        <button onClick={
            ()=>{
                onCancel();
                closeToast();
            }
        }
         className='bg-red-500 text-black px-2 py-1 m-1 rounded'>Cancel</button>
      </div>
    </div>
  )
}

export default ConfirmToast
