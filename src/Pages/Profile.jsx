import React from 'react'
import '../style/Home.css'
function Profile() {
  return (
    
    <div>
      
      <div className="container rounded bg-white mt-5 mb-5">
  <div className="row">
    <div className="col-md-3 border-right">
      <div className="d-flex flex-column align-items-center text-center p-3 py-5">
        <img
          className="rounded-circle mt-5"
          width="150px"
          src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
        />




<div className="input--file">
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <circle cx={12} cy={12} r="3.2" />
      <path d="M9 2l-1.83 2h-3.17c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2h-3.17l-1.83-2h-6zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
      <path d="M0 0h24v24h-24z" fill="none" />
    </svg>
  </span>
  <input name="Select File" type="file" />
</div>



        <span className="font-weight-bold">Edogaru</span>
        <span className="text-black-50">edogaru@mail.com.my</span>
        <span> </span>
      </div>
    </div>
    <div className="col-md-5 border-right">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-right">Profile Settings</h4>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <label className="labels">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="first name"
              defaultValue=""
            />
          </div>
          <div className="col-md-6">
            <label className="labels">Surname</label>
            <input
              type="text"
              className="form-control"
              defaultValue=""
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <label className="labels">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              defaultValue=""
              disabled
              title='email does not changable'
            />
          </div>


          <div className="col-md-12">
            <label className="labels">Number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter  mobile number "
              defaultValue=""
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="*********"
              defaultValue=""
            />
          </div>
        
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="labels">Country</label>
            <input
              type="text"
              className="form-control"
              placeholder="country"
              defaultValue=""
            />
          </div>
          <div className="col-md-6">
            <label className="labels">State/Region</label>
            <input
              type="text"
              className="form-control"
              defaultValue=""
              placeholder="state"
            />
          </div>
        </div>
        <div className="mt-5 text-center">
          <button className="btn btn-primary profile-button" type="button">
            Save Profile
          </button>
        </div>
      </div>
    </div>

   
  </div>
</div>

      </div>
  )
}

export default Profile