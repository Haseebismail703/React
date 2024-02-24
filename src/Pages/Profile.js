import React from 'react'
import { getAuth ,signOut } from "../config/Confiq";
function Profile() {
  return (
    <div>
     <center>
      <h1>Profile</h1>
      <button>Signout</button>
      <br /><br /><br />
      <input type="text" placeholder='Name' /><br /><br />
      
       <button >Update</button><br /><br />
       <input type="file" /><br /><br />
       <button>Upload</button>
     </center>
      </div>
  )
}

export default Profile