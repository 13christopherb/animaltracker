import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {Locations} from "./Locations";
import {userActions} from '../actions/UserActions';
import {UserLogin} from "./UserLogin";
import {withRouter} from 'react-router'


class Home extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(e) {
        this.props.dispatch(userActions.logout());
    }

    render() {
        return (
            <div>
                <button onClick={this.logout} id="logout" className="btn btn-primary">Sign out</button>
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

const connectedHome = withRouter(connect(
    mapStateToProps,
)(Home));

export {connectedHome as Home};