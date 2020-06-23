import React from 'react';


const Footer = () => {
    return (    <div className='container-fluid' style={{backgroundColor:'black', 
    color:'white'
    }}>





                   <div className='row'>
                    
                        <div className='d-flex justify-content-center col-sm-12 col-md-12 col-lg-12' >
                            <span style={{marginTop:'20px', marginBottom:'20px', fontSize:'20px'}}>Social media</span>
                        </div>
                    </div>

                    <div className='footer'>
               
                    <a target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/kolikay'><span className="footer fa fa-facebook-square" aria-hidden="true"></span> </a>
                    <a target='_blank' rel="noopener noreferrer" href='https://www.twitter.com/kolikay'><span className="footer fa fa-twitter-square" aria-hidden="true"></span> </a>
                    <a target='_blank' rel="noopener noreferrer" href='https://www.github.com/kolikay'><span className="footer fa fa-github-square" aria-hidden="true"></span> </a>
                    <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/kolikay'><span className="footer fa fa-linkedin" aria-hidden="true"></span> </a>
                    </div>



                </div>
                
            );
}
 
export default Footer;
