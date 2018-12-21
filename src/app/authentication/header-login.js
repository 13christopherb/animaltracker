import React from 'react';
import {Field} from 'redux-form';
import {Form, Button} from 'react-bootstrap';
import {Input} from "../form-fields/index";

export const HeaderLogin = ({handleSubmit, handleChange, onSubmit, loginError, value, ...rest}) => {
        return (
                <Form inline onSubmit={handleSubmit(onSubmit)}>
                    <Field
                        component={Input}
                        id="header-username"
                        name="username"
                        type="text"
                        className="mr-sm-2"
                        onChange={handleChange}
                        value={value}
                        displayErrorMessage={false}
                        serverError={loginError}
                    />
                    <Field
                        component={Input}
                        id="header-password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                        value={value}
                        displayErrorMessage={false}
                        serverError={loginError}
                    />
                    <Button variant="outline-success" type="submit">Sign in</Button>
                </Form>
        );
};