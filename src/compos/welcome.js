import React, {useState, useEffect}from 'react'
import { faLaptopCode,faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Welcome() {
    const [icon,setIcon] = useState(faLaptopCode) //state hook to dynamically change icon on hover

    const changeIcon = () => { // this will chnage the intro icon to a different icon on hover

        if(icon === faLaptopCode){
            setIcon(faCode)
        }else {
            setIcon(faLaptopCode)
        }
    }


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
        <div className='intro' >
            <div className='container'>
                <h1>Hi, I'm Jeremiah Canlas</h1>
                <FontAwesomeIcon icon={icon} onMouseEnter={changeIcon} onMouseLeave={changeIcon} size='2x' className='mb-0'/>
                <p>a front-end web developer</p>
            </div>
        </div>

    )
}

export default Welcome;