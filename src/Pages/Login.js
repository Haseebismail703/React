import React, { useState } from 'react'
import { auth,signInWithEmailAndPassword } from "../config/Confiq";
export default function Login() {

  const  [email,setEmail] = useState('')
  const [password,setpassword]= useState('')
  let Login = ()=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
     
    const user = userCredential.user;
   console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  }

  return (
    
    <div>
    <center>
    <h1>Sign in Form </h1>
    <input type="email" placeholder='Email'onChange={(e)=>setEmail(e.target.value)}  /><br />
    <input type="password" placeholder='Password' onChange={(e)=>setpassword(e.target.value)} /><br />
    <button onClick={Login} >Sign in now</button>
     </center>


    </div>
  )
}
