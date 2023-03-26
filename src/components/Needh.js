import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Needh = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

 

 

  const handleAddData = async () => {
    try {
      const response = await axios.post('http://localhost:4000/meds', {
        name: name,
        time: time
      });
      setData([...data, response.data]);
      setName("");
      setTime("");
    } catch (error) {
      console.log(error);
    }
  }
 
  return (
   <><div className="col-lg-7 col-md-12">
                        <div className="order-left">
                       <div className="order">
                       
                       
                        
                    </div>
                       <div className="order-img">
                            <img src="/orderimg.jpg" alt="" className='o-img' style={{width: '100%'}}/>
                            <div className="no-order">
                            No Selected Prescription
                        </div>
                        <p> Add your Prescriptions</p>
                        <div>
                        <input type="text" placeholder="Name" 
    value={name} 
    onChange={(e) => setName(e.target.value)}
    style={{ 
        border: '1px solid #ccc', 
        borderRadius: '4px', 
        padding: '10px',
        marginRight: '10px'
    }} 
/>
<input type="time" placeholder="Time" 
    value={time} 
    onChange={(e) => setTime(e.target.value)}
    style={{ 
        border: '1px solid #ccc', 
        borderRadius: '4px', 
        padding: '10px',
        marginRight: '10px'
    }} 
/>
<button onClick={handleAddData} 
    style={{ 
        backgroundColor: '#4CAF50', 
        color: 'white', 
        border: 'none', 
        borderRadius: '4px', 
        padding: '10px 20px',
        cursor: 'pointer'
    }}
>Add Data</button>

      
      </div>
                        
                        </div>
                       </div>
                      
                       </div>
                     
      {
        data.map((value, index) => {
          return (
            <div key={index}>
              <h1>{value.name}</h1>
              <p>{value.time}</p>
            </div>
          )
        })
      }
    
                      
                       </>
                       
  )
}
export default Needh;


