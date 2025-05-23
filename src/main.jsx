import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GitExperApp } from './gitexpers'
//para poner global
import './styles.css';

createRoot(document.getElementById('root')).render(
  //solo funciona en desarrollo pero en produccion si es necesario
  <StrictMode>
    <GitExperApp />
  </StrictMode>,
)
