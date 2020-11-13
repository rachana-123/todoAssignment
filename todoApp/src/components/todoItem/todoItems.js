import React from 'react';
import TodoItem from './todoItem';
import axios from 'axios';

const TodoItems = (props) => {
    // console.log(props);
    let onDeleteTask = (id) => {
        console.log(id);
        axios.delete(`http://localhost:2000/delete/${id}`)
            .then(res => {
                props.refresh();
            })
            .catch(err => console.log(err));
        
    }
    const list = props.data.data.map((element) => {
        return <TodoItem key={element._id}{...element} onDeleteTask={onDeleteTask} refresh={props.refresh}/>
    });
    return (
        <div>{list}</div>
    )

}
export default TodoItems;
