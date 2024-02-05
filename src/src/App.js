import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Note from "./Pages/Note";

function App() {
  // const user = false
  // let Nav = ({children})=>{
  // return user ? children : <Navigate to={'/'} />
  // }
  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route path='*' element={<Note/>} />
         <Route path='/' element={<Signup/>}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
