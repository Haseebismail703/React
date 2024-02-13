import React, { useState } from 'react'
import { auth, createUserWithEmailAndPassword , doc, setDoc ,db} from "../config/Confiq";

export default function Signup() {
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [password,setpassword]= useState('')
    let Signup = (i)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
         
        const user = userCredential.user;
        console.log(user);
        await setDoc(doc(db, "U", user.uid ), {
          name: name,
          email : email,
          password: password
        });
        
       console.log('Added');
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
          
        });
       
    }
  return (
    <div>
   <center>
    <h1>Sign up Form </h1>
    <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} /><br />
    <input type="email" placeholder='Email'onChange={(e)=>setEmail(e.target.value)}  /><br />
    <input type="password" placeholder='Password' onChange={(e)=>setpassword(e.target.value)} /><br />
    <button onClick={Signup} >Sign up now</button>
     </center>
    </div>
  )
}

