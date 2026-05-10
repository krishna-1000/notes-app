import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Modal from '../Component/Modal/Modal'
import { useModal } from '../hooks/useModal'

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
