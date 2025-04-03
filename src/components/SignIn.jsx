import React, {useState} from 'react'
import {app} from "../firebase.js"
import { useNavigate } from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword } from "firebase/auth"
const SignIn = () => {

    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const auth=getAuth(app);
    const navigate = useNavigate()
    const SignInUser=()=>{
        signInWithEmailAndPassword(
        auth,
        email,
        password
        ).then((userCredentials)=>{
        console.log(userCredentials);
        navigate("/")
        })
    }
  return (
    <div>
        <h1>Sign In</h1>
        <div className="flex">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={email} onChange={(e)=>{
            setEmail(e.target.value)}} />
        <label htmlFor="password">Password</label>
        <input type="text" id="pasword" value={password} onChange={(e)=>{
            setPassword(e.target.value)}} />
        <button className='py-2 px-4' onClick={SignInUser}>Sign In</button>
    </div>
    </div>
  )
}

export default SignIn
