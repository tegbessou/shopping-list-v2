import React, { Component } from 'react';
import { connect } from 'react-redux';

import { alertActions } from '../actions/alert.actions';

class Alert extends Component {
    constructor(props) {
        super(props);

        this.handleCLick = this.handleCLick.bind(this);
    }

    handleCLick() {
        const { dispatch } = this.props;

        dispatch(alertActions.success());
    }

    render() {
        const { error, show } = this.props;

        return (
            <div
                className={ show
                    ? "card-panel red darken-1"
                    : "card-panel red darken-1 hide"
                }
            >
                <span>{error}</span>
                <i className="material-icons right" onClick={this.handleCLick}>close</i>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { error, show } = state.alert;

    return {
        error,
        show
    };
}

const connectedAlert = connect(mapStateToProps)(Alert);
export { connectedAlert as Alert }