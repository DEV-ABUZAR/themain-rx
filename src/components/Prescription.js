
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMeds } from '../feature/medSlice';
import Carousel from 'react-bootstrap/Carousel';


export default function Prescription() {
  const dispatch = useDispatch();
  const meds = useSelector((state) => state.meds.meds);

  const status = useSelector((state) => state.meds.status);
  const error = useSelector((state) => state.meds.error);

  useEffect(() => {
    dispatch(fetchMeds());
  }, [dispatch]);

  const [selectedSlide, setSelectedSlide] = useState(0);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  if (status === 'succeeded') {
    const handleSelect = (selectedIndex, e) => {
      setSelectedSlide(selectedIndex);
    };

    return (
      <div>
        <div className="containero">
          <div className="row">
            <div className="col">
              <div className="order-heading">
                My Prescription Invoices

                <div className="message-bubble" style={{ backgroundColor: 'gray', display: 'contents' }}>

                  {meds.length === 0 ? (
                    <>
                      <p> There is no data about Prescription Invoices</p>
                      <button className="b-botton">0 off o</button>
                    </>
                  ) : (
                    <>
                      <Carousel activeIndex={selectedSlide} onSelect={handleSelect} interval={null}>
                        {meds.map((med) => (
                          <Carousel.Item key={med.id}>
                            <div style={{ backgroundColor: 'gray', borderRadius: '12px' }}>
                              <h4> Medications List</h4>
                              <h3>{med.name}</h3>
                              <p>{med.time}</p>
                            </div>
                          </Carousel.Item>
                        ))}
                      </Carousel>

                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="order-left">
                <div className="order">
                  <img src="animation.svg" alt="" className="animation" style={{ bottom: '86px' }} />
                  <h3>Prescription Invoices details</h3>
                </div>




                {meds.length === 0 ? (
                  <div className="no-order" style={{
                    marginLeft: '98px',
                    Color: 'black'
                  }}>No Selected Invoices</div>
                ) : (
                  <div className="info" c style={{
                    top: '41px',
                    width: ' 125%',
                    left: '11px',
                  }}>
                    <div className="left" >
                      <div className="user">
                        <img src="/user1.jpg" alt="" className='user1' />

                      </div>
                      <h2>USER NAME</h2>
                    </div>
                    <div className="right">
                      <div className="details">
                        <h3 className="iinfo"> <img src="/drugs.png" alt="" className='icons' style={{ marginLeft: '-34px' }} /></h3>

                        {meds[selectedSlide].name}
                        <hr></hr>
                        <h3 className="iinfo"> <img src="/email.png" alt="" className='icons' style={{ marginLeft: '-34px' }} /> Email</h3>
                        <div className="gray"> mrxmain@gmail.com</div>
                        <hr></hr>
                        <h3 className="iinfo"> <img src="/call.png" alt="" className='icons' style={{ marginLeft: '-34px' }} /> Primary phone </h3>
                        <div className="gray"> (789)44927497</div>

                        <hr></hr>
                        <h3 className="iinfo"> <img src="/clock.png" alt="" className='icons' style={{ marginLeft: '-34px' }} /></h3>

                        {meds[selectedSlide].time}




                      </div>

                    </div>

                  </div>)}




              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }

}


