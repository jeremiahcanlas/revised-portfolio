import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAddressCard,faMugHot,faArrowCircleLeft,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare,faLinkedin,faCodepen } from '@fortawesome/free-brands-svg-icons'

function Modalcomponent({expanded}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    
    
    return (
        <>
      {!expanded ? <Button variant="primary" className='d-lg-none modalBtn' onClick={handleShow}>
            <FontAwesomeIcon icon={faAddressCard}/>
        </Button> : '' /* if nav bar is expanded then the btn disappears */} 
  
        <Modal show={show} className='contactModal' centered onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>
              How do you take your coffee? 
              <FontAwesomeIcon icon={faMugHot}/>
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            < div className='modalLinks'>
              <div className='modal-link'>
                <Button className='btn btn-primary' href='https://github.com/jeremiahcanlas' target='_blank'>
                  <FontAwesomeIcon icon={faGithubSquare}/>
                </Button>
                <p>Github</p>
              </div>
              <div className='modal-link'>
                <Button className='btn btn-primary' href='https://www.linkedin.com/in/jeremiahcanlas/' target='_blank'>
                  <FontAwesomeIcon icon={faLinkedin}/>
                </Button>
                <p>LinkedIn</p>
              </div>
              <div className='modal-link'>
                <Button href='https://codepen.io/jeremiahcanlas/pens/public' target='_blank'>
                  <FontAwesomeIcon  icon={faCodepen}/>
                </Button>
                <p>Codepen</p>
              </div>
              <div className='modal-link'>
                <Button href='mailto:info@jeremiahcanlas.com' target='_blank'>
                  <FontAwesomeIcon  icon={faEnvelope}/>
                </Button>
                <p>Email me</p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button size='sm' variant="secondary" onClick={handleClose}>
              <FontAwesomeIcon icon={faArrowCircleLeft}/> Back
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default Modalcomponent;
