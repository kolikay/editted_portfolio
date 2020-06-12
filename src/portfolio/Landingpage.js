import React, { Component, Fragment } from "react"

import { Link } from 'react-router-dom'


class LandingPage extends Component {


    render() { 
        return ( 
                    <Fragment className='homepage' >
                    
                        <div className='container-fluid'>
                            <div className='row'>
                                    <div className='col-12'>
                                        <h2>Kolawole Fabusuyi</h2>
                                        <h4>Welcome to my portfolio page, really glad you are here </h4>
                                        <div className='btn btn-lg btn-secondary'><Link to='/aboutme' style={{textDecoration:'none'}}> Read More > </Link></div>
                                    </div>
                                </div>
                            </div>
                    
                    </Fragment>
                  
                
                
               
        );
    }
}
 
export default LandingPage;

