import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'
import Profile from './Profile';
import Order from './Order';
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import Needc from './Needc';
import Needh from './Needh';
import Notification from './Notification';
import Prescription from './Prescription';
import Shop from './Shop';
import Track from './Track';
import Yprescription from './Yprescription';



function MySidebar() {
    return (
        <div className="container fluid">
            <div className="row ">
                <div className="col-lg-3">
                    <div className="top">
                    <Link to ="/Order" className="sectiono" > <img src="/shopping-cart.png" alt="" srcset="" className="icons" />   Order</Link>
                    <Link to="/Yprescription" className="section1" > <img src="/book.png" alt="" srcset="" className="icons" />Your Prescriptions</Link>
                    <Link to="/Prescription invoices" className="section1" > <img src="/clipboard.png" alt="" srcset="" className="icons" /> Prescription invoices</Link>
                    <Link to="/Shop invoices" className="section1" > <img src="/bag.png" alt="" srcset="" className="icons" />Shop Invoices</Link>
                    <Link to="/notifications" className="section1" > <img src="/bell.png" alt="" srcset="" className="icons" />Notifications</Link>
                    <Link to="/Track orders" className="section1" > <img src="/track.png" alt="" srcset="" className="icons" />Track Order</Link>
                    <Link to="/Need help" className="section1" > <img src="question.png" alt="" srcset="" className="icons" />Need Help</Link>
                    <Link to="/profile" className="section1" ><img src="/alert.png" alt="" srcset="" className="icons" />Need Consultancy</Link>
                    </div>
                    <div className="bottom">
                    <Nav.Link href="order" className="section2" ><img src="/user.png" alt="" srcset="" className="icons" />Pofile</Nav.Link>
                    <Nav.Link href="order" className="section2" > <img src="/family.png" alt="" srcset="" className="icons" />Family Members</Nav.Link>
                    <Nav.Link href="order" className="section2" > <img src="/bubble.png" alt="" srcset="" className="icons" />Allergies</Nav.Link>
                    <Nav.Link href="order" className="section2" > <img src="/shield.png" alt="" srcset="" className="icons" />Insurances</Nav.Link>
                    <Nav.Link href="order" className="section2" > <img src="/box.png" alt="" srcset="" className="icons" />Packing Type</Nav.Link>
                    <Nav.Link href="order" className="section2" > <img src="/logout.png" alt="" srcset="" className="icons" />Log Out</Nav.Link>
                </div>
                </div>
                    

                <div className="col-lg-9" >
                <Routes>
       <Route path="/Order" element={<Order /> } />
       <Route path="/Yprescription" element={<Yprescription /> } />
    
  
       <Route path="/" element={<Profile /> } />
       <Route path="/Prescription invoices" element={<Prescription /> } />
       <Route path="/Shop invoices" element={<Shop /> } />
       <Route path="/notifications" element={<Notification /> } />
       <Route path="/Track orders" element={<Track /> } />
       <Route path="/Need help" element={<Needh /> } />
       <Route path="/Profile" element={<Profile /> } />
    
    </Routes>
                   
                </div>

            </div>
        </div>
    );
}

export default MySidebar;