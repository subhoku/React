import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ComponentBinding from './componentbinding.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <ComponentBinding/>
  </StrictMode>,
)
