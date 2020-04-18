import React, { Component } from "react"
import { Cell, Grid } from "react-mdl"


class About extends Component{
    render(){
        return(
                <div className='About'>
                    <Grid>
                        <Cell col={2}></Cell>
                        <Cell col={8} className= 'resume-right-col' shadow={20} style={{minWidth: '450', margin: 'auto'}}>
                        <h2>About Me</h2>
                        <hr style={{borderTop: '3px solid red', width: '100%' }}/>
                            <p style={{fontSize:'75%'}}>

                    
                                Hi, I am kolawole, a web developer focused on crafting great web experiences, 
                                Designing and Coding have been my passion since the days I started working with computers but I found myself into web development in 2019, 
                                I enjoy creating beautifully designed, intuitive and functional websites. 
                                Besides programming I love spending time with friends and family and can often be found together going out catching the latest movie, 
                                staying in playing games on the sofa or planning a trip to someplace I've never been before, i also love watching football matches.

                                i graduated from the University of Abuja where i obtained a bachelors degree in Economics, but i choose to follow my passion in writting codes
                                so i registered for some udemy corses and learnt web development, i did my internship with Linux jobber to gain real world experiences  in writting codes.

                                The most important part of this job is that it gives me the opportuinity to learn new technology often and i am doing what i love. 

                                Please feel free to contact me when ever you need my service.

                                Thanks

                                </p>

                        </Cell>
                        <Cell col={2}></Cell>
                    </Grid>

                    
                </div>
            )
    }
       
    
}
export default About