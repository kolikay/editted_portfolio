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
                <Header className="header-color" title="Kolawole Portfolio" scroll>
                    <Navigation>
                    <Link to="/">Home Page</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/project">Project</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/contact">Contact</Link>
                        
                    </Navigation>
                </Header>
                <Drawer title="Kolawole Portfolio"  >
                    <Navigation >
                    <Link to="/">Home Page</Link>
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
        








