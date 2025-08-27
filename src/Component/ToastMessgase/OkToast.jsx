import React from 'react'

const OkToast = ({message,onOk}) => {
  return (
      <div className='bg-white p-2 flex flex-col gap-2 rounded shadow-lg '>
      <p className='text-2xl text-green-400'>{message}</p>
      <div className='flex justify-center'>
        <button onClick={
            ()=>{
                onOk();
            }
        } className='bg-green-500 text-white px-2 py-1 m-1 rounded'>Ok</button>
      </div>
    </div>
  )
}

export default OkToast
