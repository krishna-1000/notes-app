
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
import Dashboard from './Pages/Dashboard';
import PrivateRoute from './Component/PrivateRoutesProvider/PrivateRoute';
import Login from './Component/AuthComponent/Login';
import SignUp from './Component/AuthComponent/SignUp';
import ForgotPasswordUser from './Component/AuthComponent/ForgotPassword';
import VoiceNotes from './Pages/VoiceNotes';
import VoiceNotes from './Pages/SimpleKanban';


function AppWrapper() {
  const token = localStorage.getItem("token");

  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useSetting()
  const renderNavbar = () => {

    switch (location.pathname) {
      case '/home':
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
      default:
        return null;
    }
  }
  return (
    <div style={theme ? { backgroundColor: 'white', color: 'black' } : { backgroundColor: 'black', color: 'white' }}>
      {renderNavbar()}
      <Routes>
        {/* public ROutes */}
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/forgotpassword' element={<ForgotPasswordUser />}></Route>

        {/* Private ROutes */}
        <Route path='/home' element={

            <Home />
         
        } />

        <Route path='/about' element=
          {<PrivateRoute>
            <About />
          </PrivateRoute>}
        />
        <Route path='/rich-text-editor' element=
          {<PrivateRoute>
            <RichTextEditor />
          </PrivateRoute>} />
        <Route path='/markdown-editor' element={
          <PrivateRoute>
            <MarkDownEditor />
          </PrivateRoute>} />
        <Route path='/drawing-pad' element={
          <PrivateRoute>
            <DrawingPad />
          </PrivateRoute>} />
        <Route path='/voice-notes' element={
          <PrivateRoute>
           <VoiceNotes/>
          </PrivateRoute>} />
        <Route path='/simple-kanban' element={
          <PrivateRoute>
           <SimpleKanban/>
          </PrivateRoute>} />
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
