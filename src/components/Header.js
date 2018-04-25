import React, { Component } from 'react';
import { Navbar } from 'react-materialize'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

import styles from './Header.css';

class Header extends Component {
  render() {
    return (
        <Navbar brand={<img src={logo} className={styles.logo} />} left>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/user">User</Link></li>
        </Navbar>
    );
  }
}

export default Header;
