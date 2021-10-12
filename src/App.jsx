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
import HowItWorks from './pages/HowItWorks/HowItWorks';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/notfound/NotFound'
import Upgrade from './pages/upgrade/Upgrade';
import SignContract from './pages/SignContract/SignContract';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/register' component={Register} />
        <Route path = '/login' component={Login} />
        <Route path = '/myjobs' component={MyJobs} />
        <Route path = '/explorejobs' component={ExploreJobs} />
        <Route path = '/exploresellers' component={ExploreSellers} />
        <Route path = '/howitworks' component={HowItWorks} />
        <Route path = '/contact' component={Contact} />
        <Route path = '/job/:id' component={SingleJob} />
        <Route path = '/upgrade' component={Upgrade} />
        <Route path = '/signcontract/:id' component={SignContract} />
        <PrivateRoute path = '/chat/:id' component={Chat} />
        <PrivateRoute path = '/chat' component={Chat} />
        <PrivateRoute path = '/profile' component={Profile} />
        <PrivateRoute path = '/account' component={Account} />
        <PrivateRoute path = '/contracts' component={Contracts} />
        <PrivateRoute path = '/contract/:id' component={CreateContract} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
