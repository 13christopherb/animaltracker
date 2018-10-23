import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faPrescriptionBottleAlt, faBlender, faChevronRight, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router';
import {PrivateRoute} from "./components/PrivateRoute";
import {Home} from "./components/Home";
import {UserLogin} from "./components/UserLogin";
import {Locations} from "./components/Locations";


library.add(faPrescriptionBottleAlt);
library.add(faBlender);
library.add(faChevronRight);
library.add(faChevronDown);

class App extends Component {

    render() {
        return (
            <div className="container-fluid">
                <PrivateRoute exact path="/" component={Home} auth={this.props.user}/>
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
