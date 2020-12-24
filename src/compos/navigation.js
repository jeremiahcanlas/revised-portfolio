import React, {useState} from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {Navbar, Nav} from 'react-bootstrap'
import Modalcomponent from './modal';




function Navigation() {
    const [expanded, setExpanded] = useState(false)
  
  
    
    const hideNav = () => { // when link is triggered it will set expanded = false
        setExpanded(false)
    }

    const toggleNav = () => { //toggles state hook 
        setExpanded(expanded? false : "expanded" )
    }




    return (
        <Navbar bg='dark' expand='lg' variant='dark' expanded={expanded} fixed='top'>
           <Navbar.Toggle aria-controls='basic-navbar-nav' onClick={toggleNav}> 
               {expanded ? <FontAwesomeIcon icon={faTimes} /> : '' /* font awesome icon will appear when nav bar is expanded */} 
            </Navbar.Toggle>
            <Modalcomponent expanded={expanded}/>
           <Navbar.Collapse id='basic-navbar-nav' className='navlist'>
                <Nav className='mr-auto' >
                    <Nav.Link onClick={hideNav}  href='#projects'>
                        Projects
                    </Nav.Link>
                    <Nav.Link onClick={hideNav} href='#contact'>
                        Contact
                    </Nav.Link>
                </Nav>
           </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;
