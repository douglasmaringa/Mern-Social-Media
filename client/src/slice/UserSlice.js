import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

//action for getting user
export const getUsers = createAsyncThunk(
  "users/getUsers",
  async ({username,password},dispatch, getState) => {
   console.log(username)
    try{
    return await axios.post("http://localhost:8800/api/auth/login",{
      email:username,
      password:password
    })
    }catch(err){
     return err;
    }
  }
);


const initialUser = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null

  const initialId = localStorage.getItem('id')
  ? JSON.parse(localStorage.getItem('id'))
  : null

  const initialUsername = localStorage.getItem('username')
  ? JSON.parse(localStorage.getItem('username'))
  : null
//State
const usersSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    status: null,
    email:initialUser,
    id:initialId,
    username:initialUsername
  },
  //normal reducers come here
  reducers:{  
    logoutSuccess: (state, action) =>  {
      state.email = null;
      state.users= [];
      localStorage.removeItem('user')
      localStorage.removeItem('id')
      localStorage.removeItem('username')
    },
  },
  //reducers for thunk axios call come here
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload;
      if(action.payload.status == 200){
      localStorage.setItem('user', JSON.stringify(action.payload.data.email))
      localStorage.setItem('id', JSON.stringify(action.payload.data._id))
      localStorage.setItem('username', JSON.stringify(action.payload.data.username))
    }
    else{
      alert("wrong credentials")
    }
  },
    [getUsers.rejected]: (state, action) => {
      state.status = "failed";
    }
  },
});

//logout this is a normal action so it must be defined first
// Actions
const {logoutSuccess } = usersSlice.actions
export const logout = () => async dispatch => {
  try {
    // await api.post('/api/auth/logout/')
    alert("logout sucees")
    return dispatch(logoutSuccess())
  } catch (e) {
    return console.error(e.message);
  }
}
export default usersSlice.reducer;