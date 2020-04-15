<!-- function App(){ 
    const work = vschoolProduct.map(function(prod){
        return(< TodoItem key = {prod.id} name={prod.name} price={prod.price} desc={prod.desc} />)
    })
return <div>{ work}</div>
}

export default App


 to map a function, first create the function, import the data to b mapped and map, in the instace of map, 
 create another function that will take in an argument, return the component your with to return, while assigning 
 the data from the imported data. assign the mapped data to a const, then return the cont in the first function created.

const productComponent = productData.map(item => <Product product={item}/>)
1, const productCompont is just an asigned variable
2, productData is the imported array we want to perform map function on
3, .map() a janascript function
4,item is the argument of the second function created, => means return <Product />
5, product={item} wil be replaced ny the props in the retureded component














function App(){
    const JokeComponent = jokedata.map(function(joke){
        return (
            <TodoItem key={joke.id} question={joke.question} answer={joke.answer} />
            )})
        
        return (
            <div>
                {JokeComponent}
            </div>
        )
}
export default App

<TodoItem name="kolawole fabusuyi"/>

function App(){
    const jokeComponents = jokedata.map(joke => <TodoItem key = {joke.id} question={joke.question} 
        answer={joke.answer} />)


        return (
            <div>
                {jokeComponents}
            </div>
        )
}
export default App -->

<!-- function TodoItem(props){
    return <div className="todo-item">
         <p>question: {props.question}</p>
         <hr></hr>
         <p>answer: {props.answer}</p>
    </div>
    }
    
    export default TodoItem -->
<!-- 
    <!-- class App extends React.Component{
        render(){
            return(

            )
        }
    }
    export default App -->



     import React  from 'react';
 import ReactDOM from "react-dom"

class App extends React.Component {
   
    render() {
        return( <div>
            <Header />
            <Greatings />
        </div>

        )
    }

}


class Header extends React.Component {
   
    render() {
        return( <header>
            <p>Welcome, {this.props.username}</p>
        </header>

        )
    }

}



object is the sane thing as dictionary in python, it have a key value pair iniatialized with :
props is the only way data can be passed between different component




// class Test extends Component{
//     constructor(){
//         super()
//         this.state = {
//             loading : false,
//             character :{}
            
//         }
        
       
//     }
//     componentDidMount(){
//         this.setState({
//             loading: true
//         })
//         fetch('https://jsonplaceholder.typicode.com/users/1')
        
//         .then(response => response.json())
//         
//         .then(data => {
//             this.setState({
//                 loading : false,
//                 character : data
              
//             })
//         })
       
//     }
     
  
//     render(){
//         const isloading = this.state.loading ? "loading": this.state.character.name
        
//     return(<p>{isloading}</p>)
//     }
//         }
// export default Test
















// fetch('https://jsonplaceholder.typicode.com/users/1')
      // fetch("https://currency-exchange.p.rapidapi.com/listquotes", {
        //         "method": "GET",
        //         "headers": {
        //             "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
        //             "x-rapidapi-key": "2bad0b1a7fmshad21d3454d77de7p1ffe5ajsn6dc1b5456393"
        //         }
        //     })
        // .then(response => response.json())
        // .then(data => console.log(data))






// class Test extends Component{
//     constructor(){
//         super()
//         this.state = {
//             isloggin: true
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//    handleClick(){
//        console.log("working")
//        this.setState(prevState => {
//            return{
//            isloggin: !prevState.isloggin
//        }}
//         )
//    }
//     render(){
//         let buttonText = this.state.isloggin? "Log in" : "Log out"
//         return(
//             <div>
//                 <p>You are currently {this.state.isloggin ? <p>logged in</p>: <p>logged out</p>}</p>
//                 <button onClick ={this.handleClick}> {buttonText}</button>
//             </div>)
//     }
// }
// export default Test

// handleClick (){
    //          this.setState(prevState => {
    //         return {
    //             num: prevState.num + 1,
               
    //         }})}




















// class Test extends Component{
//     constructor(){
//         super()
//         this.state = {
//             unreadMessages: [
//                 "you need to cal mom today",
//                 "going somwhere?"
//             ]
//         }

//     }
//    render(){
//        return <div>
//            <p>You have {this.state.unreadMessages.length} unread messages</p>
//             { this.state.unreadMessages.length > 0 ? <p>you have some messages</p>: <p>you have no messages</p>  }
//        </div>
//    }

// }
// export default Test
// class Test extends Component{
//     constructor(){
//         super()
//         this.state = {
//             isLoading : true
//         }
//     }

//     componentDidMount(){
//         setTimeout(() => {this.setState({
//             isLoading: false
//         })}, 1500)
//     }
//     render(){
//         return( 
//         <div>
//             {
//                 this.state.isLoading ?
//                 <p>loading..............</p>: 
//                 <Conditional />
//             }
//             </div>)
//     }
// }

// export default Test

// class Test extends Component{
//     constructor(){
//         super()
//         this.state = { 
//             num: 10,
//             num1: 1100
//         }
//         this.handleClick = this.handleClick.bind(this)
//         this.handleClick1 = this.handleClick1.bind(this)
//     }
//      handleClick (){
//          this.setState(prevState => {
//         return {
//             num: prevState.num + 1,
           
//         }})}

//         handleClick1(){
//             this.setState(prevState1 => {
//                 return{
//                     num: prevState1.num - 1
//                 }
//             })
//         }
    
//     render(){
       
    
//     return(<div>
//         <h3>{this.state.num}</h3>
//         {/* <h2>{this.state.num1}</h2> */}
//         <button onClick = {this.handleClick}>Click to add</button>
//         <button onClick = {this.handleClick1}>Click to minus</button>

//     </div>)
//     }
// }
// export default Test



// function onclicked(){
//     console.log("i was clicked")
// }

// function Test(){
//     return(
//         <div>
//             <button onClick={onclicked}>Click</button>
//         </div>
//     )
// }
// export default Test


// class Navbar extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       isLoggedin: false
     
//     }
//   }

//   render(){
//     let checked
//     if (this.state.isLoggedin === true){
//       checked = "login"
//     }else( checked = "logout")
//     return(<div>
//       <p>You are currently {checked}</p>
      
//     </div>)
//   }
// }

// export default Navbar -->