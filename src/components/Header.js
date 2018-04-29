import React, { Component } from 'react';
import { Navbar, Button } from 'react-materialize'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../pages/Login';

import logo from '../../images/logo.png';
import styles from './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.handleOpenModal = this.handleOpenModal.bind(this)
    }

    handleOpenModal() {
        $('#login').modal('open');
    }

    render() {
        const { loggingIn } = this.props;

        return (
            <div>
                <Navbar brand={<img src={logo} className={styles.logo} />} left>
                { loggingIn
                    ? <Link to='/user'>User</Link>
                    : <li>
                        <a onClick={this.handleOpenModal}>Login
                        </a>
                    </li>
                }
                </Navbar>
                <Login />
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    const { loggingIn } = state.authentication;

    return {
        loggingIn
    };
}

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header }
