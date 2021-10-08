import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Register from './pages/Auth/Register';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/register' component={Register} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
