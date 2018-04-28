import React, { Component } from 'react';
import { Navbar, Button } from 'react-materialize'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

import Login from '../pages/Login';

import styles from './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleOpenModal = this.handleOpenModal.bind(this)
    }

    handleOpenModal() {
        $('#login').modal('open');
    }

    render() {
        return (
            <div>
                <Navbar brand={<img src={logo} className={styles.logo} />} left>
                <li>
                    <a onClick={this.handleOpenModal}>Login
                    </a>
                </li>
                </Navbar>
                <Login />
            </div>
        );
    }
}

export default Header;
