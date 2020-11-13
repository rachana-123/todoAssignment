import React from 'react';
import classes from './status.module.scss' 
export function Status(props) {
    // console.log(props.active);
    function handleStatus(e){
        e.preventDefault();
        console.log(e.target.value);
        props.onStatusChange(e.target.value);
    }
    return (
        <div className={classes.status}>
            <button className={props.active==="Todo"? classes.todo: null} value="Todo" onClick={handleStatus}>Todo</button>
            <button className={props.active==="In Progress"? classes.progress: null} value="In Progress" onClick={handleStatus}>In Progress</button>
            <button className={props.active==="Completed"? classes.completed: null} value="Completed" onClick={handleStatus}>Completed</button>
        </div>
    )
}

