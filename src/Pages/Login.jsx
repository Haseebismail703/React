import React, { useState } from 'react'
import AppLogin from '../Components/LoginForm'
import { Link, useNavigate } from 'react-router-dom'
import {auth, signInWithEmailAndPassword} from '../Config/FirebaseConfig'



export default function Login() {
  let navigate = useNavigate()
  let slogin = (data)=>{
   
    signInWithEmailAndPassword(auth,data.email,data.password)
    
    .then((userCredential) => {
    
    const user = userCredential.user;
     console.log(user);
    navigate('/Profile')
    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
     
     
    });

  }
  return (

    <div style={{ margin: '50px'}}>

<h1>Login</h1>

     <AppLogin sslogin={slogin}  /> 
    


      <p>Don't have an account ? <Link to={'/signup'}>Signup</Link> </p>

    </div>


  )
}
