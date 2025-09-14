import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import api from '../api/api'
import { createNote, getAllNote } from '../api/Notesapi'
import Modal from '../Component/Modal/Modal'
import { useModal } from '../hooks/useModal'
import ProfileBox from '../Component/NabarComponent/Profile/ProfileBox'

const About = () => {
  const [isopen,setIsOpen] = useState(false);
  
  return (

    <div>
      <button onClick={() => setIsOpen(!isopen)} className='bg-white'>CLick me</button>
      {isopen&&<ProfileBox setIsOpen={setIsOpen} />}
    </div>
  )
}

export default About
