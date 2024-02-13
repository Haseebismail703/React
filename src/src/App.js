import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Note from "./Pages/Note";
import Creat from "./Pages/Creat";
import Storage from "./Pages/Storage";
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
        <Route path='/Creat' element={<Creat/>} />
        <Route path='/Storage' element={<Storage/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
