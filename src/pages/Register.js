import React, { Component } from 'react';
import { Row, Input, Modal, Button } from 'react-materialize';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                login: null,
                password: null,
                firstName: null,
                lastName: null,
                address1: null,
                address2: null,
                zipCode: null,
                country: null,
                phoneNumber: null
            },
            isSubmitted: true
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
        event.preventDefault();

        this.setState({
            isSubmitted: true
        });

        console.log(this.state);
    }

    handleCloseModal(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Modal
                id='register'
                header='Register'
                actions={
                    <div></div>
            }>
                <form id="form-register" onSubmit={this.handleSubmit}>
                    <Row>
                        <Input name="login" onChange={this.handleChange} placeholder="Username" s={12} />
                        <Input name="password" type="password" onChange={this.handleChange} placeholder="Password" s={12} />
                        <Input name="firstName" onChange={this.handleChange} placeholder="First name" s={12} />
                        <Input name="lastName" onChange={this.handleChange} placeholder="Last name" s={12} />
                        <Input name="address1" onChange={this.handleChange} placeholder="Address 1" s={12} />
                        <Input name="address2" onChange={this.handleChange} placeholder="Address 2" s={12} />
                        <Input name="zipCode" onChange={this.handleChange} placeholder="Zip code" s={12} />
                        <Input name="country" onChange={this.handleChange} placeholder="Country" s={12} />
                        <Input name="phoneNumber" onChange={this.handleChange} placeholder="Phone number" s={12} />
                        <Button waves="light" type="submit" className="red darken-2">Register</Button>
                    <Button flat modal="close" onClick={this.handleCloseModal} waves="light">Close</Button>
                    </Row>
                </form>
            </Modal>
        );
    }
}

export default Register;
