import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/apiCalls'


function Login() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()
      const handleClick=(e)=>{
       e.preventDefault() 
       login(dispatch,{username,password})
      }
  return (
    <div 
    style={{
        height:"100vh",
        display:"flex",
        flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    marginLeft: "500px",
}} 
    >
      <input style={{padding:10,marginBottom:20}} type="text" placeholder='username' onChange={e=>setUsername(e.target.value)} />
      <input style={{padding:10,marginBottom:20}} type="text" placeholder='password'onChange={e=>setPassword(e.target.value)} />
          <button style={{paddingTop:10,marginBottom:30,marginTop:10,width:100}} onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login
