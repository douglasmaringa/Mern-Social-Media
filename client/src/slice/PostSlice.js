import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

//action for getting user
export const post = createAsyncThunk(
  "posting/post",
  async ({id,desc,img,email,username},dispatch, getState) => {
   console.log(desc)
    try{
    return await axios.post("http://localhost:8800/api/posts/",{
      userId:id,
      desc:desc,
      img:img,
      username:username,
      email:email,
    })
    }catch(err){
     return err;
    }
  }
);


//State
const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    status: null,
  },
  
  //reducers for thunk axios call come here
  extraReducers: {
    [post.pending]: (state, action) => {
      state.status = "loading";
    },
    [post.fulfilled]: (state, action) => {
      state.status = "success";
      state.post = action.payload;
  },
    [post.rejected]: (state, action) => {
      state.status = "failed";
    }
  },
});


export default postSlice.reducer;