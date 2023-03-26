import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function MyModal() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
    
     <Button  className="m-btn" onClick={handleShow} >
       +
      </Button>

   
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
        
        </Modal.Header>
        <div className="m-main">
        <div className="m-text">
            <h2>Lets's Add Your Prescroptions</h2> <br/>
           <p> Let's Add your Prescriptions You have three ways to add </p>
        </div>
        <div className="m-img">
        <img src="/orderimg.jpg" alt=""/>
        </div>
    </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
<Button variant="primary" onClick={handleClose}>
  Save Changes
</Button>

        </Modal.Footer>
      </Modal>
      
        
    </>
  );
}

export default MyModal;
