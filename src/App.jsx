import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useNavigate} from "react-router-dom"
import SignUp from './components/SignUp.jsx'
import SignIn from './components/SignIn.jsx'

function App() {
  
  return (
    <div>
      <SignUp />
      <SignIn/>
    </div>
  )
}

export default App
