import React, { Component } from "react"


class MemeGenerator extends Component{
  
    constructor(){
        super()
        this.setState({
            loading: false,
            character: {}
        })

    }

    componentDidMount(){
        this.setState({
            loading: true
        })
        fetch("http")
        .then(responce => responce.json())
        .then(data => {
            this.setState({
                loading: true,
                character :data
            })
        })
    }
    render(){return(<div>
        <p>Meme Generator</p>
    </div>)}


}
export default  MemeGenerator