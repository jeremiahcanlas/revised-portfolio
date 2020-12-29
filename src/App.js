import React, {Component} from 'react'
import Navigation from './compos/navigation'
import Welcome from './compos/welcome'
import Projects from './compos/projects'
import Contact from './compos/contact'
import Footer from './compos/footer'
import $ from 'jquery'


class App extends Component {

  smoothScroll = () => { //smooth scroll using jquery
    $('.nav-link').click(function( e ){  
      e.preventDefault();
      var targetId = $(this).attr("href");
      var top = $(targetId).offset().top ; // set +/- here***
      $('html, body').stop().animate({scrollTop: top }, 1000);
  });

  }

  componentDidMount(){ //make sure it mounts on the DOM
    this.smoothScroll()
  }



render() {

    return (
      <div className="App d-flex flex-column"  >
          <Navigation/>
          <Welcome/>
          <Projects/>
          <Contact/>
          <Footer/> 
      </div>
    );
  }

}

export default App;
