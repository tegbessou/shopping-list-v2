import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userActions } from '../actions/user.actions';

class Logout extends Component {
    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { dispatch } = this.props;

        dispatch(userActions.logout());
    }

    render() {
        return (
            <div>
                <a onClick={this.handleClick}>Logout</a>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedLogout = connect(mapStateToProps)(Logout);
export { connectedLogout as Logout }