import React from 'react'


export default function Track() {
    return (
        <div>
            <div className="containero">
                <div className="row">
                    <div className="col-lg-9 col-md-12">










                        <div className="col-lg-7 col-md-12">
                            <div className="track-left">
                                <div className="track-order">
                                    <img src="animation.svg" alt="" className='track-animation' />
                                    <h3> Orders Details
                                    </h3>

                                </div>
                                <div className="bg">
                                    <div className="order-img">
                                        <img src="/notification.gif" alt="" className='o-img' />
                                        <div className="enter">
                                            Enter Your Invoice number and Prescription order
                                        </div>
                                        <div className="from">
                                            <form action="input">


                                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                    <input
                                                        type="text"
                                                        style={{ position:'relative' ,
                                                            width: '100%',
                                                            padding: 10,
                                                            borderRadius: 25,
                                                            border: '1px solid gray',
                                                            outline: 'none',
                                                            fontSize: 20,
                                                        }}
                                                        placeholder="ENTER YOUR NUMBER  "
                                                        
                                                    />
                                                    <img src="loupe.png" alt="" className='search' />
                                                     
                                                    <i
                                                        className="fas fa-search" 
                                                        style={{ padding: 10, cursor: 'pointer' }}/>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
