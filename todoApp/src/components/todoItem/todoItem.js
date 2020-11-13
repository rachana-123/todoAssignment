import React, { Component } from "react";
import './todoItem.scss'
import { Status } from './status/status';
import { ShowIndicator } from './showIndicator'
import { Progress } from '../progress/progress'
import axios from 'axios';
import { UpdateTask } from "../Modals/updateTask";
import { CompletionTime } from "../completionTime/displayCompletionTime";

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = { active: this.props.status, isUpdateClicked: false}
    }
    onStatusChange = (status) => {
        let id = this.props._id;
        // console.log(id);
        axios.patch(`http://localhost:2000/updateTask/${id}`, { "status": status })
            .then(res => {
                console.log(res);
            })
        if (status === "Todo") {
            this.setState({ active: "Todo" });
            window.location.reload(false);
        } else if (status === "In Progress") {
            this.setState({ active: "In Progress" });
            window.location.reload(false);
        }
        else if (status === "Completed") {
            axios.patch(`http://localhost:2000/updateTask/${id}`, { "priority": "No", "completedTime": (new Date().toLocaleString()) })
                .then(res => {
                    console.log(res);
                    this.setState({ active: "Completed"});
                })
            window.location.reload(false);
        }
    }
    handleDelete = () => {
        this.props.onDeleteTask(this.props._id);
    }
    handleUpdate = () => {
        this.setState({ isUpdateClicked: !this.state.isUpdateClicked });
    }
    render() {
        // console.log(this.state.completedTime);
        const updateCheck = this.state.isUpdateClicked ? <UpdateTask data={this.props} showBackdrop={this.state.isUpdateClicked} onhandleUpdate={this.handleUpdate} refresh={this.props.refresh}>
        </UpdateTask> : null;
        const statusCheck = this.state.active === "Completed" ? <CompletionTime data={this.props}/> : null
        return (
            <div className="item">
                {updateCheck}
                <Progress data={this.props} /><br />
                <div style={{ "fontSize": "40px" }}>{this.props.taskName}</div>
                <ShowIndicator data={this.props} /><hr />
                <i className="fa fa-trash-o" id="delete" aria-hidden="true" onClick={this.handleDelete}></i>
                <i className="fa fa-pencil-square-o" id="edit" aria-hidden="true" onClick={this.handleUpdate}></i>
                <Status data={this.props} active={this.state.active} onStatusChange={this.onStatusChange} />
                {statusCheck}
            </div>)
    }
}

export default TodoItem;