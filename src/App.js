import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faPrescriptionBottleAlt, faBlender, faChevronRight, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router';
import {PrivateRoute} from "./utils/PrivateRoute";
import {Home} from "./app/home/Home";
import UserLogin from "./app/authentication/UserLogin";
import Locations from "./app/locations/Locations";
import Header from "./app/home/Header";
import {Transports} from "./app/transports/Transports";


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
