import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/main/Home';

class App extends Component {
  render() {
    return (
      <div className="root">
        <Switch>
          <Route path="/" exact="true" component={Home} />
          <Route path="/register" exact="true" component={Home} />
          <Route path="/user" component={Home} />
          <Route path="/admin" exact="true" component={Home} />
          <Route path="/admin/{id}" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
