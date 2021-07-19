import React,{useEffect,useState} from 'react'
import "./Profile.css"
import Nav from "../components/Nav"
import Left from "../components/Left"
import Center from "../components/Center"
import axios from "axios"
import Single from "../components/Single"
import { useParams } from "react-router";
import {useDispatch, useSelector} from 'react-redux'

function Profile() {
  const { users ,id,username} = useSelector(state => state.user)
  const[isUser,setIsUser]=useState(false)
    //accessing username from params
    const username1= useParams().username;
    const[user,setUser]=useState([])
    const[data,setData] = useState([])
    useEffect(() => {
        const fetchUser = async () => {
          const res = await axios.get(`http://localhost:8800/api/users?username=${username1}`);
          setUser(res.data);
        };
        fetchUser();
        if(username==username1){
          setIsUser(true)
        }else{
          setIsUser(false)
        }
      }, [username1]);

      useEffect(() => {
        
        const fetchData = async () => {
          const res = await axios.get(`http://localhost:8800/api/posts/profile/${username}`);
          setData(res.data);
      };
      const fetchData1 = async () => {
        const res = await axios.get(`http://localhost:8800/api/posts/profile/${username1}`);
        setData(res.data);
    };
    if(username==username1){
      fetchData();
    }else
    {
      fetchData1();
    }
       
      }, [username1]);

   console.log(isUser)

    return (
        <div>
        <Nav/>
        <div className="profile-container">
       <div className="profile-left">
        <Left/>
       </div>
       <div className="profile-center">
        <Single user={user} isUser={isUser} data={data}/>
       </div>
        </div>
       
    </div>
    )
}

export default Profile
