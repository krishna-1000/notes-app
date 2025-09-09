import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import { NotesProvider } from './contextApi/notesContextApi.jsx';
import ModelProvider from './contextApi/ModelContextApi.jsx'
import TimerProvider from './contextApi/TimerContextApi.jsx';
import Modal from './Component/Modal/Modal.jsx';
import SettingProvider from './contextApi/SettingContextApi.jsx';
import ProfileProvider from './contextApi/ProfileContextApi.jsx';
import ProfileBox from './Component/NabarComponent/Profile/ProfileBox.jsx';
import LoginContextProvider from './contextApi/LoginContextAPi.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <NotesProvider>
      <TimerProvider>
        <SettingProvider>
          <ModelProvider>
            <ProfileProvider>
              <LoginContextProvider>
              <App />
              <Modal />
              </LoginContextProvider>
              <ProfileBox/>
            </ProfileProvider>
          </ModelProvider>
        </SettingProvider>
      </TimerProvider>
    </NotesProvider>
    <ToastContainer />
    </BrowserRouter>
  </StrictMode>,
)
