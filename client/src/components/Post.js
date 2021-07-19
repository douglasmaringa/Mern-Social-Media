import React,{useState,useEffect} from 'react'
import "./post.css"
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {useDispatch, useSelector} from 'react-redux'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {post} from '../slice/PostSlice'
import {useHistory} from 'react-router-dom'
import {db,storage,auth} from "../firebase"
import firebase from "firebase"

function Post({fetch}) {
    const[id2,setId2]=useState("")
    const[image,setImage]=useState("")
    const[load,setLoad]=useState("")
    const[show,setShow]=useState(false)
    const[desc,setDesc]=useState("")
    const[imageAsFile,setImageAsFile]= useState("")

    const dispatch = useDispatch()
    const history = useHistory()
    const { users, email,id,username} = useSelector(state => state.user)
    //const { post } = useSelector(state => state.posting)

    const submit =()=>{
        dispatch(post({id:id,img:image,desc:desc,email:email,username:username}))
        setImage("")
        setDesc("")
        setShow(false)
        //window.location.href = "http://localhost:3000";
        fetch()
    }

    //image 1
const handleImageAsFile=(e)=>{
    const image = e.target.files[0]
    setImageAsFile(imageFile=>(image))
  }
  
  const handleFireBaseUpload=e=>{
    e.preventDefault()
    console.log('start of upload')
    setLoad("uploading")
    if(imageAsFile===''){
        console.error("not an image")
    }
    const uploadTask =storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
    uploadTask.on('state_changed',(snapShot)=>{
        console.log(snapShot)
    },(err)=>{
        console.log(err)
    },()=>{
        storage.ref('images').child(imageAsFile.name).getDownloadURL().then(firebaseUrl=>{
            setLoad("")
            setImage(firebaseUrl)
            //setImageAsUrl(prevObject=>({prevObject,imgUrl:firebaseUrl}))
        })
    })
  }
  const show1 = ()=>{
      setShow(true)
  }
    return (
        <div>
             <Paper elevation={3} className="post-paper">
            <div className="post-container">
                <div className="post-top">
                    <div className="top-flex">
                <img src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009-1108x0-c-default.jpg" alt="" /> <span>What's in your mind?</span>
                </div>
                <TextField id="standard-basic" value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
                <div className="pr">
                {
                    image?(<>
                    <h1>{load}</h1>
                    <img src={image} alt="" />
                    </>)
                    :(<></>)
                }
                </div>
                
                </div>
                <div className="post-bottom">
                   
                    <ul>
                    {
                       show?(<>
                       
                       <form onSubmit={handleFireBaseUpload}>
                <input type="file" onChange={handleImageAsFile}/>
                <br/>
                <button>
                <li><i class="fa fa-camera"  id="red" aria-hidden="true"></i>
                            <span>Photo or Video</span></li>
                </button>
            </form>
                       
                       </>):(<><li><i onClick={show1} class="fa fa-camera"  id="red" aria-hidden="true"></i></li></>)
                   } 
                
                    
                        
                        <li><i class="fa fa-tag" id="blue" aria-hidden="true"></i>
<span>Tag</span></li>
                        <li><i class="fa fa-map-marker" id="green" aria-hidden="true"></i>
<span>Location</span></li>
                        <li><i class="fa fa-smile-o" id="yellow" aria-hidden="true"></i>
<span>Feelings</span></li>
                        <li className="post-share" onClick={submit}>Share</li>
                    </ul>
                </div>
            </div>
            </Paper>
        </div>
    )
}

export default Post
