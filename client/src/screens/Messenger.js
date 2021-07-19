import React,{useEffect,useState} from 'react'
import "./Messenger.css"
import Nav from "../components/Nav"
import Chat from "../components/Chat"
import {useDispatch, useSelector} from 'react-redux'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useHistory} from 'react-router-dom'
import Conversations from "../components/Conversations"
import Axios from 'axios'

function Messenger() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { users ,id} = useSelector(state => state.user)
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState([]);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        const getConversations = async () => {
          try {
            const res = await Axios.get("http://localhost:8800/api/conversations/" + id);
            setConversations(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getConversations();
      }, [id]);
console.log(messages)

useEffect(() => {
   
    const getMessages = async () => {
      try {
        const res = await Axios.get("http://localhost:8800/api/messages/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    const interval = setInterval(() => {
    getMessages();
   
        console.log('Logs every minute');
      },5000);
    
      return () => clearInterval(interval);
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== id
    );

    
    try {
      const res = await Axios.post("http://localhost:8800/api/messages/", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

    return (
        <div>
            <Nav/>
           <div className="messenger-container">
               <div className="m-left">
                   {
                       conversations.map(m=>(
                           <div onClick={() => setCurrentChat(m)}>
                        <Conversations con={m} currentUser={id}/>
                        </div>
                       ))
                   }
                  
        </div>

               <div className="m-middle">
                   
                        <Chat message={messages}/>
                       
                        <input type="text"  placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}/>
           <button onClick={handleSubmit}>Send</button>
               </div>
               <div className="m-right">
                    right
               </div>
           </div>
        </div>
    )
}

export default Messenger
