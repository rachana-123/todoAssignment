import axios from 'axios';
import React from 'react';
import TodoItems from './todoItem/todoItems';

class AllTodos extends React.Component{
    constructor(props){
        super(props);
        this.state= {todos:null};
    }
    getTodos=()=>{
        console.log("hi");
        axios.get("http://localhost:2000/tasks")
        .then(response=>{
            this.setState({todos: response.data})
        })
    }
    componentDidMount(){
        axios.get("http://localhost:2000/tasks")
        .then(response=>{
            this.setState({todos: response.data})
        })
    }
    render(){
        // console.log(this.state.todos);
        const element= this.state.todos===null?<i className="fa fa-spinner fa-spin" style={{"fontSize":"100px"}}></i>:<TodoItems data={this.state.todos} refresh={()=>this.getTodos()}></TodoItems>
        return(element)
    }
}

export default AllTodos;