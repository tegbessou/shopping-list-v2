import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import User from '../pages/User';
import { PrivateRoute } from '../components/PrivateRoute';

class Main extends Component {
  render() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <PrivateRoute exact path='/user' component={User} />
        </Switch>
    );
  }
}

export default Main;
