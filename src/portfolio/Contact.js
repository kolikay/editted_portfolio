import React, { Component } from "react"
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

class Contact extends Component{
    render(){
        return(
                <div className='contact-body'>
                    <Grid className='contact-grid'>
                         <Cell col={6}>
                             <h2>Kolawole Fabusuyi</h2>
                             <img 
                             src="https://avatars2.githubusercontent.com/u/56051616?s=460&u=3f9305f057d67f7c505cffacb8e69786da78aab5&v=4"
                             alt='avatar'
                             style={{height: '250px'}}
                             />
                            <p>
                            I'm new to Git and using it for the very first time. I would appreciate it if someone could help me out. I tried finding the answer at forums, but there are tons of commands that are coming out and not sure which one to use
                            </p>
                         </Cell>
                         <Cell col={6}>
                             <h2>Contact Me</h2>
                             <hr/>
                             <div className='contact-list'>
                             <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily:"Anton"}}>
                                <i className='fa fa-phone-square' aria-hidden='true' />
                                (234)806-284-2978
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily:"Anton"}}>
                                <i className='fa fa-envelope' aria-hidden='true' />
                                kolikay1989@gmail.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily:"Anton"}}>
                                <i className='fa fa-skype' aria-hidden='true' />
                                kolikay
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily:"Anton"}}>
                                <i className="fa fa-address-book-o" aria-hidden='true' />
                                19, usman balogun street, ile-epo busstop, igando
                                </ListItemContent>
                            </ListItem>
                           
                            </List>

                             </div> 
                         </Cell>
                    </Grid>
                </div>
            )
    }
       
    
}
export default Contact