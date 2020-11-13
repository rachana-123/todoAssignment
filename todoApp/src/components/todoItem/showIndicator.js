import React from 'react';
import axios from 'axios';
import ReactTooltip from "react-tooltip";

export function ShowIndicator(props) {
    // console.log(props)
    let present = new Date();
    let created = new Date(props.data.created_at)
    const diff = Math.abs(present.getTime() - created.getTime());
    var minutes = Math.floor(diff / 60000);
    // console.log(minutes);
    const hours = minutes / 60;
    if (2 * hours >= props.data.expectedCompletionTime && (props.data.status != "Completed")) {
        let id = props.data._id;
        // console.log(id);
        axios.patch(`http://localhost:2000/updateTask/${id}`, { "priority": "Yes" })
            .then(res => {
                console.log(res);
            })
        return (
            <div>
                <div style={{ "color": "red", "fontSize": "25px" }} data-tip data-for="indicator"><i className="fa fa-hourglass-o fa-spin" style={{ "fontSize": "25px", "color": "red" }}></i> Priority </div>
                <ReactTooltip id="indicator" place="bottom" effect="solid"> Complete the task soon </ReactTooltip>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }

}