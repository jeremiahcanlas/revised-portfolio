import React, {useState,useEffect,useRef} from 'react'
import {Carousel,Button}from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCodepen} from '@fortawesome/free-brands-svg-icons'
import { faSignInAlt} from "@fortawesome/free-solid-svg-icons";
import p1 from '../resource/1.png'
import p2 from '../resource/2.png'
import logo from '../resource/jc2.png'




function Projects() {
    const [index, setIndex] = useState(0);
    const [isVisible,setVisible] = useState(true)


    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    const domRef = useRef();

    useEffect(() => {
    const domR = domRef.current
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domR);
      return () => observer.unobserve(domR);
    }, []);


    return (
        <div className='project-section' id='projects'>

            <div className={`project-header fade-in-section ${isVisible ? 'is-visible' : ''}`}
                ref={domRef}>
                <h1>Projects</h1> 
            </div>

            <div className={`project-body fade-in-section ${isVisible ? 'is-visible' : ''}`}
                ref={domRef}>

            <Carousel activeIndex={index} onSelect={handleSelect} >

                <Carousel.Item>
                    <div className='proj' >
                        <img
                        className="d-block"
                        src={p1}
                        alt="First Slide"
                        />
                    </div>
                    <Carousel.Caption className={`description fade-in-section ${isVisible ? 'is-visible' : ''}`}
                ref={domRef}>
                        <h3>Golden Image Esthetics Official Website</h3>
                        <div className='row project-btn'>
                            <Button href='https://github.com/jeremiahcanlas/GIE.github.io' target='_blank' >
                                <FontAwesomeIcon icon={faGithub}/>
                            </Button>
                            <Button href='https://goldenimageesthetics.ca/' target='_blank' >
                                <FontAwesomeIcon icon={faSignInAlt}/>
                            </Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <div className='proj' >
                        <img
                        className="d-block p2"
                        src={p2}
                        alt="Second Slide"
                        />
                    </div>
                    <Carousel.Caption className={`description fade-in-section ${isVisible ? 'is-visible' : ''}`}
                ref={domRef}>
                        <h3>Homecare On Wheels Official Website</h3>
                        <div className='row project-btn'>
                            
                            <Button href='https://github.com/jeremiahcanlas/HCW.github.io' target='_blank' >
                                <FontAwesomeIcon icon={faGithub}/>
                            </Button>
                            <Button href='https://www.homecareonwheels.ca/' target='_blank' >
                                <FontAwesomeIcon icon={faSignInAlt}/>
                            </Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <div className='proj' >
                        <img
                        className="d-block more"
                        src={logo}
                        alt="Third Slide"
                        />
                    </div>
                    <Carousel.Caption className={`description fade-in-section ${isVisible ? 'is-visible' : ''}`}
                ref={domRef}>
                        <h3>View <span>More</span> Of My Work</h3>
                        <div className='row project-btn'>
                            <Button href='https://github.com/jeremiahcanlas' target='_blank' >
                                <FontAwesomeIcon icon={faGithub}/>
                            </Button>
                            <Button href='https://codepen.io/jeremiahcanlas/pens/public' target='_blank' >
                                <FontAwesomeIcon icon={faCodepen}/>
                            </Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

            </div>
        </div>
    )
}

export default Projects;
