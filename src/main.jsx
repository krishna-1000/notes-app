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
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NotesProvider>
        <TimerProvider>
          <SettingProvider>
            <ModelProvider>
              <ProfileProvider>
                  <App />
                  <Modal />
              </ProfileProvider>
            </ModelProvider>
          </SettingProvider>
        </TimerProvider>
      </NotesProvider>
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>,
)
