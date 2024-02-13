import React from 'react'
import AppSignup from '../Components/SignupForm'
import { Link, useNavigate } from 'react-router-dom'
import { auth,createUserWithEmailAndPassword,doc ,db,setDoc } from '../Config/FirebaseConfig'


export default function Signup() {

  // const navigate = useNavigate()


  const sfun = (data) => {
    // console.log(data.user)
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async(userCredential) => {
        const user = userCredential.user;
      
        await setDoc(doc(db, "cities", user.uid), {
         Name: data.user,
          email: data.email,
          password: data.password,
          
        });





        console.log(user)
        // navigate('/')
      })
      .catch((error) => {
        console.log(error)
      });
  }
  return (
    <div style={{ margin: '50px' }}>
      <h1>Sign Up</h1>
      <AppSignup sfun={sfun} />
      <p>Already have an account ? <Link to={'/'}>Login</Link></p>
    </div>
  )
}