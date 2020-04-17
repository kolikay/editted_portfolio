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
                                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book</p>
                                <hr style={{borderTop: '3px solid #833fb2', width: '70%' }}/>
                                <h5>Address</h5>
                                <p>1, fabusuyi street ketu lagos</p>
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
                            startYear='2000'
                            endYear='2005'
                            schoolName='University of Abuja'
                            schoolDesc='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book'
                            />

                            <Education 
                            startYear='2006'
                            endYear='2010'
                            schoolName='Code camp'
                            schoolDesc='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book'
                            />

                            <hr style={{borderTop: '3px solid red', width: '70%' }}/>
                            <h2>Experience</h2>

                            <Experience 
                            startYear='2006'
                            endYear='2010'
                            jobName='Code camp'
                            jobDesc='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book'
                            />

                            <Experience 
                            startYear='2010'
                            endYear='2018'
                            jobName='Code camp1'
                            jobDesc='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book'
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