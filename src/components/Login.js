import React, { Component } from 'react';
import { Modal, Button, Row, Input } from 'react-materialize';
import { connect } from 'react-redux';

import { Register } from './Register';
import { userActions } from '../actions/user.actions';

import styles from './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
            isSubmitted: false
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { dispatch } = this.props;
        const { login, password } = this.state;
        this.setState({
            isSubmitted: true
        });

        if (login && password) {
            dispatch(userActions.login(login, password));
            $('#login').modal('close');
            this.resetForm();
        }
    }

    handleOpenModal(event) {
        $('#register').modal('open');
        event.preventDefault();
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    resetForm() {
        this.setState({
            login: '',
            password: '',
            isSubmitted: false
        })
    }

    render() {
        const { login, password, isSubmitted } = this.state;
        const { error } = this.props;

        return (
            <div>
                <Modal
                    id='login'
                    header='Login'
                    actions={
                        <span className={isSubmitted && (!password || !login) ? styles.error : ''}>* Input required</span>
                    }
                >
                    <form id="form-login" onSubmit={this.handleSubmit}>
                        <Row>
                            <Input
                                name="login"
                                onChange={this.handleChange}
                                placeholder="Username *"
                                s={12}
                                error={isSubmitted && !login ? 'true' : ''}
                                value={login}
                            />
                            <Input
                                name="password"
                                type="password"
                                onChange={this.handleChange}
                                placeholder="Password *"
                                s={12}
                                error={isSubmitted && !password ? 'true' : ''}
                                value={password}
                            />
                            <Button waves="light" type="submit" className="red darken-2">Login</Button>
                            <Button flat modal="close" onClick={this.handleOpenModal} waves="light">Register</Button>
                        </Row>
                    </form>
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn, error } = state.authentication;

    return {
        loggingIn,
        error
    };
}

const connectedLogin = connect(mapStateToProps)(Login);
export { connectedLogin as Login }
