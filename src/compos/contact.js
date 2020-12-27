import React from 'react'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faLinkedinIn,faCodepen } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faHandshake,faEnvelopeSquare, faDownload} from "@fortawesome/free-solid-svg-icons";




function Contact() {
    return (
        <div className='contact-section' id='contact'>
            <div className='contact-header'>
                <FontAwesomeIcon icon={faHandshake}/>
                <h1>Let's <span>Work</span> Together!</h1>
            </div>
            <div className='contactLinks'>
              <div className='contact-link'>
                <Button className='btn btn-primary' href='https://github.com/jeremiahcanlas' target='_blank'>
                  <FontAwesomeIcon icon={faGithub}/>
                </Button>
                <p className='d-none d-md-block'>Github</p>
              </div>
              <div className='contact-link'>
                <Button className='btn btn-primary' href='https://www.linkedin.com/in/jeremiahcanlas/' target='_blank'>
                  <FontAwesomeIcon icon={faLinkedinIn}/>
                </Button>
                <p className='d-none d-md-block'>LinkedIn</p>
              </div>
              <div className='contact-link'>
                <Button href='https://codepen.io/jeremiahcanlas/pens/public' target='_blank'>
                  <FontAwesomeIcon  icon={faCodepen}/>
                </Button>
                <p className='d-none d-md-block'>Codepen</p>
              </div>
              <div className='contact-link'>
                <Button href='mailto:info@jeremiahcanlas.com' target='_blank'>
                  <FontAwesomeIcon  icon={faEnvelope}/>
                </Button>
                <p className='d-none d-md-block'>Email Me</p>
              </div>
            </div>
            <div className='contact-footer'>
              <div className='contact-footer-item'>
                <FontAwesomeIcon icon={faEnvelopeSquare}/>
                <a href='mailto:info@jeremiahcanlas.com' rel="noreferrer" target='_blank'>info@jeremiahcanlas.com</a>
              </div>
              <div className='contact-footer-item resume'>
                  <FontAwesomeIcon icon={faDownload}/>
                  <a href='resources/Resume.pdf' target='_blank' download>Download My Resume</a>
              </div>
            </div>
        </div>
    )
}

export default Contact;