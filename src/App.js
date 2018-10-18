import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import uuidv4 from 'uuid';
import NewAnimal from './components/NewAnimal';
import Animals from './components/Animals';
import Locations from './components/Locations'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPrescriptionBottleAlt, faBlender, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';

library.add(faPrescriptionBottleAlt);
library.add(faBlender);
library.add(faChevronRight);
library.add(faChevronDown);

class App extends Component {

    render() {
        return (
            <div className="container-fluid">
                <Locations/>
                <NewAnimal/>
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
