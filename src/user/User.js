import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import UserProfil from './UserProfil';
import UserList from './UserList';

class User extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route exact path='/user' component={UserList}/>
            <Route path='/user/:number' component={UserProfil}/>
        </Switch>
      </div>
    );
  }
}

export default User;
