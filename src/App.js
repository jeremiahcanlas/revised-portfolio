import React, {useEffect} from 'react'
import Navigation from './compos/navigation'
import Welcome from './compos/welcome'
import Projects from './compos/projects'
import Contact from './compos/contact'
import Footer from './compos/footer'
import $ from 'jquery'


function App(){

  const smoothScroll = () => { //smooth scroll using jquery
    $('.nav-link').click(function( e ){  
      e.preventDefault();
      var targetId = $(this).attr("href");
      var top = $(targetId).offset().top ; // set +/- here***
      $('html, body').stop().animate({scrollTop: top }, 1000);
  });

  }

  const welcomeFade = () => { //intro fade in when dom loads
    
    $('.intro').hide().fadeIn(2000)
  }

  useEffect(() => {
    smoothScroll()
  })

  useEffect(() => {
    welcomeFade()
  })

    return (
      <div className="App d-flex flex-column">
          <Navigation/>
          <Welcome/>
          <Projects/>
          <Contact/>
          <Footer/> 
      </div>
    );
  

}

export default App;
