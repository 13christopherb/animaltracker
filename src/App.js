
import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faPrescriptionBottleAlt, faBlender, faChevronDown, faEdit, faTrashAlt,
    faTimes, faEllipsisH, faPeopleCarry, faPlus, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router';
import Media from "react-media";
import {PrivateRoute} from "./utils/private-route";
import {Home} from "./app/home/home";
import UserLogin from "./app/authentication/user-login";
import Header from "./app/header/header";
import {Transports} from "./app/transports/transports";


library.add(faPrescriptionBottleAlt);
library.add(faBlender);
library.add(faChevronDown);
library.add(faEdit);
library.add(faTrashAlt);
library.add(faTimes);
library.add(faEllipsisH);
library.add(faPeopleCarry);
library.add(faPlus);
library.add(faArrowRight);

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Media query={{ minWidth: 600 }}>
                    {matches =>
                        matches && <Header/>
                    }
                </Media>
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