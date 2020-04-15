import React, { Component } from "react"
import {Cell, Grid } from 'react-mdl'

class LandingPage extends Component{
    render(){
        return(
                <div style={{width: '100%', margin: 'auto'}}>
                    <Grid className="landing-grid">
                        <Cell col={12}>
                            <img 
                            src = "https://avatars2.githubusercontent.com/u/56051616?s=460&u=3f9305f057d67f7c505cffacb8e69786da78aab5&v=4"
                            alt ="avatar"
                            className="avatar-img"
                            />
                            <div className='banner-text'>
                                <h1>Full Stack Web Developer </h1>
                                <hr />

                                <p>HTML/CSS | Bootstrap | Python | Django | Javascript | React | Mysql </p>
                                <div className="social-links">

                                    {/* github*/}
                                    <a href="http://github.com/kolikay" rel="nooperner noreferrer" target="_blank">
                                        <i className= "fa fa-github-square"  aria-hidden="true" />
                                        </a>

                                     {/* Linkedin*/}
                                     <a href="https://www.linkedin.com/in/kolikay/" rel="nooperner noreferrer" target="_blank">
                                        <i className= "fa fa-linkedin-square"  aria-hidden="true" />
                                        </a>

                                     {/* freecode camp*/}
                                     <a href="https://www.freecodecamp.org/kolikay" rel="nooperner noreferrer" target="_blank">
                                        <i className= "fa fa-free-code-camp"  aria-hidden="true" />
                                        </a>
                                </div>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            )
    }
       
    
}
export default LandingPage