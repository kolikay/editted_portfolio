import React, { Component } from "react"
import {Grid, Cell, ProgressBar} from'react-mdl'

class Skills extends Component{
    render(){
        const {progress, skill} = this.state
        return(
            <Grid>
               <Cell col={12}> 
                <div style={{display:'flex'}}>{skill}<ProgressBar progress={44} style={{margin: 'auto', width:'75%'}} 
                progress={progress}/></div>
               
               </Cell>
            </Grid>
        )
    }
}
export default Skills