import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAddressCard} from "@fortawesome/free-solid-svg-icons";


function Modalcomponent({expanded}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    
    
    return (
        <>
      {!expanded ? <Button variant="primary" className='d-lg-none modalBtn' onClick={handleShow}>
            <FontAwesomeIcon icon={faAddressCard}/>
        </Button> : '' /* if nav bar is expanded then the btn disappears */} 
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
    )
}

export default Modalcomponent;
