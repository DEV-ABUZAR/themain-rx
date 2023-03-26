
import React from 'react'
import Card from 'react-bootstrap/Card';

export default function Footer() {
    return (
        <div className='f-main'>
            <div className='container'>
                <div className="row">
                    <div className='col-lg-3 col-sm-12 col-md-6 pt-5'>
                        <Card style={{ width: '15rem' , background: 'transparent' , border: 'none' }}>

                            <Card.Body>

                                <h1 className=' blog-post'> MainRX </h1>
                                <Card.Text>
                                    <div className="content">
                                        <div className="items">
                                            Home
                                        </div>
                                        <div className="items">
                                        shop
                                        </div>
                                        <div className="items">
                                            Need help
                                        </div>
                                        <div className="items">
                                        Profile
                                        </div>
                                        <div className="items">
                                        Blog
                                        </div>
                                    </div>
                                </Card.Text>


                            </Card.Body>

                        </Card>



                    </div>
                    <div className='col-lg-3 col-sm-12 col-md-6 pt-5'>
                        <Card style={{ width: '15rem' , background: 'transparent', border: 'none' }}>

                            <Card.Body>

                                <h1 className=' blog-post'> More Page</h1>
                                <Card.Text>
                                    
                                <div className="content">
                                        <div className="items">
                                        Order
                                        </div>
                                        <div className="items">
                                      Your prescriptions
                                        </div>
                                        <div className="items">
                                            Prescription invoices
                                        </div>
                                        <div className="items">
                                        Shop invoices
                                        </div>
                                        <div className="items">
                                        Notifications
                                        </div>
                                        <div className="items">
                                        Track Order
                                        </div>
                                    </div>
                                </Card.Text>


                            </Card.Body>

                        </Card>



                    </div>
                    

                    <div className='col-lg-3 col-sm-12 col-md-6 pt-5'>
                        <Card style={{ width: '15rem' , background: 'transparent' , border: 'none' }}>
                           
                                <Card.Body>
                                    <h1 className='blog-post'>  Contact Us</h1>
                                    
                                <Card.Text>
                                    <div className="content">
                                        <div className="items">
                            <img src="/bphone.png" alt="" />                (972)788382322
                                        </div>
                                        <div className="items">
                               <img src="/bemail.png" alt="" />         mrxfarmica@gmail.com
                                        </div>
                                        <div className="items">
                                <img src="bmap.png" alt="" />            594 Main Avenue passica New Jersey
                                        </div>
                                        
                                    </div>
                                </Card.Text>


                                
                                </Card.Body>
                            
                        </Card>


                    </div>

                    <div className='col-lg-3 col-sm-12 col-md-6 pt-5'>
                        <Card style={{ width: '15rem' , background: 'transparent', border: 'none' }}>
                            
                                <Card.Body>
                                     <div className="blog-post"> News Letter</div>
                                   

                                     <div className="items">
                                            Sing up on alters for saving and specials of the month
                                        </div>
                                        <button className='b-buton'> Subsecribe</button>
                                        <div className="f-icons">
                                            <img src="/instagram.png" className="f-icon"alt="" />
                                            <img src="facebook.png" className="f-icon" alt="" />
                                            <img src="/pinterest.png" className="f-icon" alt="" />
                                            <img src="/whatsapp.png" className="f-icon" alt="" />
                                        </div>

                                </Card.Body>
                            
                        </Card>


                    </div>

                </div>

            </div>

        </div>
    )
}

