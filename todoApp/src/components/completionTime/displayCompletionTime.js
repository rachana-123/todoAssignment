import './displayCompletionTime.scss';

export function CompletionTime(props){
    // console.log(props.data.priority);
    let present = new Date(props.data.completedTime);
    let created = new Date(props.data.created_at)
    const diff = Math.abs(present.getTime() - created.getTime());
    var minutes = Math.floor(diff / 60000);
    const hours = minutes / 60;
     console.log(hours);
    if(hours<=props.data.expectedCompletionTime){
        return(
            <div style={{"color":"green"}}>Task completed in time</div>
        )
    }else{
        return(
        <div style={{"color":"green"}}>Extra time taken: {(hours-props.data.expectedCompletionTime).toFixed(2)}h</div>
        )
    }
    
}