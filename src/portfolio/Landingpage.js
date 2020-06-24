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

                                    <h2 style={{fontFamily:'Balsamiq Sans'}}>Programming</h2>
                                    <p style={{ fontFamily:'Balsamiq Sans'}}>Computer programming is the process of designing and building 
                                        an executable computer program to accomplish a specific computing result. 
                                        Programming involves tasks such as: analysis, generating algorithms, 
                                        profiling algorithms' accuracy and resource consumption, and the 
                                        implementation of algorithms in a chosen programming language 
                                        (commonly referred to as coding).</p>
                                    <p>I take a structured approach to web design. My development process is
                                        created to ensure every project is delivered on-time and on-budget.  
                                    </p>
                                </div>
                                <div className='col-sm-12 col-md-3 ' style={{paddingTop:'100px', paddingRight:'50px', fontFamily:'Balsamiq Sans'}}>
                                <i className="fa fa-desktop" aria-hidden="true" style={{color:'rgb(10, 62, 71)', fontSize:'40px'}}></i>
                                    <h4 style={{fontFamily:'Balsamiq Sans'}} > Back End Web Development</h4>
                                    <p style={{fontFamily:'Balsamiq Sans'}}>Backend Development refers to the server-side development. 
                                        As a Backend Developer, i work on Development Languages like Django, Databases like MySQL, cache, Server, 
                                        API (REST & SOAP), etc. I understand the goals of the
                                        website and come up with effective login and solutions.</p>
                                </div>
                                <div className='col-sm-12 col-md-3' style={{paddingTop:'100px'}}>
                                <i className="fa fa-database"style={{color:'rgb(10, 62, 71)', fontSize:'40px'}}></i>
                                    <h4 style={{fontFamily:'Balsamiq Sans'}}>Front End Development</h4>
                                    <p style={{fontFamily:'Balsamiq Sans'}}>Front-end web development, also known as client-side development is the
                                        practice of producing HTML, CSS and JavaScript for a website or Web Application so 
                                        that a user can see and interact with them directly.
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

