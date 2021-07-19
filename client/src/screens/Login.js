import React,{useState,useEffect} from 'react';
import "./login.css"
import {useDispatch, useSelector} from 'react-redux'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getUsers,logout} from '../slice/UserSlice'
import {useHistory} from 'react-router-dom'
import axios from "axios"

function Login() {
    const[username,setUsername]= useState("")
    const[password,setPassword] = useState("")
    const[p,setP] = useState(false)

    const dispatch = useDispatch()
    const history = useHistory()
    // const { user } = useSelector(state => state.user)
    const { users } = useSelector(state => state.user)
    const login = ()=>{
       
       dispatch(getUsers({username:username,
        password:password}));
      
      }
      useEffect(() => {
          if(users.status==200){
        //history.push("/")
        window.location.href = "http://localhost:3000/";
          }else{
              console.log("wrong deatils")
          }
    }, [users])
    
      const logout1 = ()=>{
        
      history.push("/register")
      
      }
    
      

    return (
        <div className="login-container">
            <div className="login-left">
                <h1>MarcoSocial <i id="red">{users.message}</i></h1>
                <p>Connect with the world on the best social plartform in the world</p>
            </div>
            <div className="login-right">
                <input placeholder="username" value={username} type="text" onChange={(e)=>{setUsername(e.target.value)}}/>
                <br/>
                <input placeholder="password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <br/>
                <button className="login-btn" onClick={login}>Login</button>
                <p>Forgot password?</p>
                <button className="login-btn1" onClick={logout1}>Create A New Account</button>
            </div>
        </div>
    )
}

export default Login
