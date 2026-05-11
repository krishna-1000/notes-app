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
    <div className='flex flex-col w-[95vw] sm:w-[80vw] md:w-[55vw] lg:w-[45vw] max-w-2xl min-h-fit bg-white text-black rounded-md p-4 sm:p-6'>
      
      <header className='border-b border-gray-300 pb-4 mb-4'>
        <h1 className='text-xl sm:text-2xl font-bold'>Preferences</h1>
      </header>

      <article className='flex flex-col gap-4'>

        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
          <label className='font-medium shrink-0'>Theme</label>
          <div className='bg-gray-300 flex gap-2 sm:gap-4 w-full sm:w-auto rounded-md p-2'>
            <button className='hover:bg-white rounded-md px-2 py-1 flex-1 sm:flex-none text-sm'>Device</button>
            <button onClick={() => setTheme(false)} className='hover:bg-white rounded-md px-2 py-1 flex-1 sm:flex-none text-sm'>Dark</button>
            <button onClick={() => setTheme(true)} className='hover:bg-white rounded-md px-2 py-1 flex-1 sm:flex-none text-sm'>Light</button>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
          <label className='font-medium shrink-0'>Font Size</label>
          <div className='border-2 border-gray-300 rounded-md w-full sm:w-48'>
            <select value={fontSize} onChange={(e) => setFontSize(e.target.value)} className='w-full h-8 outline-none px-1 rounded-md'>
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

        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
          <label className='font-medium shrink-0'>Font Style</label>
          <div className='border-2 border-gray-300 rounded-md w-full sm:w-48'>
            <select
              value={
                fontStyle.fontbold === "bold" ? "bold"
                  : fontStyle.fontstyle === "italic" ? "italic"
                  : fontStyle.fontunderline === "underline" ? "underline"
                  : "normal"
              }
              onChange={handleFontStyleChange}
              className='w-full h-8 outline-none px-1 rounded-md'
            >
              <option>normal</option>
              <option>bold</option>
              <option>italic</option>
              <option>underline</option>
            </select>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
          <label className='font-medium shrink-0'>Line Height</label>
          <div className='border-2 border-gray-300 rounded-md w-full sm:w-48'>
            <select value={lineHeight} onChange={(e) => setLineHeight(e.target.value)} className='w-full h-8 outline-none px-1 rounded-md'>
              {lineHeightArr.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
          <label className='font-medium shrink-0'>Writing Direction</label>
          <div className='border-2 border-gray-300 rounded-md w-full sm:w-48'>
            <select
              value={WritingDirection === "Left to Write" ? "Left to Write" : "Right to Left"}
              onChange={(e) => setWritingDirection(e.target.value)}
              className='w-full h-8 outline-none px-1 rounded-md'
            >
              <option>Left to Write</option>
              <option>Right to Left</option>
            </select>
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <label className='font-medium'>Word Count</label>
          <div className='flex items-center'>
            <input
              checked={countWord}
              onChange={(e) => setCountWord(e.target.checked)}
              className='w-5 h-5 cursor-pointer accent-cyan-500'
              type='checkbox'
            />
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <label className='font-medium'>Tab Indentation</label>
          <div className='flex items-center'>
            <input
              checked={tabIndentation}
              onChange={(e) => setTabIndentation(e.target.checked)}
              className='w-5 h-5 cursor-pointer accent-cyan-500'
              type='checkbox'
            />
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <label className='font-medium'>Spelling Check</label>
          <div className='flex items-center'>
            <input
              checked={spellCheck}
              onChange={(e) => setSpellCheck(e.target.checked)}
              className='w-5 h-5 cursor-pointer accent-cyan-500'
              type='checkbox'
            />
          </div>
        </div>

        <div className='text-center'>
          <span
            onClick={() => ResetPreferences()}
            className='text-blue-500 underline cursor-pointer text-sm hover:text-blue-700'
          >
            Reset Preferences
          </span>
        </div>

      </article>

      <footer className='flex justify-end mt-6 pt-4 border-t border-gray-200'>
        <button
          onClick={() => closeModal()}
          className='bg-cyan-500 hover:bg-cyan-600 cursor-pointer text-white px-6 py-2 rounded-md text-sm transition-colors'
        >
          Save
        </button>
      </footer>

    </div>
  )
}

export default Settingbox