import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CandelarApp } from './CandelarApp.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <CandelarApp />
  // </StrictMode>

  <CandelarApp />
)