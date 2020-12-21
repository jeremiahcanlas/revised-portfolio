import React from 'react'

const hideNav = () => {
    const element =  document.querySelector('.navlist')
    element.classList.remove('show')
}


function Navigation() {

  
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler navBtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-list" aria-controls="navbar-list" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navlist" id="navbar-list">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link" onClick={hideNav} href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={hideNav} href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
