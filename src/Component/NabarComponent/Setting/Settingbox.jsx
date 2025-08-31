import React, { useContext } from 'react'
import { useSetting } from '../../../hooks/useSetting'
import { SettingContext } from '../../../contextApi/SettingContextApi';
import { useModal } from '../../../hooks/useModal.jsx'
const Settingbox = () => {
  const lineHeightArr = [18, 20, 25, 26, 27, 30, 35, 40, 45, 60, 50];
  const { spellCheck, setSpellCheck, tabIndentation, setTabIndentation, lineHeight, setLineHeight, WritingDirection, setWritingDirection, countWord, setCountWord, ResetPreferences, setTheme, fontSize, setFontSize, fontStyle, setFontStyle } = useSetting();
  const { closeModal } = useModal();
  const handleFontStyleChange = (e) => {
    switch (e.target.value) {
      case 'bold':
        setFontStyle(prev => ({ ...prev, fontbold: 'bold' }))
        break;
      case 'normal':
        setFontStyle(prev => ({ fontbold: 'normal', fontstyle: 'normal', fontunderline: 'none' }))
        break;
      case 'italic':
        setFontStyle(prev => ({ ...prev, fontstyle: 'italic' }))
        break;
      case 'underline':
        setFontStyle(prev => ({ ...prev, fontunderline: 'underline' }))
    }
  }

  return (
    <div className='flex flex-col  min-h-[80vh] h-fit w-[45vw] bg-white text-black rounded-md'>
      <header className='border-b-1 border-gray-300 pb-6'>
        <h1 className='text-2xl font-bold'>Preferences</h1>
      </header>
      <article className='flex flex-col gap-3 mt-3'>
        <div className='flex justify-between'>
          <label>Theme</label>
          <div className=' bg-gray-300 flex gap-5  w-fit mr-37 justify-start rounded-md p-2'>
            <button className='hover:bg-white  rounded-md'>Device</button>
            <button onClick={() => setTheme(false)} className='hover:bg-white rounded-md'>Dark</button>
            <button onClick={() => setTheme(true)} className='hover:bg-white  rounded-md'>Light</button>
          </div>
        </div>
        <div className='flex justify-between'>
          <label>Font Size</label>
          <div className='flex justify-start w-fit mr-36 border-2 border-gray-300 rounded-md'>
            <select value={fontSize} onChange={(e) => setFontSize(e.target.value)} className='w-42 h-7 outline-none'>
              <option>10</option>
              <option>12</option>
              <option>14</option>
              <option>16</option>
              <option>18</option>
              <option>25</option>
              <option>30</option>
            </select>
          </div>
        </div>
        <div className='flex justify-between'>
          <label>Font Style</label>
          <div className='flex justify-start w-fit mr-36 border-2 border-gray-300 rounded-md'>
            <select
              value={
                fontStyle.fontbold == "bold"
                  ? "bold"
                  : fontStyle.fontstyle == "italic"
                    ? "italic"
                    : fontStyle.fontunderline == "underline"
                      ? "underline"
                      : "normal"
              }
              onChange={handleFontStyleChange}
              className='w-42 h-7 outline-none'
            >              <option>normal</option>
              <option>bold</option>
              <option>italic</option>
              <option>underline</option>
            </select>
          </div>
        </div>
        <div className='flex justify-between'>
          <label>Line Height</label>
          <div className='flex justify-start w-fit mr-36 border-2 border-gray-300 rounded-md'>
            <select value={lineHeight} onChange={(e) => setLineHeight(e.target.value)} className='w-42 h-7 outline-none'>
              {
                lineHeightArr.map((item, index) => (
                  <option key={index}>{item}</option>
                ))
              }
            </select>
          </div>
        </div>
        <div className='flex justify-between'>
          <label>Writing Direction</label>
          <div className='flex justify-start w-fit mr-36 border-2 border-gray-300 rounded-md'>
            <select value={
              WritingDirection == "Left to Write" ? "Left to Write" : "Right to Left"
            } onChange={(e) => setWritingDirection(e.target.value)} className='w-42 h-7 outline-none'>
              <option>Left to Write</option>
              <option>Right to Left</option>

            </select>
          </div>
        </div>
        <div className='flex justify-between'>
          <label>Word Count</label>
          <div className='flex justify-start w-1/2'>
            <input checked={countWord} onChange={(e) => {
              setCountWord(e.target.checked)
            }} className='w-7 hover:scale-120 h-4' type='checkbox'></input>
          </div>
        </div>
        <div className='flex justify-between'>
          <label>Tab Indentation</label>
          <div className='flex justify-start w-1/2'>
            <input checked={tabIndentation} onChange={(e) => setTabIndentation(e.target.checked)} className='w-7 hover:scale-120 h-4' type='checkbox'></input>
          </div>
        </div>
        <div className='flex justify-between'>
          <label>Spelling Check</label>
          <div className='flex justify-start w-1/2'>
            <input checked={spellCheck} onChange={(e) => setSpellCheck(e.target.checked)} className='w-7 hover:scale-120 h-4' type='checkbox'></input>
          </div>
        </div>

        <div className='text-center cursor-pointer text-blue-500 underline'>
          <label onClick={() => ResetPreferences()}>ResetPreferences</label>
        </div>
      </article>
      <footer className=' text-end'>
        <button onClick={() => closeModal()} className='bg-cyan-500 cursor-pointer w-fit p-2 pl-5 text-center pr-5 rounded-md'>
          close
        </button>
      </footer>

    </div>
  )
}

export default Settingbox
