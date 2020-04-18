import React, { Component } from "react"
import {Grid, Cell} from 'react-mdl'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

class Resume extends Component{
    render(){
        return(
                <div>
                    <Grid>
                        <Cell col={4}>
                            <div style={{textAlign: 'center'}}>
                                <img 
                                src="https://avatars2.githubusercontent.com/u/56051616?s=460&u=3f9305f057d67f7c505cffacb8e69786da78aab5&v=4"
                                 alt='avatar'
                                 style={{height:'200px'}}
                                /></div>
                                <h2 style={{paddingTop: '2em'}}>Kolawole Fabusuyi</h2>
                                <h4 style={{color:'grey'}}>Web Developer</h4>
                                <hr style={{borderTop: '3px solid #833fb2', width: '70%' }}/>
                                <p>I am a full stack web developer using React JS, HTML/CSS Bootstrap as my front end, and python/Django for the back end. I use AWS to host my projects </p>
                                <hr style={{borderTop: '3px solid #833fb2', width: '70%' }}/>
                                <h5>Address</h5>
                                <p>19, Usman Balogun street, Adenson, ile-epo busstop, igando</p>
                                <h5>Phone</h5>
                                <p>08062842978</p>
                                <h5>Email</h5>
                                <p>kolikay1989@yahoo.com</p>
                                <h5>Website</h5>
                                <p>www.kolikay.com</p>
                                <hr style={{borderTop: '3px solid red', width: '70%' }}/>
                        </Cell>
                        <Cell col={8} className='resume-right-col'>
                            <h2>Education</h2>

                            <Education 
                            startYear='2011'
                            endYear='2016'
                            schoolName='University of Abuja, Abuja Nigeria'
                            schoolDesc='Bsc Economics'
                            />
                            <hr style={{borderTop: '3px solid red', width: '70%' }}/>
                            <h2>Trainning</h2>

                            <Experience 
                            startYear='January 2019'
                            endYear='July 2019'
                            jobName='HTML/CSS | Bootstrap'
                            jobDesc='Linux Academy'
                            />

                            <Experience 
                            startYear='July 2019'
                            endYear='September 2019'
                            jobName='Python Programming Language'
                            jobDesc='Linux Academy'
                            />

                            <Experience 
                            startYear='September 2019'
                            endYear='Till date'
                            jobName='Django Web Framework'
                            jobDesc='Udemy'
                            />
                            <hr style={{borderTop: '3px solid red', width: '70%' }}/>
                            <h2>Skills</h2>
                            <Skills 
                            skill = 'javascript'
                            progress = {100}
                            />
                            <Skills 
                            skill = 'python'
                            progress = {75}
                            />
                            <Skills 
                            skill = 'django'
                            progress = {75}
                            />
                            <Skills 
                            skill = 'HTML/CSS'
                            progress = {80}
                            />
                             


                        </Cell>
                    </Grid>
                </div>
            )
    }
       
    
}
export default Resume