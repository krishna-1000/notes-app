
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


function AppWrapper() {
  const location = useLocation();
  const [isModalOpen,setIsModalOpen] = useState(false);
  const {theme} = useSetting()
  const renderNavbar = () => {

    switch (location.pathname) {
      case '/':
        return <Navbar isModalOpen={setIsModalOpen} />;
      case '/rich-text-editor':
        return <NavbarPages path={location.pathname}/>;
      case '/markdown-editor':
        return <NavbarPages path={location.pathname}/>;
      default:
        return <Navbar />;
    }
  }
  return (
    <div style={theme?{backgroundColor:'white',color:'black'}:{backgroundColor:'black',color:'white'}}>
      
        {renderNavbar()}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/rich-text-editor' element={<RichTextEditor  />} />
          <Route path='/markdown-editor' element={<MarkDownEditor  />} />
        </Routes>

        
    </div>
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
