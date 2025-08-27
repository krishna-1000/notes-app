
import './App.css'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Notes from './Component/NotesContainer/Notes'
import 'react-toastify/dist/ReactToastify.css';

import useNote from './hooks/useNote';
import useNoteFunc from './hooks/useNoteFunc';
import useTimer from './hooks/useTimer';
import useCountDown from './hooks/useCountDown';
import useFullScreen from './hooks/useFullScreen';
import About from './Pages/About';
import Home from './Pages/Home';

function App() {
 
  const {notes,setNotes,handelDelete} = useNote();
  const {handelCopy,handelShare} = useNoteFunc();
  const {duration , setDuration} = useTimer();
  return (
    <>
      <Router>
        <Navbar onDeleteNote={handelDelete} notes={notes} setDuration={setDuration} onShareNote={()=>handelShare(notes)} onCopyNote={()=>handelCopy(notes)} />
        <Routes>
          <Route path='/' element={<Home  notes={notes} setDuration={setDuration} duration={duration} setNotes={setNotes} />} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>

    </>
  )
}

export default App
