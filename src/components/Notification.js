import React from 'react'



export default function Notification() {
    return (
        <div>
            
            <div className="containero">
                <div className="row">
                    <div className="col">

                        <div className="order-heading">
                            My Nnotification
                            <div className="message-bubble">
                                There is no data about Notification
                                <button className='b-botton'> 0 off o</button>
                            </div>

                        </div>




                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="order-left">
                            <div className="order">
                                <img src="animation.svg" alt="" className='animation' />
                                <h3> Notification Details
                                </h3>

                            </div>
                            <div className="order-img">
                                <img src="/notification.gif" alt="" className='o-img' />

                                <div className="buttonn">
                                    <button style={{
                                        background: 'transparent',
                                        border: 'none',
                                        paddingTop: '13px' , color: 'white'}}> Go to More Details</button>
                                        <img   src="right-arrow.png" alt=""  style={{width: '12px',
    paddingBottom: '5',
    marginBottom: '4px',
    marginleft: '6px',}}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
            </div >
        
  )
}
