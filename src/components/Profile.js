import React from 'react'

export default function Profile() {
  return (
    <div>
       
                    <div className="profile">
                        <h3> Your Profile
                        </h3>
                    </div>

                   <div className="info">
                    <div className="left" >
                    <div className="user">
                        <img src="/user1.jpg" alt="" className='user1'/>

                    </div>
                    <h2>USER NAME</h2>
                    </div>
                    <div className="right">
                       <div className="details">
                        <h3 className="iinfo"> Information</h3>
                    <hr></hr>
                    <h3 className="iinfo"> <img src="/email.png" alt="" className='icons'/> Email</h3>
                    <div className="gray"> mrxmain@gmail.com</div>
                    <hr></hr>
                    <h3 className="iinfo"> <img src="/call.png" alt=""  className='icons'/> Primary phone </h3>
                    <div className="gray"> (789)44927497</div>

                    <hr></hr>
                    <div className="date">
                    <h3 className="iinfo"> <img src="/calender.png" alt=""  className='icons'/> Birth Date </h3>
                    <hr></hr>
                    <h3 className="iinfo"> <img src="male.png" alt=""  className='icons'/> Gander </h3>
                    <hr></hr>
                    
                    </div>
                    <hr></hr>
                    <div className="date">
                    <h3 className="iinfo"> <img src="/camera.png" alt=""  className='icons'/> CNIC front </h3>
                    <h3 className="iinfo"> <img src="/camera.png" alt=""  className='icons'/> CNIC back </h3>
                    </div>
                    <div className="date">
                        <img src="/cnic.jpg " alt="" className='cnic' />
                        <img src="/cnic.jpg " alt="" className='cnic' />
                    </div>
                       </div>
                       </div>
                   </div>




                </div>

            
  )
}
