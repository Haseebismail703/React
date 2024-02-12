import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../pages/Home';
import All from '../pages/All';
import Contact from "../pages/Contact";
import Note from "../pages/Note";
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import Userdas from "../pages/Userdas";
import Post from '../pages/Post'
import Profile from "../pages/Profile";
import '../style/Home.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
function ColorSchemesExample() {
  return (
    <BrowserRouter>
    
      <Navbar fixed="top" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'} >Blog</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/All">All Blog's</Nav.Link>
            <Nav.Link as={Link} to= '/Contact'>Contact</Nav.Link>
            <Nav.Link as={Link} to= '/userdas'>Userdas</Nav.Link>

          </Nav>
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Hi Haseeb
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item as={Link}  to={'/Profile'}>Profile</Dropdown.Item>
        <Dropdown.Item >Log out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Container>
      </Navbar>

      <Routes>
        <Route path="*" element={<Note/>} />
        <Route path="/" element={<Home />} />
        <Route path="/All" element={<All />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/Signup" element={<Signup />} /> 
        <Route path="/Signin" element={<Signin />} /> 
        <Route path="/userdas" element={<Userdas/>} /> 
        <Route path="/Post" element={<Post/>} /> 
        <Route path="/Profile" element={<Profile/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default ColorSchemesExample;
