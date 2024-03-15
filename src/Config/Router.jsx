import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Profile from '../Pages/Profile'
// import { auth } from './FirebaseConfig'
// import { Spin } from 'antd';

export default function Router() {

  // const [user, setUser] = useState(false)
  // const [loader, setLoader] = useState(true)

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
        
  //       const uid = user.uid;
  //       console.log(uid)
  //       setUser(true)
  //       setLoader(false)
  //     } else {
  //       console.log('user not login')
  //       setUser(false)
  //     }
  //   });
  // }, [])


  return (
    <>
    
   
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>

    
    </>
  )
}
