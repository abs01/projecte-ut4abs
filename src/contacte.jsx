import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles.css'
import Header from './components/Header.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header title="Contáctame :)" />
    <Contact/>
    <Footer/>
  </StrictMode>,
)
