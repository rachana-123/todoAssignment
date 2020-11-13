import './progress.scss'
// import ReactTooltip from "react-tooltip";
export function Progress(props) {
    // console.log(props);
    let present = new Date();
    let created = new Date(props.data.created_at)
    const diff = Math.abs(present.getTime() - created.getTime());
    var minutes = Math.floor(diff / 60000);
    const hours = minutes / 60;
    // console.log((props.data.expectedCompletionTime-hours).toFixed(2));
    if (hours < props.data.expectedCompletionTime && props.data.status !== "Completed") {
        return (
            <div id="progressBar">
                {/* <CircleProgress percentage={val.toFixed(2)} /> */}
                <label>Time Left:</label>
                <progress id="progress" value={hours} max={props.data.expectedCompletionTime}>{hours}h</progress>
        {/* <ReactTooltip id="indicator2" place="bottom" effect="solid">{(props.data.expectedCompletionTime-hours).toFixed(2)}h</ReactTooltip> */}
            </div>
        )
    } else if (hours > props.data.expectedCompletionTime && props.data.status !== "Completed") {
        return (
            <div id="progressBar" style={{ "color": "red" }}>Time Exceeded By: {(hours - props.data.expectedCompletionTime).toFixed(2)}h</div>
        )
    } else {
        return (<div></div>)
    }
}