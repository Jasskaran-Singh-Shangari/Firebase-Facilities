import { useEffect, useState } from 'react'
import '../App.css'
import SignUp from '../components/SignUp.jsx'
import SignIn from '../components/SignIn.jsx'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { app } from "../firebase.js"


function App() {
  const [user, setUser]=useState(null)
  const auth=getAuth(app)

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if (user) setUser(user)
      else setUser(null)
    })
  }, [])

  if(user===null){
    return (
      <div>
        <SignUp />
        <SignIn/>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>Hello {user.email}</h1>
      </div>
    )
  }
  
  
}

export default App
