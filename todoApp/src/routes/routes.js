import { Route } from 'react-router-dom';
// import { About } from '../components/about';
import TodoComponent from '../components/AddTask/toDoComponent';
import AllTodos from '../components/allTodos';
import PriorityTasks from '../components/priorityTasks/priorityTasks';
import CompletedTasks from '../components/completedTasks/completedTasks';

export function GetRoutes() {
    return (
        <div>
            <Route exact path={"/addTask"} component={TodoComponent}></Route>
            <Route path={"/viewAll"} component={AllTodos}></Route>
            <Route path={"/priorityTasks"} component={PriorityTasks}></Route>
            <Route path={"/completedTasks"} component={CompletedTasks}></Route>
        </div>
    );
}
