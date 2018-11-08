import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
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
            <div>
                <form className="form-inline" onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                    <Field
                        component={Input}
                        id="username"
                        name="username"
                        type="text"
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
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign in</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'HeaderLogin',
    validate
})(HeaderLogin);