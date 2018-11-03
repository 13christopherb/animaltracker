import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faPrescriptionBottleAlt, faBlender, faChevronRight, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router';
import {PrivateRoute} from "./utils/private-route";
import {Home} from "./app/home/home";
import UserLogin from "./app/authentication/user-login";
import Locations from "./app/locations/locations";
import Header from "./app/home/header";
import {Transports} from "./app/transports/transports";


library.add(faPrescriptionBottleAlt);
library.add(faBlender);
library.add(faChevronRight);
library.add(faChevronDown);

class App extends Component {

    render() {
        return (
            <div className="container-fluid">
                <Header/>
                <PrivateRoute exact path="/" component={Home} auth={this.props.user}/>
                <PrivateRoute exact path="/transports" component={Transports} auth={this.props.user}/>
                <Route exact path="/login" component={UserLogin}/>
            </div>
        );
    }
}

function mapStateToProps({authentication}) {
    return {
        user: authentication.user
    }
}


export default withRouter(connect(
    mapStateToProps,
)(App));
