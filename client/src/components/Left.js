import React,{useState,useEffect} from 'react'
import Axios from "axios"
import Paper from '@material-ui/core/Paper';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import "./left.css"

function Left() {
    const[users,setUsers]=useState([])
    useEffect(() => {
        fetch()
     }, [])
 
     const fetch = async()=>{
         
         try{
             const data = await Axios.get("http://localhost:8800/api/users/")
            console.log(data.data)
            setUsers(data.data)
        }catch(err){
            console.log(err)
        }
     
     }
    return (
        <div >
            <Paper elevation={3} className="scroll">
            <div className="left-container" >
            <ul>
                <li> <i class="fa fa-rss" aria-hidden="true"></i>
                 <span>Feed</span></li>
                <li> <i class="fa fa-envelope" aria-hidden="true"></i>
                 <span>Chats</span></li>
                <li> <i class="fa fa-play" aria-hidden="true"></i>
                <span>Videos</span></li>
                <li> <i class="fa fa-users" aria-hidden="true"></i>
                <span>Groups</span></li>
                <li> <i class="fa fa-bookmark" aria-hidden="true"></i>
                <span>Bookmarks</span></li>
                <li> <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                <span>Questions</span></li>
                <li> <i class="fa fa-briefcase" aria-hidden="true"></i>
                <span>Jobs</span> </li>
                <li> <i class="fa fa-calendar-o" aria-hidden="true"></i>
                <span> Events</span></li>
                <li> <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                <span>Course</span> </li>
                <li className="left-btn">Show More</li>
            </ul>
            {
                    users.map(m=>(
            <ul key={m.password} className="left-friends">
               
                  <div key={m.username} className="left-friends1">
                  <Link
              to={"/profile/"+ m.username}
              style={{ textDecoration: "none" }}
            >
        <p>{m.name}</p>
                <li key={m._id}><img src={m.profilePicture} alt="" /></li>
                </Link>
                <span key={m.email} >{m.username}</span>
                </div>
               
            </ul>
                 ))
                }
            </div>
            </Paper>
        </div>
    )
}

export default Left
