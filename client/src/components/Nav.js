import React from 'react'
import "./nav.css"
import {useDispatch, useSelector} from 'react-redux'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getUsers,logout} from '../slice/UserSlice'
import {useHistory} from 'react-router-dom'

function Nav() {
    const dispatch = useDispatch()
    const history = useHistory()
    // const { user } = useSelector(state => state.user)
    const { users } = useSelector(state => state.user)
    const logout1 = ()=>{
       
       dispatch(logout());
       history.push("/login")
      
      }
      const chat = ()=>{
        
        history.push("/messenger")
       
       }

      const home = ()=>{
        
        history.push("/")
       
       }
    return (
        <div className="nav-container">
           <ul>
               <li className="nav-left" onClick={home}>MarcoSocial</li>
               <li className="nav-center"><input type="text"  placeholder=" search for friend or post video"/></li>
               <li onClick={home} className="nav-right">Homepage</li>
               <li>TimeLine</li>
               <li><i className="fa fa-user" aria-hidden="true"></i>
</li>
               <li onClick={chat}><i className="fa fa-envelope" aria-hidden="true"></i>
</li>
               <li><i className="fa fa-bell-o" aria-hidden="true"></i>
</li>
               <li><img src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009-1108x0-c-default.jpg" alt="" /></li>
             
<li ><i onClick={logout1} className="fa fa-sign-out" aria-hidden="true"></i>

</li>
           </ul>
        </div>
    )
}

export default Nav
