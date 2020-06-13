import React from 'react'
import { Route , Switch} from 'react-router-dom'
import LandingPage from './Landingpage'
import About from './About'
import Resume from './Resume'
import Project from './Projects'
import Contact from "./Contact"



const Main = () => {
    return(
        <Switch>
            <Route exact path ="/" component={LandingPage}/>
            <Route path ="/aboutme" component={About} />
            <Route path ="/resume" component={Resume} />
            <Route path ="/project" component={Project} />
            <Route  path ="/contact" component={Contact} />
            {/* <Route  path ="/contact" component={Contact} /> */}
        </Switch>
    )
}
export default Main