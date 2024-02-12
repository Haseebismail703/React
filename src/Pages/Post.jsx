import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
function Post() {
  return (
    <>
    <center>
        <br /><br /><br />
    <div className='m-5 w-50'    >

    <h1>Creat a new post</h1>

    <>
  <div className="form-group">
    <label htmlFor="">Title</label>
    <div className="input-group">
      
      <input id="text" name="text" type="text" className="form-control m-3 " />
    </div>
  </div>
  <div className="form-group m-3">
    <label htmlFor="text1">Select image</label>
    <input id="text1" name="text1" type="file" className="form-control " />
  </div>
  <div className="form-group m-3">
    <label htmlFor="">Write a text</label>
    <textarea
      id=""
      name=""
      cols={40}
      rows={3}
      className="form-control"
      defaultValue={""}
    />
  </div>
  <div className="form-group">
    <Button   className="btn btn-primary m-3">
      Publish now 
    </Button>
    <Button as={Link} to={'/Userdas'}   className="btn btn-secondary m-3">
     Cancel
    </Button>
  </div>
</>

    </div>
      </center>
      </>


  )
}

export default Post