import React,{useState,useEffect} from 'react'
import "./right.css"
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Axios from "axios"

function Right() {
    const[users,setUsers]=useState([])
    const {id,username} = useSelector(state => state.user)
    useEffect(() => {
        fetch()
     }, [])
 
     const fetch = async()=>{
         
         try{
             const data = await Axios.get(`http://localhost:8800/api/users/friends/${id}`)
            console.log(data.data)
            setUsers(data.data)
        }catch(err){
            console.log(err)
        }
     
     }
    return (
        <div className="right-container">
            <div className="right-top">
           <i class="fa fa-birthday-cake" id="red" aria-hidden="true"></i>
           <p>
           <strong>Paola Foster</strong> and <strong> 3 other friends </strong>
            have birthdays today
            </p> 
            </div>
            <div className="right-image">
            <img src="https://images.pexels.com/photos/433527/pexels-photo-433527.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
            </div>
            
            <h3>Your Friends</h3>
            <ul>
                {
                    users.map(m=>(
                        <div className="left-friends1">
                <li><img src={m.profilePicture} alt="" /></li>
                <span>{m.username}</span>
                </div>
                    ))
                }
            
                
            </ul>
        </div>
    )
}

export default Right
