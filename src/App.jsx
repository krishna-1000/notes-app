
import './App.css'
import Navbar from './Component/Navbars/Navbar'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';


import About from './Pages/About';
import Home from './Pages/Home';
import NavbarPages from './Component/Navbars/NavbarPages';
import RichTextEditor from './Pages/RichTextEditor';
import MarkDownEditor from './Pages/MarkDownEditor';
import { useState } from 'react';
import { useSetting } from './hooks/useSetting';
import DrawingPad from './Pages/DrawingPad';
import PrivateRoute from './Component/PrivateRoutesProvider/PrivateRoute';
import VoiceNotes from './Pages/VoiceNotes';
import SimpleKanban from './Pages/SimpleKanban';
import CaseConverter from './Pages/CaseConverter';


function AppWrapper() {

  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useSetting()
  const renderNavbar = () => {

    switch (location.pathname) {
      case '/':
        return <Navbar isModalOpen={setIsModalOpen} />;
      case '/rich-text-editor':
        return <NavbarPages path={location.pathname} />;
      case '/markdown-editor':
        return <NavbarPages path={location.pathname} />;
      case '/drawing-pad':
        return <NavbarPages path={location.pathname} />;
      case '/voice-notes':
        return <NavbarPages path={location.pathname} />;
      case '/simple-kanban':
        return <NavbarPages path={location.pathname} />;
      case '/case-converter':
        return <NavbarPages path={location.pathname} />;
      default:
        return null;
    }
  }
  return (
    <div style={theme ? { backgroundColor: 'white', color: 'black' } : { backgroundColor: 'black', color: 'white' }}>
      {renderNavbar()}
      <Routes>

        <Route path='/' element={<Home />}>
        </Route>

        <Route path='/about' element={
          <About />
        }
        />
        

        <Route path='/voice-notes' element={
          <VoiceNotes />
        } />
        <Route path='/simple-kanban' element={
          <SimpleKanban />
        } />
        <Route path='/case-converter' element={
          <CaseConverter />
        } />
      </Routes>

    </div>
  )

}

function App() {

  return (
    <AppWrapper />

  )

}

export default App
