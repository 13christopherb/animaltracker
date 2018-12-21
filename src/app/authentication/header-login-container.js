import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {authenticatinActions} from "./ducks/index";
import {connect} from 'react-redux';
import {validate} from "./validators";


/**
 * Container component for a form to create a new animal
 */
class HeaderLoginContainer extends Component {

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
            React.cloneElement(this.props.children, {onSubmit: this.handleSubmit, ...this.props})
        );
    }
}

function mapStateToProps({authentication}) {
    return {
        user: authentication.user,
        loginError: authentication.loginError,
    };
}

export default reduxForm({
    form: 'HeaderLogin',
    validate
})(connect(mapStateToProps)(HeaderLoginContainer));
