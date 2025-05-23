import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import Navbar from './Navbar.jsx'
//import Home from './pages/HomeLayout.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

      <App />

  </StrictMode>,
)
