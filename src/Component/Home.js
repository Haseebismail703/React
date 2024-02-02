import React from 'react'
import App from '../App'

export default function Home() {

   let array = [3,4,5,6]
 let obj = {
    name : 'Haseeb',
    Age : 20 
 }

   
   let res = array.map((data)=> data)
  return (
    <div>
       <h1>{res}</h1>
       <h1>{obj.name}</h1>
    </div>
  )
}
