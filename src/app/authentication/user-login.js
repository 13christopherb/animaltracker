import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Alert from 'react-bootstrap/lib/Alert';
import Form from 'react-bootstrap/lib/Form';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Fade from 'react-bootstrap/lib/Fade';
import {Input} from "../form-fields";
import {Field} from "redux-form";


export const UserLogin = ({handleSubmit, handleChange, onSubmit, value, loginError = false, ...rest}) => {
    return (
        <Jumbotron>
            <Fade in={loginError}>
                <div id="login-error-fade">
                    <Alert variant="danger">Username or password is incorrect</Alert>
                </div>
            </Fade>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Row>
                    <Col md={3} xs={12}>
                        <Field
                            component={Input}
                            id="username"
                            name="username"
                            title="Username"
                            type="text"
                            className="mr-sm-2"
                            onChange={handleChange}
                            value={value}
                            serverError={loginError}
                        />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={3} xs={12}>
                        <Field
                            component={Input}
                            id="password"
                            name="password"
                            title="Password"
                            type="password"
                            onChange={handleChange}
                            value={value}
                            serverError={loginError}
                        />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={3} xs={12}>
                        <Button variant="primary"
                                type="submit"
                                aria-controls="login-error-fade"
                                block>Sign in</Button>
                    </Col>
                </Form.Row>
            </Form>
        </Jumbotron>
    );
};

