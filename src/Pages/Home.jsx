import { Button, Image, Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'
import img from '../Image/Blog-intro.jpg'
import '../style/Home.css'
import i from '../Image/i.png'
import m from '../Image/m.png'
import g from '../Image/g.png'
import Foter from '../Components/Foter'
function Home() {
  return (
    <>
      <div className="container px-5 pb-5">
        <div className="row gx-5 align-items-center">
          <div className="col-xxl-5">
            <div className="text-center text-xxl-start">
              <div className="badge bg-gradient-primary-to-secondary text-white mb-4">

              </div>
              <div className="fs-3 fw-light p text-muted">
                I can help your business to
              </div>
              <h1 className="display-3 fw-bolder mb-5">
                <span className="text-gradient d-inline">
                  Get online and grow fast
                </span>
              </h1>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                <Button as={Link} to="/Signup" className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" >Sign up Now </Button>
                <Button as={Link} to="/Signin" className="btn btn-secondary btn-lg px-5 py-3 fs-6 fw-bolder" >Sign in now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <center>
          <Image className='img' src={img} fluid />
        </center>
      </div>

      {/* card  */}
      {/* <center> */}
      <>
        <div className="main  m-5 ">

          <h1>How to Publish your'e First Blog</h1>
          <ul className="cards">
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <center>
                    <img className='imgg' src={i} />
                  </center>


                </div>
                <center>


                  <div className="card_content">
                    <h2 className="card_title">Creat a new account</h2>
                    <p className="card_text">
                      Click Sign up button and enter your'e email and password
                    </p>
                  </div>
                </center>
              </div>
            </li>




            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <center>
                    <img className='imgg' src={m} />
                  </center>
                </div>
                <div className="card_content">
                  <center>
                    <h2 className="card_title">Update youre profile</h2>
                    <p className="card_text">
                      Click profile icon and save your'e personal information
                    </p>
                  </center>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <center>
                    <img className='imgg' src={g} />
                  </center>
                </div>
                <div className="card_content">
                  <center>
                    <h2 className="card_title">Publish your'e Blog</h2>
                    <p className="card_text">
                      Click the create now button write and publish your'e blog
                    </p>
                  </center>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </>


      <Foter/>

    </>

  )


}

export default Home