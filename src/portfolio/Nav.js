import React, {Fragment } from 'react';
import '../App.css'




const Nav =() =>{
    return(
        <Fragment >
                <nav className="navbar navbar-expand-lg mb-0 navbar-dark  ">
                <a className="navbar-brand" href="/" style={{fontSize:'40px', color:'white', fontFamily: 'Balsamiq Sans', marginRight:'auto'}}> Kolikay</a>
                
                <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav navbar-right">
                    <a className="nav-item nav-link  active" href="/" style={{fontSize:'20px', color:'white',  marginRight:'30px'}}>Home page<span className="sr-only">(current)</span></a>

                    <a className="nav-item nav-link" href="#aboutme"style={{fontSize:'20px', color:'white',  marginRight:'30px'}}>About</a>
                    {/* <a className="nav-item nav-link " href="#resume"style={{fontSize:'20px', color:'white',  marginRight:'30px'}}>Resume</a> */}
                
                    <a className="nav-item nav-link" href="#projects"style={{fontSize:'20px', color:'white',  marginRight:'30px'}}>Projects</a>
                    <a className="nav-item nav-link" href="#contact"style={{fontSize:'20px', color:'white',  marginRight:'30px'}}>Contact</a>
                    </div>
                </div>
                
                </nav>

        </Fragment>
    )
}

export default Nav

