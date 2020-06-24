import React, { Component } from "react"
import '../App.css'
import About from './About'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'



class LandingPage extends Component {
  
    render() { 
        return ( 
                    <div className="container-fluid" style={{fontFamily:'Balsamiq Sans'}} id='#homepage'>
                            <div className='row ' style={{backgroundImage:'URL(https://i.imgur.com/iFFBKSTl.jpg)', height:'500px', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                                    <div className='col-12'>
                                        <h2 style={{color:'white', paddingTop:'20%',fontFamily:'Balsamiq Sans' }}>Kolawole Fabusuyi</h2>
                                        <h4 style={{color:'white',fontFamily:'Balsamiq Sans'}}>Welcome to my portfolio page, really glad you are here </h4>
                                        <div className='btn btn-lg btn-secondary'><a href='#aboutme' style={{textDecoration:'none'}}> Read More > </a></div>
                                    </div>
                            </div>
                            
                            <div className='row'>
                                <div className='col-sm-12 col-md-6'>
                                    <h2 style={{paddingTop:'50px', 
                                    color:'rgb(10, 62, 71)',
                                    fontSize: '30px',
                                    lineHeight: '26px',
                                    fontWeight: '900',
                                    letterSpacing: '0px',
                                    fontFamily: 'Balsamiq Sans',}}
                                    > What i do</h2>

                                    <h2 style={{fontFamily:'Balsamiq Sans'}}>Web Development</h2>
                                    
                                    <p>I take a structured approach to web design. My development process is
                                        created to ensure every project is delivered on-time and on-budget.  
                                    </p>
                                </div>
                                <div className='col-sm-12 col-md-3' style={{paddingTop:'70px', paddingRight:'50px', fontFamily:'Balsamiq Sans'}}>
                                
                                <img src='https://imgur.com/EeOs3ap.png'
                                className='landing-img'
                                style={{height:'100px', width:'100px'}}
                                alt='backend'
                                />
                                    <h4 style={{fontFamily:'Balsamiq Sans'}} > Back End Development</h4>
                                    <p style={{fontFamily:'Balsamiq Sans'}}>
                                        As a Backend Developer, i understand the goals of the
                                        website and come up with effective logics and solutions.</p>
                                </div>
                                <div className='col-sm-12 col-md-3' style={{paddingTop:'70px'}}>
                               
                                <img className='landing-img' 
                                src='https://imgur.com/uO0ZevS.png'
                                style={{height:'100px', width:'100px'}}
                                alt='frontend'
                                />
                                    <h4 style={{fontFamily:'Balsamiq Sans'}}>Front End Development</h4>
                                    <p style={{fontFamily:'Balsamiq Sans'}}>
                                        As a Front-end Developer my responsibilities are implementing visual elements that users see and
                                        interact with within a web application. </p>
                                    
                                </div>

                            </div>

                        <About />
                        <Projects />
                        <Resume />
                        <Contact />
                        </div>      
        );
    }
}
 
export default LandingPage;

