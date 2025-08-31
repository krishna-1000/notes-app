import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import api from '../api/api'
import { createNote, getAllNote } from '../api/Notesapi'
import { NotesLocalStorage } from '../Service/NotesLocalStorage'
import Modal from '../Component/Modal/Modal'
import Settingbox from '../Component/NabarComponent/Setting/Settingbox'
import { useModal } from '../hooks/useModal'

const About = () => {
  const { openModal } = useModal();
  return (

    <div>
      <button onClick={() => openModal(<Settingbox />)}>CLick me</button>
    </div>
  )
}

export default About
