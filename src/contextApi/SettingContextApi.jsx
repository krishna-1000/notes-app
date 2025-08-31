import React, { createContext, useState } from 'react'

export const SettingContext = createContext();
const SettingProvider = ({ children }) => {
  const [theme, setTheme] = useState(false)
  const [fontSize, setFontSize] = useState(25)
  const [countWord,setCountWord] = useState(true);
  const [lineHeight,setLineHeight] = useState(30);
  const [spellCheck,setSpellCheck] = useState(true);
  const [tabIndentation,setTabIndentation] = useState(true);
  const [WritingDirection,setWritingDirection] = useState("Left to Write");
  const [fontStyle, setFontStyle] = useState({
    fontbold: 'normal',
    fontstyle: 'normal',
    fontunderline: 'none'
  })
  const ResetPreferences = () => {
    setTheme(false);
    setFontSize(25);
    setCountWord(true);
    setLineHeight(30);
    setWritingDirection("Left to Write")
    setFontStyle(prev=>({fontbold:'normal',fontstyle:'normal',fontunderline:'none'}))

  }
  return (
    <SettingContext.Provider value={{spellCheck,setSpellCheck,tabIndentation,setTabIndentation,lineHeight,setLineHeight,WritingDirection,setWritingDirection,countWord,setCountWord, ResetPreferences,theme, setTheme, fontSize, setFontSize, fontStyle, setFontStyle }}>
      {children}
    </SettingContext.Provider>
  )
}

export default SettingProvider