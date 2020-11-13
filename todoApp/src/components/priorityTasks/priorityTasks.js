import axios from 'axios';
import React from 'react';
import TodoItems from '../todoItem/todoItems';

class PriorityTasks extends React.Component{
    constructor(props){
        super(props);
        this.state= {todos:null};
    }
    componentDidMount(){
        axios.get("http://localhost:2000/priorityTasks")
        .then(response=>{
            this.setState({todos: response.data})
        })
    }
    render(){
        // console.log(this.state.todos);
        const element= this.state.todos===null?<i className="fa fa-spinner fa-spin" style={{"font-size":"100px"}}></i>:<TodoItems data={this.state.todos}></TodoItems>
        return(element)
    }
}

export default PriorityTasks;