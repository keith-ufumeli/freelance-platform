import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login'
import Home from './pages/home/Home';
import MyJobs from './pages/MyJobs/MyJobs';
import Contracts from './pages/Contracts/Contracts';
import Profile from './pages/Profile/Profile';
import Account from './pages/Account/Account';
import ExploreJobs from './pages/ExploreJobs/ExploreJobs';
import SingleJob from './pages/SingleJob/SingleJob';
import ExploreSellers from './pages/ExploreSellers/ExploreSellers';
import Chat from './pages/Chat';
import CreateContract from './pages/CreateContract/CreateContract';
import PrivateRoute from './hooks/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/register' component={Register} />
        <Route path = '/login' component={Login} />
        <Route path = '/myjobs' component={MyJobs} />
        <Route path = '/explorejobs' component={ExploreJobs} />
        <Route path = '/exploresellers' component={ExploreSellers} />
        <PrivateRoute path = '/chat/:id' component={Chat} />
        <PrivateRoute path = '/profile' component={Profile} />
        <PrivateRoute path = '/account' component={Account} />
        <Route path = '/contracts' component={Contracts} />
        <Route path = '/contract/:id' component={CreateContract} />
        <Route path = '/job/:id' component={SingleJob} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
