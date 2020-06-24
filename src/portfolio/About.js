import React, { Component } from 'react';
import '../App.css'


class About extends Component {
   
        

    componentDidMount(){
        window.addEventListener('scroll', this.onWindowScroll);
      }
   

    onWindowScroll = () => {
        let element = document.querySelector('.about')
        if (window.scrollY   > 500){
            element.classList.add('trans-about')
        } else {
            element.classList.remove('trans')
        }
        
    }
 

  render(){

    return ( 
            <div className='container about' id='aboutme'>
               
                    <h2 style={{fontFamily:'Balsamiq Sans', marginTop:'100px'}} className='d-flex justify-content-center'> About Me</h2>
                <div className='row  '>
                        {/* profile pic */}
                    <div className="col-sm-12 col-md-12 profile-pic "></div>
                </div>
                <div className='row d-flex'>
                    <div className="col-lg-3 "></div>
                    <div style={{textAlign:'center', paddingBottom:'20px'}} className=' col-lg-6 col-sm-12'>Hi, i am kolawle fabusuyi, a web developer focused on crafting great Web experiences. 
                                                                                                Designing and Coding has always been my passion since the days i started working with 
                                                                                                computers but i found myself into Web Development in 2018. i focus on the
                                                                                                underlisted qualities when writting codes :-
                    </div>
                    <div className="col-lg-3'"></div>
                    </div>

                <div className='row quality' >
                    
                    <div className = "col-sm-12 col-md-6 col-lg-3  d-flex justify-content-center">
                        <figure>
                        <img src="https://i.imgur.com/4k1x1nO.png" alt='icon'/> 
                        <h4>Efficiency</h4>
                        </figure>                    
                    </div>
                     <div className = "col-sm-12 col-md-6 col-lg-3  d-flex justify-content-center">
                        <figure>
                        <img src="https://i.imgur.com/ACcEHdS.png" alt='icon'/>  
                        <h4 >Responsive</h4>
                        </figure>
                    </div> 
                    <div className = "col-sm-12 col-md-6 col-lg-3  d-flex justify-content-center">
                        <figure>
                        <img src="https://i.imgur.com/YuUyQ50.png" alt='icon'/>  
                        <h4 >Dynamism</h4>
                        </figure>
                    </div> 
                    <div className = "col-sm-12 col-md-6 col-lg-3  d-flex justify-content-center">
                    <figure>
                        <img src="https://i.imgur.com/BlJwbk3.png" alt='icon'/>  
                        <h4 >Scalability</h4>
                        </figure>
                    </div> 
                </div>
           
            </div> 
    );
}
}

export default About




