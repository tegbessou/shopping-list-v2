import React, { Component } from 'react';
import { Row, Input, Modal, Button } from 'react-materialize';
import { connect } from 'react-redux';

import { userActions } from '../actions/user.actions';

import styles from './Register.css';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                login: '',
                password: '',
                firstName: '',
                lastName: '',
                address1: '',
                address2: '',
                city: '',
                zipCode: '',
                country: '',
                phoneNumber: ''
            },
            isSubmitted: false
        }

        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;

        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        const { login, password, firstName, lastName, address1, address2, city, zipCode, country, phoneNumber } = this.state.user;
        const { dispatch } = this.props;

        event.preventDefault();

        this.setState({
            isSubmitted: true
        });

        if (password && login && firstName && lastName && address1 && zipCode && country && phoneNumber) {
            dispatch(userActions.register(this.state.user))
            $("#register").modal('close');
            this.resetForm();
        }
    }

    handleCloseModal(event) {
        event.preventDefault();
    }

    resetForm() {
        this.setState({
            user: {
                login: '',
                password: '',
                firstName: '',
                lastName: '',
                address1: '',
                address2: '',
                city: '',
                zipCode: '',
                country: '',
                phoneNumber: ''
            },
            isSubmitted: false
        })
    }

    render() {
        const { login, password, firstName, lastName, address1, address2, city, zipCode, country, phoneNumber } = this.state.user;
        const { isSubmitted } = this.state;

        return (
            <Modal
                id='register'
                header='Register'
                actions={
                    <span className={isSubmitted && (!password || !login || !firstName || !lastName || !address1 || !zipCode || !country || !phoneNumber) ? styles.error : ''}>* Input required</span>
                }
            >
                <form id="form-register" onSubmit={this.handleSubmit}>
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
                        <Input
                            name="firstName"
                            onChange={this.handleChange}
                            placeholder="First name *"
                            s={12}
                            error={isSubmitted && !firstName ? 'true' : ''}
                            value={firstName}
                        />
                        <Input
                            name="lastName"
                            onChange={this.handleChange}
                            placeholder="Last name *"
                            s={12}
                            error={isSubmitted && !lastName ? 'true' : ''}
                            value={lastName}
                        />
                        <Input
                            name="address1"
                            onChange={this.handleChange}
                            placeholder="Address 1 *"
                            s={12}
                            error={isSubmitted && !address1 ? 'true' : ''}
                            value={address1}
                        />
                        <Input
                            name="address2"
                            onChange={this.handleChange}
                            placeholder="Address 2"
                            s={12}
                            value={address2}
                        />
                        <Input
                            name="city"
                            onChange={this.handleChange}
                            placeholder="City *"
                            s={12}
                            error={isSubmitted && !city ? 'true' : ''}
                            value={city}
                        />
                        <Input
                            name="zipCode"
                            onChange={this.handleChange}
                            placeholder="Zip code *"
                            s={12}
                            error={isSubmitted && !zipCode ? 'true' : ''}
                            value={zipCode}
                        />
                        <Input
                            name="country"
                            onChange={this.handleChange}
                            placeholder="Country *"
                            s={12}
                            error={isSubmitted && !country ? 'true' : ''}
                            value={country}
                        />
                        <Input
                            name="phoneNumber"
                            onChange={this.handleChange}
                            placeholder="Phone number *"
                            s={12}
                            error={isSubmitted && !phoneNumber ? 'true' : ''}
                            value={phoneNumber}
                        />
                        <Button waves="light" type="submit" className="red darken-2">Register</Button>
                        <Button flat modal="close" onClick={this.handleCloseModal} waves="light">Close</Button>
                    </Row>
                </form>
            </Modal>
        );
    }
}

function mapStateToProps(state) {
    const { error } = state.registration;

    return {
        error
    };
}

const connectedRegister = connect(mapStateToProps)(Register);
export { connectedRegister as Register }
