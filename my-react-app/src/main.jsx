import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyWidth from './dataBinding.jsx'
import Hello from './component.jsx'
import HelloWorld from './classcomponent.jsx'
import DataBindingComponent from './databinding1.jsx'
import GroupedProducts from './nestediteration.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
   <DataBindingComponent/>
   <GroupedProducts/>
  </StrictMode>,
)
