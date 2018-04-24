import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import User from '../user/User';

class Main extends Component {
  render() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/user' component={User} />
        </Switch>
    );
  }
}

export default Main;
