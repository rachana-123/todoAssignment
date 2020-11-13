
export function Form(props) {
    // console.log(props);
    let handleSubmit1=(e)=>{
        e.preventDefault();
        let task= document.getElementById("task").value;
        let data= {taskName: task}
        props.handleUpdate(data);
        document.getElementById("task").value="";
    }
    let handleSubmit2=(e)=>{
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
        props.handleUpdate(data);
        document.getElementById("task").value="";
        document.getElementById("timeRequired").value="";
    }
    if (props.data.isTimeEntered) {
        return (
            <form id="add-todo" className="update-todo" onSubmit={handleSubmit1}>
                Update Task:<br /><br />
                <input type="text" id="task" placeholder="Enter task" required /><br /><br />
                <input type="submit" value="Update" />
            </form>
        )
    } else {
        return (
            <form id="add-todo" className="update-todo" onSubmit={handleSubmit2}>
                Update Task:<br /><br />
                <input type="text" id="task" placeholder="Enter task" required /><br /><br />
                Enter time required for completion: (optional)<br /><br />
                <input type="number" id="timeRequired" placeholder="Enter time (in hours)" /><br /><br />
                <input type="submit" value="Update" />
            </form>
        )
    }
}