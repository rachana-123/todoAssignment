import {NavLink } from 'react-router-dom';

export function Topnav(){
    return(
        <div className="topnav">
          <label id="main">To Dos</label>
          <span><NavLink activeClassName="active" className="links" to="/completedTasks">Completed</NavLink></span>
          <span><NavLink activeClassName="active" className="links" to="/priorityTasks">Priority</NavLink></span>
          <span><NavLink activeClassName="active" className="links" to="/viewAll">All Tasks</NavLink></span>
          <span><NavLink activeClassName="active" className="links" to="/addTask">Add Task</NavLink></span>
        </div>
    )
}
