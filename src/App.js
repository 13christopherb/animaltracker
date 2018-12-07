
import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faPrescriptionBottleAlt, faBlender, faChevronDown, faEdit, faTrashAlt,
    faTimes, faEllipsisH, faPeopleCarry, faPlus, faArrowRight, faOtter, faTruckPickup, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router';
import Container from 'react-bootstrap/lib/Container';
import {PrivateRoute} from "./utils/private-route";
import {Home} from "./app/home/home";
import UserLogin from "./app/authentication/user-login";
import Header from "./app/header/header";
import {Transports} from "./app/transports/transports";


library.add(faPrescriptionBottleAlt);
library.add(faBlender);
library.add(faChevronDown);
library.add(faChevronUp);
library.add(faEdit);
library.add(faTrashAlt);
library.add(faTimes);
library.add(faEllipsisH);
library.add(faPeopleCarry);
library.add(faPlus);
library.add(faArrowRight);
library.add(faOtter);
library.add(faTruckPickup);

class App extends Component {
    render() {
        return (
            <Container fluid={true}>
                <Header />
                <PrivateRoute exact path="/" component={Home} auth={this.props.user}/>
                <PrivateRoute exact path="/transports" component={Transports} auth={this.props.user}/>
                <Route exact path="/login" component={UserLogin}/>
            </Container>
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