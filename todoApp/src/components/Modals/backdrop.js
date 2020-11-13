// import AddItem from '../addItems/addItems';
import './update.scss';

export function Backdrop(props) {
    // console.log(props);
    const backdrop= props.data ? <div className="backdrop" onClick={props.onhandleUpdate}>
    </div> : null
    return(
        backdrop
    )
}