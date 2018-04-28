import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import User from '../pages/User';

class Main extends Component {
  render() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/user' component={User} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
        </Switch>
    );
  }
}

export default Main;
