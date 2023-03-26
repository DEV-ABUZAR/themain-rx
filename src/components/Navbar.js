import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../App.css'
function BasicExample() {
  return (
    <Navbar bg="transparent" expand="lg" className="container-fluid">
      <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <div className="logo"> <img src="/logo1.png" alt="" sizes="" srcset="" /> </div>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="goto">Go To  Dashbord</Nav.Link>
            <Link to="/Home" className="home"> Home </Link>
            <Nav.Link href="#link" className="shop">  <img src="/bag.png" alt="" srcset=""  className="bag"/> Shop</Nav.Link>


            
          </Nav>
        </Navbar.Collapse>
        <NavDropdown title={<span>  <img src="/user1.jpg" alt=""  className='user-img' /></span>} id="basic-nav-dropdown" >  
              <NavDropdown.Item href="#action/3.3" className="drop">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="drop">
                Checkout
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="drop"> Term and Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="drop"> Privacy Policy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="drop"> Hipa info</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="drop">Setting</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="drop"> Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="drop"> Conatct US</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="drop"> Log out</NavDropdown.Item>
             
              
            </NavDropdown>
    
    </Navbar>
  );
}

export default BasicExample;