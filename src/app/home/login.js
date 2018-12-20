import React, {Component} from 'react';
import {connect} from 'react-redux';
import Locations from "../locations/locations";
import {actions} from '../authentication/ducks/actions';


class Login extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(e) {
        this.props.dispatch(actions.logout());
    }

    render() {
        return (
            <div>
                <Locations/>
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