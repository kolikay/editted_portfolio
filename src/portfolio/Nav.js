import React, {Fragment } from 'react';
import { Link } from 'react-router-dom'



const Nav =() =>{
    return(
        <Fragment>
                <nav className="navbar navbar-expand-lg mb-0 navbar-dark bg-dark">
                <Link class="navbar-brand" to="/" style={{fontSize:'1.5em', color:'rgb(187, 182, 110)', fontFamily: 'Courier New Courier monospace'}}> Kolikay</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav navbar-right">
                    <Link class="nav-item nav-link  active" to="/" style={{fontSize:'1.5em', color:'rgb(187, 182, 110)', fontFamily: 'Courier New Courier monospace', marginRight:'30px'}}>Home page<span class="sr-only">(current)</span></Link>
                    <Link class="nav-item nav-link" to="/project"style={{fontSize:'1.5em', color:'rgb(187, 182, 110)', fontFamily: 'Courier New Courier monospace', marginRight:'30px'}}>Project</Link>
                    <Link class="nav-item nav-link" to="/aboutme"style={{fontSize:'1.5em', color:'rgb(187, 182, 110)', fontFamily: 'Courier New Courier monospace', marginRight:'30px'}}>About</Link>
                    <Link class="nav-item nav-link " to="/resume"style={{fontSize:'1.5em', color:'rgb(187, 182, 110)', fontFamily: 'Courier New Courier monospace', marginRight:'30px'}}>Resume</Link>
                    <Link class="nav-item nav-link" to="/contact"style={{fontSize:'1.5em', color:'rgb(187, 182, 110)', fontFamily: 'Courier New Courier monospace', marginRight:'30px'}}>Contact</Link>
                    </div>
                </div>
                </nav>

        </Fragment>
    )
}

export default Nav