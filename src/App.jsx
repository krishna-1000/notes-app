
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


function AppWrapper() {
  const token = localStorage.getItem("token");

  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useSetting()
  const renderNavbar = () => {
    if (!token) return null;
    switch (location.pathname) {
      case '/home':
        return <Navbar isModalOpen={setIsModalOpen} />;
      case '/rich-text-editor':
        return <NavbarPages path={location.pathname} />;
      case '/markdown-editor':
        return <NavbarPages path={location.pathname} />;
      case '/drawing-pad':
        return <NavbarPages path={location.pathname} />;
      default:
        return null;
    }
  }
  return (
    <div style={theme ? { backgroundColor: 'white', color: 'black' } : { backgroundColor: 'black', color: 'white' }}>
      {renderNavbar()}
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/login' element={<Login />}></Route>


        <Route path='/home' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>} />
        <Route path='/about' element={<About />} />
        <Route path='/rich-text-editor' element={<RichTextEditor />} />
        <Route path='/markdown-editor' element={<MarkDownEditor />} />
        <Route path='/drawing-pad' element={<DrawingPad />} />
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
