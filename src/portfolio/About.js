import React, { Component } from 'react';






class About extends Component {

  render(){


    return ( 
            <div className='container-fluid'>
                <div className='row'>
                   

                            <div className='col profile-top'>
                <h1  style={{color:'rgb(10, 62, 71)', margin:'0px',fontFamily: 'cursive'}}>Kolawole</h1>
                                    <h4 style={{color:'white', marginTop:'0px',fontFamily: 'cursive'}}>Full Stack Web Developer</h4>
                            </div>
                </div>
                <div className='row container' style={{paddingTop:'10%'}}>
                    <div className='ccol-sm-12 col-md-6 col-lg-6'>
                        <p style={{ color:'rgb(10, 62, 71)',fontFamily: 'cursive', fontWeight:'bold', fontSize:'20px'}}>Few Words</p>
                        <h2 style={{fontSize:'40px', fontWeight:'bolder', fontFamily:'cursive'}}>About Me</h2>
                        <h5 style={{fontSize:'20px',  fontFamily:'cursive'}} >
                        Hi! I am Fabusuyi Kolawole, a web developer focused on crafting great web experiences. Designing and Coding have been 
                        my passion since the days I started working with computers but I found myself into web development since 2018. I enjoy 
                        creating beautifully designed, intuitive and functional websites. </h5>

                        <h5 style={{fontSize:'20px', fontFamily:'cursive'}}>  For over past 2 years, I have worked for some wonderful clients to create some award winning works. And, I can make this happen for your business as well.

                    Please check our my project page to see some website i have worked on.

                         
                        </h5>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6 profile-pic'>
                       

                    </div>
                </div>
                <div className='row' >
                    <div className='col-sm-12 col-md-6 col-lg-6'>  
                        <img src="https://i.imgur.com/2zXVvU6.png" alt='icon'/>                      
                                            
                        <h4 style={{ fontFamily: 'Times New Roman', fontWeight:'bold', fontSize:'30px'}}>Qualities</h4>
                        <p style={{fontSize:'20px',  fontFamily:'cursive'}}> <b>Ability to learn:</b> being a developer requires continues and constant need to keep up-to-date
                            with the latest technology, so i pride myself with good self-learning skills which is required for the job.</p>
                            <p style={{fontSize:'20px',  fontFamily:'cursive'}}><b>Basic teamwork and coordination:</b> The pyramid isn’t built by one man, and modern websites certainly
                             aren’t any small work. My good team mindset sometimes is valued even better than the technical skill as it helps with team spirit .
                        </p>
                    </div> 
                    
                    <div className='ccol-sm-12 col-md-6 col-lg-6'>
                        <img style={{color:'rgb(10, 62, 71)'}} src="https://i.imgur.com/5tmRRWH.png" alt='icon'/>  
                        <h4 style={{ fontFamily: 'Times New Roman', fontWeight:'bold', fontSize:'30px'}}>Experience</h4>
                        <p style={{fontSize:'20px',  fontFamily:'cursive'}}> Web Developer with 2 years of experience in designing and developing user interfaces, functional server side login, testing, debugging, scalable web applications.</p>
                        <p style={{fontSize:'20px',  fontFamily:'cursive'}}>i have worked with wonderful organizaztions like Linux Jobber, StartNg etc as interns where i learnt
                            valuable skill of teamwork
                        </p>
                        
                    </div> 
                

                </div>
           
            </div> 
    );
}
}

export default About