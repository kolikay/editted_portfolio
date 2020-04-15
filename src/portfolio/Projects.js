import React, { Component } from "react"
import {Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl'

class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(  <div className="projects-grid">
                    {/* React Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style= 
                        {{color:'#fff', height:'176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>React Project 1#</CardTitle>
                        <CardText> is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century</CardText>
                        <CardActions border>
                        < Button colored>GitHub</Button>
                        < Button colored>CodePen</Button>
                        < Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>

                    </Card>

                      {/* React Project 2 */}
                      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                      <CardTitle style= 
                      {{color:'#fff', height:'176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>React Project 1#</CardTitle>
                      <CardText> is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century</CardText>
                      <CardActions border>
                      < Button colored>GitHub</Button>
                      < Button colored>CodePen</Button>
                      < Button colored>Live Demo</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff'}}>
                      <IconButton name='share'/>
                  </CardMenu>

                  </Card>

                    {/* React Project 3 */} 
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style= 
                        {{color:'#fff', height:'176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>React Project 1#</CardTitle>
                        <CardText> is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century</CardText>
                        <CardActions border>
                        < Button colored>GitHub</Button>
                        < Button colored>CodePen</Button>
                        < Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>

                    </Card>
                    </div> 
                )
        }else if (this.state.activeTab === 1){
            return(<div><h1>This is Python </h1></div>)
        }else if (this.state.activeTab === 2){
            return(<div><h1>This is Django </h1></div>)
        }else if (this.state.activeTab === 3){
            return(<div><h1>This is Angular </h1></div>)
        }
        
    }
    render() {
        return (
            <div className="category-tab">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    
                    <Tab>React</Tab>
                    <Tab>Python</Tab>
                    <Tab>Django</Tab>
                    <Tab>Angular</Tab>
                </Tabs>
               
                    <Grid >
                        <Cell col={12}>
                            <div className="content"> {this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                        
               
            </div>    
        );
    }
}
export default Project