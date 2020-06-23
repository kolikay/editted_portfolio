import React from "react"
import './App.css' 
import Nav from './portfolio/Nav'
import Footer from './portfolio/Footer'
import Landingpage from '../src/portfolio/Landingpage'






 

class App extends React.Component{
    render(){
       
        return(
            <div >
            <Nav />
            
            <Landingpage />
           
           <Footer />

            </div>
        )
    }
}
export default App
        








