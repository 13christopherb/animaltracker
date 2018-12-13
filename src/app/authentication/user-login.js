import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {actions} from './ducks/actions';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Form from 'react-bootstrap/lib/Form';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import NewUser from "../registration/new-user";


class UserLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        const login = {
            username: this.state.username,
            password: this.state.password
        };
        this.props.dispatch(actions.login(login));
    };

    render() {
        if (this.props.user) {
            return (<Redirect to={{pathname: '/'}}/>)
        }
        return (
            <Jumbotron>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Col>
                            <label>
                                Username
                                <input
                                    name="username" className="form-control"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    value={this.state.username}
                                />
                            </label>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <label>
                            Password
                            <input
                                name="password" className="form-control"
                                type="password"
                                onChange={this.handleInputChange}
                                value={this.state.password}
                            />
                        </label>
                    </Form.Row>
                    <Button variant="primary" type="submit">Sign in</Button>
                </Form>
            </Jumbotron>
        );
    }
}

function mapStateToProps({authentication}) {
    return {
        user: authentication.user
    };
}

export default connect(mapStateToProps)(UserLogin);
