import React,{useEffect,useState} from 'react'
import "./center.css"
import Post from "./Post"
import Card from "./Card"


function Center({posts,fetch}) {
    
   
    return (
        <div>
           <Post fetch={fetch}/>
           {
               posts.map(m=>(
                   <Card fetch={fetch} m={m}/>
               ))
           }
             
             
           
        </div>
    )
}

export default Center
