import React from "react"
import Main from "./portfolio/Main"
import './App.css' 
import Nav from './portfolio/Nav'
import Footer from './portfolio/Footer'

 

class App extends React.Component{
    render(){
       
        return(
            <div >
            <Nav />
           <Main />
           <Footer />
            </div>
        )
    }
}
export default App
        








