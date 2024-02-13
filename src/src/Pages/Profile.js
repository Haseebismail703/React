import React, { useEffect, useState } from 'react'
import {getAuth, collection, getDocs, signOut, db, doc, updateDoc,auth, setDoc,storage,ref, uploadBytes, uploadBytesResumable, getDownloadURL  } from "../config/Confiq";


function Profile() {

  const [data, setData] = useState([''])
  const [loading, setloading] = useState(true)
  const[name,setName]= useState('')
  const[email,setEmail]= useState('')
  const [img,setimg] = useState('')
useEffect(() => {
    let getdata = async () => {
      const querySnapshot = await getDocs(collection(db, "U"));
      const docs = querySnapshot.docs.map((doc)=>doc.data())
      setData(docs)
      setloading(false)
      // console.log(docs);
    }
    getdata()
  }, [])

  // console.log(data);
  let logout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
     console.log('Logout');
    }).catch((error) => {
    
    });
  }


 




  let updatedoc=async(i)=>{
    
   console.log(i);
   
    const id = auth.currentUser.uid
    const washingtonRef = doc(db, "U", id );
    await updateDoc(washingtonRef, {
      name : name,
      email : email,
    });
   setName('')
    // console.log(auth.currentUser)
    // console.log(data[0].name);
    console.log('Update succesfull'); 
  }


  
  return (
    <>
    <div>
      <center>
        {loading ? <> <p>youre name is Loading</p> </> :
           data.length > 0 && 
            <table>
                <thead>
                  <tr><th>Name</th></tr>
                  </thead> 
            <tbody>
              {data.map((user,index) => <tr key={index}><td>{user.name}</td></tr>)}
             </tbody>
             </table>}            
        <h1>Profile</h1>
        <button onClick={logout}>Signout</button>
        <br /><br /><br />
        <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} /><br /><br />
        <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} /><br /><br />
        <button onClick={updatedoc} >Update</button><br /><br />
        <input type="file"  onChange={(e)=> setimg(e.target.files[0])} /><br /><br />
        <button>Upload</button>
        
      </center>
    </div></>
  )
}

export default Profile