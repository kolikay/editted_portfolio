import React, {Fragment } from 'react';
import { Link } from 'react-router-dom'
import '../App.css'




const Nav =() =>{
    return(
        <Fragment >
                <nav className="navbar navbar-expand-lg mb-0 navbar-dark  ">
                <Link className="navbar-brand" to="/" style={{fontSize:'40px', color:'white', fontFamily: 'Balsamiq Sans', marginRight:'auto'}}> Kolikay</Link>
                
                <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav navbar-right">
                    <Link className="nav-item nav-link  active" to="/" style={{fontSize:'20px', color:'white',  marginRight:'30px'}}>Home page<span className="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link" to="/project"style={{fontSize:'20px', color:'white',  marginRight:'30px'}}>Project</Link>
                    <Link className="nav-item nav-link" to="/aboutme"style={{fontSize:'20px', color:'white',  marginRight:'30px'}}>About</Link>
                    <Link className="nav-item nav-link " to="/resume"style={{fontSize:'20px', color:'white',  marginRight:'30px'}}>Resume</Link>
                    {/* <Link className="nav-item nav-link " to="/contact"style={{fontSize:'20px', color:'white',  marginRight:'30px'}}>Contact</Link> */}
                    <a className="nav-item nav-link" href="/contact"style={{fontSize:'20px', color:'white',  marginRight:'30px'}}>Contact</a>
                    </div>
                </div>
                
                </nav>

        </Fragment>
    )
}

export default Nav

