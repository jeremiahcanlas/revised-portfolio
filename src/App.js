import './dist/style.css'
import React from 'react'
import Navigation from './compos/navigation'
import Welcome from './compos/welcome'
import Projects from './compos/projects'
import Contact from './compos/contact'
import Footer from './compos/footer'

function App() {




  return (
    <div className="App d-flex flex-column "  >
        <Navigation/>
        <Welcome/>
        <Projects/>
        <Contact/>
        <Footer/> 
    </div>
  );
}

export default App;
