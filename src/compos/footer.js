import React from 'react'
import logo from '../resource/jc2.png'

function Footer() {
    return (
        <footer>
            <div className='mx-3'>
                <p>&copy; Copyright 2020</p>
                <img
                src={logo}
                alt='Jeremiah Canlas'
                />
            </div>
        </footer>
    )
}

export default Footer;