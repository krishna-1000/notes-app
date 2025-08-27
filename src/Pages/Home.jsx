import React from 'react'
import Notes from '../Component/NotesContainer/Notes'

const Home = ({ notes, setNotes,duration,setDuration }) => {
  return (
    <>
      <Notes notes={notes} setDuration={setDuration} duration={duration} setNotes={setNotes}/>
    </>
  )
}

export default Home
