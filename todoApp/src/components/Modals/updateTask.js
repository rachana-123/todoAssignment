import { Form } from '../Forms/form';
import { Backdrop } from './backdrop';
import './update.scss';
import axios from 'axios';

export function UpdateTask(props){
    // console.log(props);
    let handleUpdate=(data)=>{
        console.log(data);
        axios.patch(`http://localhost:2000/updateTask/${props.data._id}`,data)
        .then(res=>{
            console.log(res);
            props.refresh();
        })
        .catch(err=>console.log(err));
        alert("Task Updated");
        // window.location.reload(false);
    }
    return(
        <div>
            <Backdrop data={props.showBackdrop} onhandleUpdate={props.onhandleUpdate}/>
            <div className="updateForm">
            <Form data={props.data} handleUpdate={handleUpdate}/>
            </div>
        </div>
    )
}