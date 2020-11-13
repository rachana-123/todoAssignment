import React from 'react';
// import { TodoItem } from './todoItem';
import AddItem from './addItems';
import './todocomp.scss';
import axios from 'axios';


class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state=({added:""})
    }
    onAdd = (data) => {
        console.log(data);
        axios.post("http://localhost:2000/",data)
        .then(res=>{
            console.log(res);
            this.setState({added:"Task Added"})
        })
        .catch(err=>console.log(err));
    }
    render() {
        return (
            <div id="todo-list">
                <div style={{"fontSize":"45px"}}>Add To Dos..</div><br/>
                <AddItem value="Add" onAdd={this.onAdd} /><br/>
                <div>{this.state.added}</div>
            </div>
        );
    } //render
}

export default TodoComponent;