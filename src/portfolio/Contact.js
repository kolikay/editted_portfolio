import React, { Component } from "react"
import '../App.css'


class Contact extends Component{
    render(){
        return(
            <div className="container" id = "contact">
                <h2 style={{fontFamily:'Balsamiq Sans'}} className='d-flex justify-content-center'>Contact Me</h2>
            <div className="contact-parent">
                <div className="contact-child child1">
                    <p>
                        <i className="fa fa-address-book-o"></i> Address <br />
                        <span> 19, Usman balogun street,
                            <br />
                            ile epo busstop, Lagos Nigeria
                        </span>
                    </p>

                    <p>
                        <i className="fa fa-phone-square"></i> Let's Talk <br />
                        <span>08062842978</span>
                    </p>

                    <p>
                        <i className=" fa fa-envelope"></i> Email <br />
                        <span>kolawolefabusuyi@gmail.com</span>
                    </p>
                </div>

                <div className="contact-child child2">
                    <div className="inside-contact">
                        <h2>Contact Me</h2>
                        <h3>
                           <span id="confirm"></span>
                        </h3>

                        <p>Name *</p>
                        <input id="txt_name" type="text" required="required"/>

                        <p>Email *</p>
                        <input id="txt_email" type="text" required="required"/>

                        <p>Phone *</p>
                        <input id="txt_phone" type="text" required="required" />

                        <p>Subject *</p>
                        <input id="txt_subject" type="text" required="required" />

                        <p>Message *</p>
                        <textarea id="txt_message" rows="4" cols="20" required="required" ></textarea>
                        
                        <input type="submit" id="btn_send" value="SEND"  className="btn_send"/>
                    </div>
                </div>
                </div>
                </div>

            )
    }
       
    
}
export default Contact