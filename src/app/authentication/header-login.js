import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Navbar, Form, Button} from 'react-bootstrap';
import {authenticatinActions} from "./ducks/index";
import {Input} from "../form-fields/index";
import {validate} from "./validators";


/**
 * Container component for a form to create a new animal
 */
class HeaderLogin extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        const user = {
            username: values.username,
            password: values.password
        };
        this.props.dispatch(authenticatinActions.login(user));
    }


    render() {
        return (
                <Form inline onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                    <Field
                        component={Input}
                        id="username"
                        name="username"
                        type="text"
                        className="mr-sm-2"
                        onChange={this.props.handleChange}
                        value={this.props.value}
                        displayErrorMessage={false}
                    />
                    <Field
                        component={Input}
                        id="password"
                        name="password"
                        type="password"
                        onChange={this.props.handleChange}
                        value={this.props.value}
                        displayErrorMessage={false}
                    />
                    <Button variant="outline-success" type="submit">Sign in</Button>
                </Form>
        );
    }
}

export default reduxForm({
    form: 'HeaderLogin',
    validate
})(HeaderLogin);