import React, { Component, Fragment } from "react"
import HomePageDetails from './HomePageDetails'
import { Link } from 'react-router-dom'



class LandingPage extends Component {


    render() { 
        return ( 
                    <div >
                            <div className='row'>
                                    <div className='col-12'>
                                        <h2 style={{color:'rgb(226, 197, 29)', paddingTop:'20%', fontFamily:'cursive'}}>Kolawole Fabusuyi</h2>
                                        <h4 style={{color:'white', fontFamily:'cursive'}}>Welcome to my portfolio page, really glad you are here </h4>
                                        <div className='btn btn-lg btn-secondary'><Link to='/aboutme' style={{textDecoration:'none'}}> Read More > </Link></div>
                                    </div>
                            </div>
                            <div>
                                <HomePageDetails />
                            </div>
                    </div>

                    
                    
                
                
               
        );
    }
}
 
export default LandingPage;

