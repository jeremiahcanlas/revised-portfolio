import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {Navbar, Nav} from 'react-bootstrap'
import Modalcomponent from './modal';
import mainLogo from '../resource/jc2.png'





function Navigation() {
    const [expanded, setExpanded] = useState(false)
  
    const hideOnScroll = () => { //hides uncollapsed nav when window is scrolled

        window.addEventListener('scroll', hideNav)
       
    }
      
    const hideNav = () => { // when link is triggered it will set expanded = false
        setExpanded(false)
    }

    const toggleNav = () => { //toggles state hook 
        setExpanded(expanded? false : "expanded" )
        
    }

    useEffect(() => hideOnScroll) //to use hideScroll on load


    return (

        <Navbar  expand='lg' variant='dark' expanded={expanded} fixed='top'>
            <Navbar.Brand href='#jeremiah' className='nav-link'>
                <img
                src={mainLogo}
                alt='logo'
                />
            </Navbar.Brand>
            <div>
            <Navbar.Toggle aria-controls='basic-navbar-nav' onClick={toggleNav}> 
               {expanded ? <FontAwesomeIcon icon={faTimes} /> : '' /* font awesome icon will appear when nav bar is expanded */} 
            </Navbar.Toggle>
            <Modalcomponent expanded={expanded}/>
            </div>

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
