import React, { Component } from 'react';
import { Navbar, Button } from 'react-materialize'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Login } from '../components/Login';
import { Register } from '../components/Register';
import { Logout } from '../components/Logout';

import logo from '../../images/logo.png';
import styles from './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleOpenModalLogin = this.handleOpenModalLogin.bind(this)
        this.handleOpenModalRegister = this.handleOpenModalRegister.bind(this)
    }

    handleOpenModalLogin() {
        $('#login').modal('open');
    }

    handleOpenModalRegister() {
        $('#register').modal('open');
    }

    render() {
        const { loggingIn } = this.props;

        return (
            <div>
                <Navbar brand={<img src={logo} className={styles.logo} />} left>
                { loggingIn
                    ? <div><li><Link to='/user'>User</Link></li>
                        <li><Logout /></li></div>
                    : <div>
                        <li>
                            <a onClick={this.handleOpenModalLogin}>Login</a>
                        </li>
                        <li>
                            <a onClick={this.handleOpenModalRegister}>Register</a>
                        </li>
                    </div>
                }
                </Navbar>
                <Login />
                <Register />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;

    return {
        loggingIn
    };
}

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header }
