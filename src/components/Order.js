import React from 'react'
import MyModal from './modal'

export default function Order() {
  return (
    <div>
      <div className="containero">
        <div className="row">
            <div className="col">
              
                <div className="order-heading">
                    My Orders
                    
                    <div className="message-bubble">
                 There is no data about orders
                 <button className='b-botton'> 0 off o</button>
                </div>
               
                </div>
                
                       
                    
                       </div>
                       
                       <div className="col-lg-7 col-md-12">
                        <div className="order-left">
                       <div className="order">
                       <img src="animation.svg" alt="" className='animation' />
                        <h3> Orders Details
                        <MyModal/>
                        </h3>
                       
                        
                    </div>
                       <div className="order-img">
                            <img src="/orderimg.jpg" alt="" className='o-img'/>
                            <div className="no-order">
                            No Selected Order
                        </div>
                        <p> NO selected order yet and no order added yet. Add order first to view</p>
                        </div>
                       </div>
                       </div>
                   </div>

            </div>
            </div>
        
  )
}
