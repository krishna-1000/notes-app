
import './App.css'
import Navbar from './Component/Navbars/Navbar'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Notes from './Component/NotesContainer/Notes'
import 'react-toastify/dist/ReactToastify.css';

import useNote from './hooks/useNote';
import useNoteFunc from './hooks/useNoteFunc';
import useTimer from './hooks/useTimer';
import useCountDown from './hooks/useCountDown';
import useFullScreen from './hooks/useFullScreen';
import About from './Pages/About';
import Home from './Pages/Home';
import NavbarPages from './Component/Navbars/NavbarPages';
import RichTextEditor from './Pages/RichTextEditor';
import MarkDownEditor from './Pages/MarkDownEditor';


function AppWrapper() {
  const location = useLocation();
  const { notes, setNotes, handelDelete } = useNote();
  const { handelCopy, handelShare } = useNoteFunc();
  const { duration, setDuration } = useTimer();

  const renderNavbar = () => {

    switch (location.pathname) {
      case '/':
        return <Navbar onDeleteNote={handelDelete} notes={notes} setDuration={setDuration} onShareNote={() => handelShare(notes)} onCopyNote={() => handelCopy(notes)} />;
      case '/rich-text-editor':
        return <NavbarPages path={location.pathname}/>;
      case '/markdown-editor':
        return <NavbarPages path={location.pathname}/>;
      default:
        return <Navbar onDeleteNote={handelDelete} notes={notes} setDuration={setDuration} onShareNote={() => handelShare(notes)} onCopyNote={() => handelCopy(notes)} />;
    }
  }
  return (
    <>
      
        {renderNavbar()}
        <Routes>
          <Route path='/' element={<Home notes={notes} setDuration={setDuration} duration={duration} setNotes={setNotes} />} />
          <Route path='/about' element={<About />} />
          <Route path='/rich-text-editor' element={<RichTextEditor  />} />
          <Route path='/markdown-editor' element={<MarkDownEditor  />} />
        </Routes>
     

    </>
  )

}

function App() {

  return (
    <Router>
      <AppWrapper />
    </Router>
  )

}

export default App
