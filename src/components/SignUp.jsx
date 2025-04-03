import React, {useState} from 'react'
import {app} from "../firebase.js" 
import { useNavigate } from 'react-router-dom'
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider} from "firebase/auth"
const SignUp = () => {
    const provider=new GoogleAuthProvider()
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const navigate = useNavigate()
    const auth=getAuth(app);
    const SignUpUser=()=>{
        createUserWithEmailAndPassword(
        auth, 
        email, 
        password
        ).then((value)=>{
        console.log(value);
        navigate("/")
        })
    }

  return (
    <div>
        <h1>Sign Up </h1>
        <div className='flex'>
        <div className="flex">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" value={email} onChange={e=>setEmail(e.target.value)} />
        
          <label htmlFor="password">Password</label>
          <input type="text" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />

          <button className='px-4 py-3 rounded-xl bg-blue-800 text-white font-medium' onClick={SignUpUser}>Sign Up</button>
        </div>
    </div>
    </div>
  )
}

export default SignUp
