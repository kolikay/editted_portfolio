import React from "react"



 function TodoItem(props){
    const completedStyle = {
        fontStyle: "italic",
        color: "green",
        textDecoration: "line-through"
    }

    return (
    <div className="todo-item">
         <input type="checkbox" 
         checked={props.item.completed} 
         onChange={() => props.handleChange(props.item.id)}/>
         {/* onChange will calls handleChange from the parent component App and pass the id to it  */}
         <p style = {props.item.completed ? completedStyle : null }>{props.item.name}</p>
        
    </div>
    )
    }
    export default TodoItem 
 


// class TodoItem extends React.Component{
//     constructor(){
//         super()
//     }
//     render(){
//         return (<div className="todo-item">
//         <input type="checkbox" />
//         <p>hey</p>
//    </div>)
//     }
// }
// export default TodoItem 