import React from 'react'
import AppSignup from '../Components/SignupForm'
import { Link, useNavigate } from 'react-router-dom'
import { auth,createUserWithEmailAndPassword } from '../Config/FirebaseConfig'


export default function Signup() {

  const navigate = useNavigate()


  const sfun = (data) => {
    // console.log(data)
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        navigate('/')
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
