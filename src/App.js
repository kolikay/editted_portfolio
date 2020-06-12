import React from "react"
import './App.css' 
import Nav from './portfolio/Nav'
import Footer from './portfolio/Footer'
import LandingPage from "./portfolio/Landingpage"
import Main from './portfolio/Main'

 

class App extends React.Component{
    render(){
       
        return(
            <div >
            <Nav />
            <Main />
           {/* <LandingPage /> */}
           <Footer />
            </div>
        )
    }
}
export default App
        








