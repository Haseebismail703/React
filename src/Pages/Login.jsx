import React from 'react'
import AppLogin from '../Components/LoginForm'
import { Link, useNavigate } from 'react-router-dom'
import {auth, signInWithEmailAndPassword} from '../Config/FirebaseConfig'

export default function Login() {

  const navigate = useNavigate()

  const lfun = (data) => {
    // console.log(data)
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        navigate('/profile')

      })
      .catch((error) => {
        console.log(error)
      });

  }

  return (
    <div style={{ margin: '50px'}}>
      <h1>Login</h1>
      <AppLogin lfun={lfun} />
      <p>Don't have an account ? <Link to={'/signup'}>Signup</Link> </p>
    </div>
  )
}
