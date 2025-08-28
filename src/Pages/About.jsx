import React, { useContext } from 'react'
import { NotesContext } from '../contextApi/notesContextApi'

const About = () => {
  const {notes} = useContext(NotesContext);
  console.log(notes)
  return (
    <div>
sdkfj    {notes}</div>
  )
}

export default About
