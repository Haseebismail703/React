import React, { useState } from 'react'
import {getAuth, collection, getDocs, signOut, db, doc, updateDoc,auth, setDoc,storage,ref, uploadBytes, uploadBytesResumable, getDownloadURL ,addDoc } from "../config/Confiq";
function Storage() {

    const [img,setimg] = useState('')
    const [img1,setimg1] = useState('')
    const [id,setid] = useState('')
    let u = ()=>{
        // console.log(img.name);
        const mountainsRef = ref(storage, `images/${img.name}`);
        uploadBytes(mountainsRef, img).then((snapshot) => {
          console.log('Uploaded a blob or file!');
        });
        const uploadTask = uploadBytesResumable(mountainsRef, img);
    
    
    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        console.log(error , 'error...');
      }, 
      () => {
       
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          console.log('File available at', downloadURL);
      const doc = await addDoc(collection(db, "url"), {
            url : downloadURL
        });
          
         console.log('Added');
        });
      }
    );
    
      
      }


let up = (id)=>{
     // console.log(img.name);
     const mountainsRef = ref(storage, `images/${img1.name}`);
     uploadBytes(mountainsRef, img1).then((snapshot) => {
       console.log('Uploaded a blob or file!');
     });
     const uploadTask = uploadBytesResumable(mountainsRef, img1);
 
 
 uploadTask.on('state_changed', 
   (snapshot) => {
     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
     console.log('Upload is ' + progress + '% done');
     switch (snapshot.state) {
       case 'paused':
         console.log('Upload is paused');
         break;
       case 'running':
         console.log('Upload is running');
         break;
     }
   }, 
   (error) => {
     console.log(error , 'error...');
   }, 
   () => {
    
     getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
       console.log('File available at', downloadURL);
       const washingtonRef = doc(db, "url"  )
       await updateDoc(washingtonRef, {
       url : downloadURL
    });
       
      console.log('update');
     });
   }
 );
}
  return (
    <div>
        <center>
            <input type="file"  onChange={(e)=> setimg(e.target.files[0])} /><br /><br />
        <button onClick={u} >Upload</button>
        </center>
        <br /><br />
      
        <center>
            <input type="file"  onChange={(e)=> setimg1(e.target.files[0])} /><br /><br />
        <button onClick={up} >Update</button>
        </center>



    </div>
  )
}

export default Storage