import React,{useEffect,useState} from 'react'
import "./chat.css"
import {useDispatch, useSelector} from 'react-redux'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

function Chat({message}) {
    const dispatch = useDispatch()
    
    const { users ,id} = useSelector(state => state.user)
    
    
    return (
        <div className="chat-container">
           <ul>
               {
                   message.map(m=>(
                      
                    <>
                        
                            {(() => {
                                if (id == m.sender){
                                    return (
                                        <div className="chat-left">
                            <div className="left-friends1">
                            <li ><img src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009-1108x0-c-default.jpg" alt="" /></li>
                          <span >{m.text}</span>
                            </div>
                            </div>
                            

                                    )
                                }else{
                                    return (
                                        <div>
                                        <div className="left-friends1">
                                        <li ><img src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009-1108x0-c-default.jpg" alt="" /></li>
                                      <span >{m.text}</span>
                                        </div></div>
                                    )
                                }
                                
                               
                              })()}

                                
                               </>
                  
                   ))
                  
               }
               
           </ul>
         
        </div>
    )
}

export default Chat
