import React, { Component } from 'react';
import { Modal, Button, Row, Input } from 'react-materialize';

import Register from './Register';

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
        this.setState({
            isSubmitted: true
        });

        if (this.state.isSubmitted) {
            console.log(this.state);
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

    render() {
        return (
            <div>
                <Modal
                    id='login'
                    header='Login'
                    actions={
                        <div>
                        </div>
                    }
                >
                    <form id="form-login" onSubmit={this.handleSubmit}>
                        <Row>
                            <Input name="login" onChange={this.handleChange} placeholder="Username" s={12} />
                            <Input name="password" type="password" onChange={this.handleChange} placeholder="Password" s={12} />
                            <Button waves="light" type="submit" className="red darken-2">Login</Button>
                            <Button flat modal="close" onClick={this.handleOpenModal} waves="light">Register</Button>
                        </Row>
                    </form>
                </Modal>
                <Register />
            </div>
        );
    }
}

export default Login;
