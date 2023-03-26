import React from 'react'


export default function Shop() {
  return (
    <div>
      <div className="containero">
        <div className="row">
            <div className="col">
              
                <div className="order-heading">
                    My Shop invoices
                    <div className="message-bubble">
                 There is no data about Shop Invoices
                 <button className='b-botton'> 0 off o</button>
                </div>
               
                </div>
                

                       
                    
                       </div>
                       
                       <div className="col-lg-7 col-md-12">
                        <div className="order-left">
                       <div className="order">
                       <img src="animation.svg" alt="" className='animation' />
                        <h3> Shop Invoices Details
                        </h3>
                        
                    </div>
                       <div className="order-img">
                            <img src="/orderimg.jpg" alt="" className='o-img'/>
                            <div className="no-order">
                            No Selected Shop Invoices
                        </div>
                        <p> NO selected  Shop Invoices yet and no order added yet. Add Shop Invoices first to view</p>
                        </div>
                       </div>
                       </div>
                   </div>

            </div>
            </div>
        
  )
}
