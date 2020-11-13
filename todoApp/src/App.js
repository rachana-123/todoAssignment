import './App.scss';
// import style from './css/style.module.css';
import { GetRoutes } from './routes/routes';
import {Topnav} from './components/navComponent';

function App() {
  return (
    <div>
      <div>
        <Topnav/>
        <GetRoutes/>
      </div>
    </div>
  );
}

export default App;
