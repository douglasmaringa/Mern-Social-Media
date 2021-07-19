import React from 'react'
import "./card.css"
import Paper from '@material-ui/core/Paper';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import ta from "time-ago"
import {useDispatch, useSelector} from 'react-redux'
import axios from "axios"

function Card({m,fetch}) {
    const { users ,id,username} = useSelector(state => state.user)

    const like = async (_id) => {
        try{
        const res = await axios.put(`http://localhost:8800/api/posts/${_id}/like`,{
            userId:id
        });
        console.log(res.data);
        fetch()
        }catch(err)
        {
            //alert("you already follow this user")
            console.log(err)
        }
      };
    return (
        <div>
            <Paper elevation={3} className="card-paper">
        <div className="card-top">
        <img src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009-1108x0-c-default.jpg" alt="" />
        <Link
              to={"/profile/"+ m.username}
              style={{ textDecoration: "none" }}
            >
        <p>{m.username}</p>
        </Link>
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
                <li onClick={()=>{like(m._id)}}><i class="fa fa-thumbs-o-up" id="blue" aria-hidden="true"></i>
</li>
                <li onClick={()=>{like(m._id)}}><i class="fa fa-heart" id="red" aria-hidden="true"></i>
</li>
                <li>{m.likes.length} people liked it</li>
                <li className="card-right">1 comment</li>
            </ul>
        </div>

        
            </Paper>
        </div>
    )
}

export default Card
