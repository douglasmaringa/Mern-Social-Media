import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import "./App.css"
import Home from "./screens/Home"
import Profile from "./screens/Profile"
import Login from "./screens/Login"
import Register from "./screens/Register"
import Messenger from "./screens/Messenger"

function App() {

  return (
    <Router>
      <Switch>
      <Route path="/messenger">
         <Messenger/>
          </Route>
      <Route path="/register">
         <Register/>
          </Route>
          <Route path="/login">
         <Login/>
          </Route>
      <Route path="/profile/:username">
         <Profile/>
          </Route>
     <Route path="/">
         <Home/>
          </Route>
        </Switch>
    </Router>
  )
}

export default App
