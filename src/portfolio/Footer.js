import React from 'react';


const Footer = () => {
    return ( <div className='container-fluid'>

    
        <div className='row' style={{backgroundColor:'black', 
                                 color:'rgb(10, 62, 71)',
                                 paddingTop:'10px',
                                 paddingLeft:'10px',
                                 }}>
                <div className='col-sm-12 col-md-6 col-lg-3'>
                    <i className="fa fa-address-book" aria-hidden="true" style={{fontSize:'30px'}}></i>
                    <span style={{marginTop:'5px', marginBottom:'5px'}}>Address</span>
                    <p style={{color:'white'}}>No 9, Usman balogun street, adeson-ile epo </p>
                </div> 
                
                <div className='col-sm-12 col-md-6 col-lg-3' >
                <i className="fa fa-envelope-o" aria-hidden="true" style={{fontSize:'30px'}}></i>
                    <span style={{marginTop:'5px', marginBottom:'5px'}}>Email</span>
                    <p style={{color:'white'}}>kolikay1989@gmail.com</p>
                </div> 
                
                <div className=' col-sm-12 col-md-6 col-lg-3' >
                <i className="fa fa-phone-square" aria-hidden="true" style={{fontSize:'30px'}}></i><span style={{marginTop:'5px', marginBottom:'5px'}}>Call Us</span>
                    
                    <p style={{color:'white'}}>08062842978</p>
                </div> 
                
                <div className='col-sm-12 col-md-6 col-lg-3' >
                    <span style={{marginTop:'5px', marginBottom:'5px'}}>Social media</span>
                    <p>
                        <i style={{paddingRight:'30px', fontSize:'30px'}} className="fa fa-facebook-square" aria-hidden="true"></i>
                        <i style={{paddingRight:'30px', fontSize:'30px'}} className="fa fa-twitter-square" aria-hidden="true"></i>
                        <i style={{paddingRight:'30px', fontSize:'30px'}} className="fa fa-google" aria-hidden="true"></i>
                    
                    </p>
                </div>

            </div>
        </div>
     );
}
 
export default Footer;