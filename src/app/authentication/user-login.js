import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {actions} from './ducks/actions';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Form from 'react-bootstrap/lib/Form';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';


export const UserLogin = ({handleSubmit, handleChange, onSubmit, value, user, ...rest}) => {

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
                {this.props.loginError && <h3>Error</h3>}
                <Button variant="primary" type="submit">Sign in</Button>
            </Form>
        </Jumbotron>
    );
};

