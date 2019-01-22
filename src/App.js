import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './components/main/Home'
import Register from './components/auth/Register.jsx'

library.add(fas, fab, far)

class App extends Component {
  render() {
    return (
      <div className="root">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/user" component={Home} />
          <Route path="/admin" exact component={Home} />
          <Route path="/admin/{id}" component={Home} />
        </Switch>
      </div>
    )
  }
}

export default App
