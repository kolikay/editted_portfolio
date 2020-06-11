import React, { Component } from "react"


class Contact extends Component{
    render(){
        return(
            <div class="container">
            <div class="contact-parent">
                <div class="contact-child child1">
                    <p>
                        <i class="fa fa-address-book-o"></i> Address <br />
                        <span> 19, Usman balogun street,
                            <br />
                            ile epo busstop, Lagos Nigeria
                        </span>
                    </p>

                    <p>
                        <i class="fa fa-phone-square"></i> Let's Talk <br />
                        <span>08062842978</span>
                    </p>

                    <p>
                        <i class=" fa fa-envelope"></i> Email <br />
                        <span>kolawolefabusuyi@gmail.com</span>
                    </p>
                </div>

                <div class="contact-child child2">
                    <div class="inside-contact">
                        <h2>Contact Me</h2>
                        <h3>
                           <span id="confirm"></span>
                        </h3>

                        <p>Name *</p>
                        <input id="txt_name" type="text" Required="required"/>

                        <p>Email *</p>
                        <input id="txt_email" type="text" Required="required"/>

                        <p>Phone *</p>
                        <input id="txt_phone" type="text" Required="required" />

                        <p>Subject *</p>
                        <input id="txt_subject" type="text" Required="required" />

                        <p>Message *</p>
                        <textarea id="txt_message" rows="4" cols="20" Required="required" ></textarea>
                        
                        <input type="submit" id="btn_send" value="SEND"  className="btn_send"/>
                    </div>
                </div>
                </div>
                </div>

            )
    }
       
    
}
export default Contact