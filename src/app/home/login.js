import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginFormContainer from '../authentication/login-container';
import {UserLogin} from '../authentication/user-login';
import {Redirect} from "react-router";

class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.loggedIn) {
            return (<Redirect to={{pathname: '/'}}/>)
        }
        return (
            <div>
                <LoginFormContainer>
                    <UserLogin />
                </LoginFormContainer>
            </div>
        );
    }
}

function mapStateToProps({animals, authentication}, ownProps) {
    return {
        loggedIn: authentication.loggedIn
    }
}

const connectedLogin = connect(
    mapStateToProps,
)(Login);

export {connectedLogin as Login};