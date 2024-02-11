import React, { useState } from 'react'
import { signOut,auth,getDocs,db,collection } from "../Config/FirebaseConfig";
import { useNavigate } from 'react-router-dom';
export default function Profile() {
  const [value,setvalue] = useState()
  let navigate = useNavigate()
let logout = ()=>{


  signOut(auth).then(() => {
    console.log('Logout');
    navigate('/')
  }).catch((error) => {
    console.log('Failed');
  });


}

let getdata = async()=>{
 
  const querySnapshot = await getDocs(collection(db, "cities"));
  querySnapshot.forEach((doc) => {
  console.log(doc.data())
  // setvalue(doc)
});
}


getdata()

  return (
   

    <div>

      
      <h1>Profile</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
