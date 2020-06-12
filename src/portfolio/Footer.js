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
               
                    <span className=" fa fa-facebook-square" aria-hidden="true"></span>
                    <span className="fa fa-twitter-square" aria-hidden="true"></span>
                    <span className="fa fa-google" aria-hidden="true"></span>
                    <span className="fa fa-linkedin" aria-hidden="true"></span>
                    </div>



                </div>
                
            );
}
 
export default Footer;
{/* <p className='d-flex justify-content-center col-sm-12 col-md-6 col-lg-3'>
<i className=" fa fa-facebook-square" aria-hidden="true"></i>
<i className="fa fa-twitter-square" aria-hidden="true"></i>
<i className="fa fa-google" aria-hidden="true"></i>

</p> */}