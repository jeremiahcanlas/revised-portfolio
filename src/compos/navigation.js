import React from 'react'

import {Navbar, Nav} from 'react-bootstrap'




function Navigation() {
    

    const hideNav = () => {
        const element =  document.querySelector('.navlist')
        element.classList.remove('show')
    }


  
    return (
        <Navbar bg='dark' expand='lg' variant='dark'>
           <Navbar.Toggle aria-controls='basic-navbar-nav'/>
           <Navbar.Collapse id='basic-navbar-nav' className='navlist'>
                <Nav className='mr-auto' >
                        <Nav.Link onClick={hideNav} href='#'>Projects</Nav.Link>
                        <Nav.Link onClick={hideNav} href='#'>Contact</Nav.Link>
                </Nav>
           </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;
