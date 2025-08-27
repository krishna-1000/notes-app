import React from 'react'
import useCountDown from '../../hooks/useCountDown';

const Notes = ({ notes, setNotes,duration,setDuration }) => {
  const {minutes,seconds} = useCountDown(duration);
  return (
    <div className='border-l-1 border-r-1 border-gray-500 ml-15 mr-15 h-full'>
      <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder='Write your notes here...' className='w-[90vw] p-2 h-[90vh] text-xl overflow-auto scrollbar   outline-none mt-2 resize-none'>
      </textarea>
      <label className='bg-pink-400 absolute bottom-5 right-25 min-w-35 w-auto h-7 rounded-2xl text-xs flex justify-center items-center'>{notes.length} character</label>
      {duration > 0 &&
        <div className=' bg-pink-400 absolute bottom-5 right-65 w-20  h-7 rounded-2xl text-xs flex justify-between items-center'>
          <label className='ml-4'>{minutes}:{(seconds != 0)?seconds:"0"+seconds}</label>
          <button onClick={()=>setDuration(0)} className='w-3 flex justify-center items-center hover:cursor-pointer mr-4 h-3 rounded-4xl border-1 border-black text-sm text-black'>x</button>
        </div>
      }

    </div>
  )
}

export default Notes
87