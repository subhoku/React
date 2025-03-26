import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ecommerce from './fakestoreapicalling.jsx'
import DataBindingComponent from './nasaapicalling'
function App() {
  

  return (
    <>
   <Ecommerce/>
   <DataBindingComponent/> 
    </>
  )
}

export default App
