import React from "react"
import {Navigation, Layout, Header, Drawer, Content} from "react-mdl"
import Main from "./portfolio/Main"
import { Link } from 'react-router-dom'
import './App.css' 

 

class App extends React.Component{
    render(){
       
        return(
            <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title={<Link style={{textDecoration: 'none', color:'white'}} to='/'>kolawole Portfolio</Link>} scroll>
                    <Navigation>
                   
                        <Link to="/resume">Resume</Link>
                        <Link to="/project">Project</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/contact">Contact</Link>
                        
                    </Navigation>
                </Header>
                <Drawer title={<Link style={{textDecoration: 'none', color:'black'}} to='/'>kolawole Portfolio</Link>}  >
                    <Navigation >
                   
                    <Link to="/resume">Resume</Link>
                    <Link to="/project">Project</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/contact">Contact</Link>
                        
                    </Navigation>
                </Drawer>
              
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>
        </div>
        )
    }
}
export default App
        








