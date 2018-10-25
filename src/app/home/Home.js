import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {Locations} from "../animals/Locations";
import {actions} from '../authentication/ducks/actions';
import {Header} from "./Header";


class Home extends Component {

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

const connectedHome = connect(
    mapStateToProps,
)(Home);

export {connectedHome as Home};