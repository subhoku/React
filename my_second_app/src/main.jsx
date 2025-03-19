import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contact from './component1.jsx'
import PrintList from './MyFunction.jsx'
const itemsList = ["Samsung", "Samsui", "LG", "Sony Bravia"];
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <App/>
 <h1 id="root"><Contact/></h1>
 <PrintList items={itemsList}/>
  </StrictMode>,
)
