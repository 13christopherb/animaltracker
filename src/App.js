import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPrescriptionBottleAlt, faBlender, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {Route, Switch} from 'react-router';
import {PrivateRoute} from "./components/PrivateRoute";
import { Locations } from './components/Locations';
import { UserLogin} from "./components/UserLogin";


library.add(faPrescriptionBottleAlt);
library.add(faBlender);
library.add(faChevronRight);
library.add(faChevronDown);

class App extends Component {

    render() {
        return (
            <div className="container-fluid">
                <Switch>
                    <PrivateRoute exact path="/" component={Locations}/>
                    <Route exact path="/login" component={UserLogin} />
                </Switch>
            </div>
        );
    }
}

function mapStateToProps() {
    return {
    }
}


export default connect(
    mapStateToProps,
)(App)
