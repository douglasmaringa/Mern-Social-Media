import React,{useState,useEffect} from 'react'
import "./center.css"
import "./Single.css"
import Post from "./Post"
import Card from "./Card"
import Paper from '@material-ui/core/Paper';
import ta from "time-ago"
import {useDispatch, useSelector} from 'react-redux'
import axios from "axios"

function Single({user,isUser,data}) {
    const { users ,id,username} = useSelector(state => state.user)
    const[resp,setResp]=useState("")
    
   
        const follow = async (_id) => {
            try{
            const res = await axios.put(`http://localhost:8800/api/users/${_id}/follow`,{
                userId:id
            });
            alert(res.data);
            }catch(err)
            {
                alert("you already follow this user")
                console.log(err)
            }
          };
         
          const unfollow = async (_id) => {
            try{
            const res = await axios.put(`http://localhost:8800/api/users/${_id}/unfollow`,{
                userId:id
            });
            alert(res.data);
            }catch(err)
            {
                alert("you dont follow this user")
                console.log(err)
            }
          };
         
    return (
        <div >
            
                <div className="hero">
                <img src={user.profilePicture} alt="" />
                {
     isUser?(<><h1>{user.username}</h1></>):(<><h1>{user.username}</h1> <button onClick={()=>{follow(user._id)}}>Follow</button> <button onClick={()=>{unfollow(user._id)}}>UnFollow</button></>)
                }
                </div>
                <div className="single-container">


                <div className="single-left">
                    {
                        isUser?(<> <Post/></>):(<></>)
                    }
           {
               data.map(m=>(
                <Paper elevation={3} className="card-paper">
                <div className="card-top">
                <img src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009-1108x0-c-default.jpg" alt="" />
                <p>{m.username}</p>
                <br/>
                <span>{ta.ago(m.createdAt)}</span>
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
                <h1>{m.desc}</h1>
                
                <div className="card-image">
                <img src={m.img} alt="" />
                </div>
        
                <div className="card-bottom">
                    <ul>
                        <li><i class="fa fa-thumbs-o-up" id="blue" aria-hidden="true"></i>
        </li>
                        <li><i class="fa fa-heart" id="red" aria-hidden="true"></i>
        </li>
                        <li>32 people liked it</li>
                        <li className="card-right">1 comment</li>
                    </ul>
                </div>
        
                
                    </Paper>
               ))
           }
          
            </div>
           

           <div className="single-right">
               <h1>User Info</h1>
               <p><strong>City:</strong> {user.city}</p>
               <p><strong>From:</strong> {user.from}</p>
               <p><strong>Relationship:</strong> {user.relationship}</p>

               <h2>User's Friends</h2>
               <ul>
               <div className="left-friends1">
                <li><img src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009-1108x0-c-default.jpg" alt="" /></li>
                <span>John Doe</span>
                </div>
                <div className="left-friends1">
                <li><img src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009-1108x0-c-default.jpg" alt="" /></li>
                <span>John Doe</span>
                </div>
               </ul>
           </div>
           
           </div>
        </div>
    )
}

export default Single