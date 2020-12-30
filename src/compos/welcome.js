import React, {useState, useEffect, useRef}from 'react'
import { faLaptopCode,faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../resource/jc.png'



function Welcome() {
    const [icon,setIcon] = useState(faLaptopCode) //state hook to dynamically change icon on hover
    const [isVisible,setVisible] = useState(true)

    const changeIcon = () => { // this will chnage the intro icon to a different icon on hover

        if(icon === faLaptopCode){
            setIcon(faCode)
        }else {
            setIcon(faLaptopCode)
        }
    }

    const domRef = useRef();

    useEffect(() => {
    const domR = domRef.current
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domR);
      return () => observer.unobserve(domR);
    }, []);
  
    useEffect(() => { //will change the icon on dom mount after 2s
        setTimeout(() => {
            setIcon(faCode)
        },2000)
    }, [])

    useEffect(() => { //when icon is chnaged it will chnage it back to default icon
        setTimeout(() => {
            setIcon(faLaptopCode)
        },5000)
    }, [icon])

    
    return (
        <div className='intro' id='jeremiah'>
            <div className='container'>
                <div   className={`intro-header fade-in-section ${isVisible ? 'is-visible' : ''}`}
                ref={domRef}>
                <h1>Hi, I'm</h1>
                <img
                src={logo}
                alt='intro logo'
                />
                </div>
                <div className={`intro-footer fade-in-section ${isVisible ? 'is-visible' : ''}`}
                ref={domRef}>
                <FontAwesomeIcon icon={icon} onMouseEnter={changeIcon} onMouseLeave={changeIcon} size='2x' className='mb-0'/>
                <p>a front end web developer</p>
                </div>
            </div>
        </div>

    )
}

export default Welcome;