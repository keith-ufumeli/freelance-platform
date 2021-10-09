import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login'
import Home from './pages/home/Home';
import MyJobs from './pages/MyJobs/MyJobs';
import Contracts from './pages/Contracts/Contracts';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/register' component={Register} />
        <Route path = '/login' component={Login} />
        <Route path = '/myjobs' component={MyJobs} />
        <Route path = '/contracts' component={Contracts} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
