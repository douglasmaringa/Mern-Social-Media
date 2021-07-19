import React,{useEffect,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useHistory} from 'react-router-dom'
import axios from 'axios'

function Conversations({con,currentUser}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { users ,id} = useSelector(state => state.user)
    const[user,setUser]= useState(null)
    
    useEffect(() => {
        const friendId = con.members.find((m) => m !== currentUser);
    
        const getUser = async () => {
          try {
            const res = await axios.get("http://localhost:8800/api/users/" + friendId);
            setUser(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getUser();
      }, [con,currentUser._id]);
      //console.log(user)
    return (
        <div>
            <div className="m-left">
               <ul className="left-friends">
                <div className="left-friends1">
             <li ><img src={user?.profilePicture} alt="" /></li>
           <span >{user?.username}</span>
             </div>
            </ul>
        </div>
        </div>
    )
}

export default Conversations
