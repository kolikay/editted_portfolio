import React, { Component } from "react"
import Conditional from "./Conditional"






class Test extends Component{
    constructor(){
        super()
        this.state = {
            firstName : "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favColor: ""
        }
        
    this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox"? this.setState({[name]: checked}):  this.setState({[name]: value})
    }

    render(){    
        
    return(
    <form>
        <input 
            type="text" 
            name= "firstName" 
            placeholder ="First Name"
            value = {this.state.firstName}
            onChange={this.handleChange} 
        />
        <br />
        <input 
            type="text" 
            name = "lastName" 
            placeholder ="Last Name" 
            onChange={this.handleChange} 
            value = {this.state.lastName}
            
        />
         <br />
         <textarea />

         <br />

         <input 
         name = "isFriendly"
         type = "checkbox"
         checked = {this.state.isFriendly}
         onChange = {this.handleChange}
         />isFriendly

        <br />

        <input 
        name = "gender"
        type = "radio"
        value = 'male'
        checked = {this.state.gender === "male"}
        onChange = {this.handleChange}
        />Male

        <br />

        <input 
        name = "gender"
        type = "radio"
        value = 'female'
        checked = {this.state.gender === "female"}
        onChange = {this.handleChange}
        />Female

        <br />
        <lable>Favourite color</lable>
        <select
        value = {this.state.favColor}
        name = "favColor"
        onChange = {this.handleChange}
        >

            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="black">Black</option>
        </select>


    <p>{this.state.firstName} {this.state.lastName}</p>
    <p>{this.state.favColor}</p>
    <p>select {this.state.favColor}</p>
    </form>

    
    )
    }
        }
export default Test
























