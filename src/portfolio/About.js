import React, { Component } from 'react';






class About extends Component {

  render(){


    return ( 
            <div className='container-fluid'>
                <div className='row'>
                   

                            <div className='col profile-top'>
                <h1  style={{ margin:'0px',fontFamily: 'cursive'}}>Kolawole</h1>
                                    <h4 style={{color:'white', marginTop:'0px',fontFamily: 'cursive'}}>Full Stack Web Developer</h4>
                            </div>
                </div>
                <div className='row container' style={{paddingTop:'10%'}}>
                    <div className='col'>
                        <p style={{ color:'rgb(226, 197, 29)',fontFamily: 'cursive', fontWeight:'bold', fontSize:'20px'}}>Few Words</p>
                        <h3 style={{fontSize:'40px', fontWeight:'bolder', fontFamily:'cursive'}}>About Me</h3>
                        <p style={{color:'grey'}}>
                            The standard Lorem Ipsum passage, used since the 1500s
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                           "Sed ut perspiciatis unde omnis iste natus error sit voluptatem The standard Lorem Ipsum passage, used since the 1500s
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                         
                        </p>
                    </div>
                    <div className='col'>
                        <img style={{height:'600px', width:'600px', paddingLeft:'50px', paddingBottom:'80px', paddingTop:'40px'}}
                        src="https://i.imgur.com/McUrjwj.jpg"
                        alt='icon'
                        />

                    </div>
                </div>
                <div className='row' >
                    <div className='col'>  
                        <img src="https://i.imgur.com/2zXVvU6.png" alt='icon'/>                      
                                            
                        <h4 style={{ fontFamily: 'Times New Roman', fontWeight:'bold', fontSize:'30px'}}>Quality</h4>
                        <p> The standard Lorem Ipsum passage, used since the 1500s
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div> 
                    <div className='col'>
                        <img src="https://i.imgur.com/HpqP9AH.png" alt='icon'/>  
                        <h4 style={{ fontFamily: 'Times New Roman', fontWeight:'bold', fontSize:'30px'}}>Professionalism</h4>
                        <p> The standard Lorem Ipsum passage, used since the 1500s
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div> 
                    <div className='col'>
                        <img style={{color:'rgb(226, 197, 29)'}} src="https://i.imgur.com/5tmRRWH.png" alt='icon'/>  
                        <h4 style={{ fontFamily: 'Times New Roman', fontWeight:'bold', fontSize:'30px'}}>Experience</h4>
                        <p> The standard Lorem Ipsum passage, used since the 1500s
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div> 
                    <div className='col'>
                        <img src="https://i.imgur.com/ydG3ZSv.png" alt='icon'/>  
                        <h4 style={{ fontFamily: 'Times New Roman', fontWeight:'bold', fontSize:'30px'}}>Honors</h4>
                        <p> The standard Lorem Ipsum passage, used since the 1500s
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>

                </div>
           
            </div> 
    );
}
}

export default About