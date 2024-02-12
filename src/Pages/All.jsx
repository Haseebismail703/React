import React from 'react'
import {Button} from 'react-bootstrap'
import '../style/Home.css'
function All() {
  return (
    <div>

        <br /><br /><br />
        <>
  <div className="main">
    <h1>All Blog's</h1>
    <ul className="cards">
      <li className="cards_item">




        <div className="card  " >
          <div className="card_image">
            <img src="https://picsum.photos/500/300/?image=10" />
          </div>
          <div className="card_content-all" >
            <h2 className="card_title"   >Card Grid Layout</h2>
            <p className="card_text" >
              Demo of pixel perfect pure CSS simple responsive card grid layout
            </p>
            <Button className="btn card_btn">Read more</Button>
            <hr />
           <p>Post by Haseeb</p>
          </div>
           
        </div>
      </li>





     
    </ul>
  </div>
 
</>

        
        
        </div>
  )
}

export default All