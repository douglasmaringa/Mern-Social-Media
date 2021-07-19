import React,{useEffect,useState} from 'react'
import "./home.css"
import Nav from "../components/Nav"
import Left from "../components/Left"
import Center from "../components/Center"
import Right from "../components/Right"
import {useDispatch, useSelector} from 'react-redux'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useHistory} from 'react-router-dom'
import Axios from 'axios'

function Home() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { users ,id} = useSelector(state => state.user)
    const[posts, setPosts]= useState([])

    useEffect(() => {
       fetch()
    }, [])
    const fetch = async()=>{
        if(id){
        const userId = id
        try{
            const data = await Axios.get(`http://localhost:8800/api/posts/timeline/${userId}`)
           console.log(data.data)
           //sorts results by latest
           setPosts(data.data.sort((a,b) => new Date(a) < new Date(b) ? 1 : -1))
       }catch(err){
           console.log(err)
       }
    }else{
        console.log("login first")
    }
    }
   // console.log(posts)
    
    return (
        <div>
            <Nav/>
            <div className="home-container">
           <div className="left">
            <Left/>
           </div>
           <div className="center">
            <Center posts={posts} fetch={fetch}/>
           </div>
           <div className="right">
            <Right/>
           </div>
            </div>
           
        </div>
    )
}

export default Home
