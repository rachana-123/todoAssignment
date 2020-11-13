import React from 'react';
import './addItem.scss';

class AddItem extends React.Component{
    handleSubmit=e=>{
        e.preventDefault();
        let isTimeEntered;
        let task= document.getElementById("task").value;
        let timeRequired=document.getElementById("timeRequired").value;
        console.log(typeof(timeRequired));
        if(timeRequired!==""){
            isTimeEntered= true;
        }else{
            isTimeEntered=false;
        }
        let data= {taskName: task, expectedCompletionTime: timeRequired, isTimeEntered: isTimeEntered}
        this.props.onAdd(data);
        document.getElementById("task").value="";
        document.getElementById("timeRequired").value="";
    }
    render(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
                Add Task:<br/><br/>
                <input type="text" id="task" placeholder="Enter task" required /><br/><br/>
                Enter time required for completion: (optional)<br/><br/>
                <input type="number" id="timeRequired" placeholder="Enter time (in hours)"/><br/><br/>
                <input type="submit" value={this.props.value} />
            </form>
        );
    }   
}

export default AddItem;