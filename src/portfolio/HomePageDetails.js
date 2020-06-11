import React from 'react';

const HomepageDetail = () => {
    return ( 
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12 col-md-6'>
                    <h2 style={{paddingTop:'50px', 
                    color:'rgb(226, 197, 29)',
                    fontSize: '30px',
                    lineHeight: '26px',
                    fontWeight: '900',
                    letterSpacing: '0px',
                    fontFamily: 'cursive',}}
                    > What i do</h2>

                    <h2>Programming</h2>
                    <p>Computer programming is the process of designing and building 
                        an executable computer program to accomplish a specific computing result. 
                        Programming involves tasks such as: analysis, generating algorithms, 
                        profiling algorithms' accuracy and resource consumption, and the 
                        implementation of algorithms in a chosen programming language 
                        (commonly referred to as coding).</p>
                    <p>I take a structured approach to web design. My development process is
                         created to ensure every project is delivered on-time and on-budget.  
                    </p>
                </div>
                <div className='col-sm-12 col-md-3 ' style={{paddingTop:'100px', paddingRight:'50px'}}>
                <i className="fa fa-desktop" aria-hidden="true" style={{color:'rgb(226, 197, 29)', fontSize:'40px'}}></i>
                    <h4 > Back End Web Development</h4>
                    <p>Backend Development refers to the server-side development. 
                        As a Backend Developer, i work on Development Languages like Django, Databases like MySQL, cache, Server, 
                        API (REST & SOAP), etc. I understand the goals of the
                         website and come up with effective login and solutions.</p>
                </div>
                <div className='col-sm-12 col-md-3' style={{paddingTop:'100px'}}>
                <i className="fa fa-database"style={{color:'rgb(226, 197, 29)', fontSize:'40px'}}></i>
                    <h4 >Front End Development</h4>
                    <p>Front-end web development, also known as client-side development is the
                         practice of producing HTML, CSS and JavaScript for a website or Web Application so 
                         that a user can see and interact with them directly.
                         As a Front-end Developer my responsibilities are implementing visual elements that users see and
                         interact with within a web application. </p>
                    
                </div>

            </div>

           
        </div>
     );
}
 
export default HomepageDetail;