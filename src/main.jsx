import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import { NotesProvider } from './contextApi/notesContextApi.jsx';
import TimerProvider from './contextApi/TimerContextApi.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotesProvider>
      <TimerProvider>
      <App />
      </TimerProvider>
    </NotesProvider>
    <ToastContainer />
  </StrictMode>,
)
