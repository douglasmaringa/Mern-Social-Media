import React,{useState,useEffect} from 'react';
import "./Register.css"
import {useHistory} from 'react-router-dom'
import axios from "axios"

function Register() {
    const history = useHistory()
    const[username,setUsername]= useState("")
    const[password,setPassword] = useState("")
    const[email,setEmail]= useState("")
    
    
    const register = async()=>{
        try{
        const data = await axios.post("http://localhost:8800/api/auth/register",{
            username:username,
            email:email,
            password:password,
            
        })
        history.push("/login")
    }catch(err){
        console.log(err)
    }
    }
    
    return (
        <div className="register-container">
            <div className="register-left">
                <h1>MarcoSocial</h1>
                <p>Connect with the world on the best social plartform in the world</p>
            </div>
            <div className="register-right">
                <input placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                <br/>
                <input placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <br/>
                <input placeholder="password" value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                <br/>
                
                <button className="register-btn" onClick={register}>Register</button>
                <p>Cancel</p>
               
            </div>
        </div>
    )
}

export default Register
