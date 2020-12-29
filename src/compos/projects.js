import React, {useState} from 'react'
import {Carousel}from 'react-bootstrap'


function Projects() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    return (
        <div className='project-section' id='projects'>
            <div className='project-header'>
                <h1>Projects</h1> 
            </div>

            <div className='project-body'>
            <Carousel activeIndex={index} onSelect={handleSelect}>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="resources/1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Golden Image Esthetics Official Website</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="resources/2.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Homecare On Wheels Official Website</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="resources/3.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>More Projects</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

            </div>
        </div>
    )
}

export default Projects;
