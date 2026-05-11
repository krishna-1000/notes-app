import React, { useContext } from 'react'
import { NotesContext } from '../../contextApi/NotesContextApi';
import useCountDown from '../../hooks/useCountDown';
import useNote from '../../hooks/useNote';
import { useSetting } from '../../hooks/useSetting';

const Notes = () => {

  const { notes, addNote } = useNote();
  const {spellCheck,tabIndentation, lineHeight, WritingDirection, fontSize, fontStyle, countWord } = useSetting();
  const { duration, setDuration, timerCountDown, setSoundCheckbox } = useCountDown();
  const { minutes, seconds } = timerCountDown(duration);

  const handleKeyDown = (e) => {
    if (e.key == "Tab") {
      e.preventDefault();
      const { selectionStart, selectionEnd } = e.target;
      const newValue = notes.substring(0, selectionStart) + '\t' + notes.substring(selectionEnd);
      addNote(newValue);
       
    }
  }
  return (
    <div className='border-l-1 border-r-1 border-gray-500 md:ml-15 md:mr-15 ml-2 mr-2 h-full'>
      <textarea spellCheck={spellCheck} onKeyDown={tabIndentation?(e) => handleKeyDown(e):null} dir={WritingDirection == "Left to Write" ? "ltr" : 'rtl'} style={
        {
          fontSize: `${fontSize}px`,
          fontStyle: fontStyle.fontstyle,
          fontWeight: fontStyle.fontbold,
          textDecoration: fontStyle.fontunderline,
          lineHeight: `${lineHeight}px`
        }

      } value={notes} onChange={(e) => { addNote(e.target.value) }} placeholder='Write your notes here...' className='w-[90vw] p-2 h-[90vh]  overflow-auto scrollbar   outline-none mt-2 resize-none'>
      </textarea>
      {countWord &&
        <label className='bg-pink-400   absolute bottom-2 right-15 md:bottom-5 md:right-25 min-w-20 w-auto h-7 rounded-2xl text-xs flex justify-center items-center'>{notes.length} character</label>
      }
      {duration > 0 &&
        <div className=' bg-pink-400 absolute bottom-10 right-15 md:bottom-5 md:right-65 w-20  h-7 rounded-2xl text-xs flex justify-between items-center'>
          <label className='ml-4'>{minutes}:{(seconds != 0) ? seconds : "0" + seconds}</label>
          <button onClick={() => {
            setDuration(0)
            setSoundCheckbox(false)
          }} className='w-3 flex justify-center items-center hover:cursor-pointer mr-4 h-3 rounded-4xl border-1 border-black text-sm text-black'>x</button>
        </div>
      }


    </div>
  )
}

export default Notes
