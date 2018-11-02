import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import _ from 'underscore';
import {animalsActions} from '../animals/ducks/';
import {locationActions} from './ducks/index';
import LocationContainer from './location-container';
import AnimalFormContainer from "../animal-form/animal-form-container";


class Locations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            addingAnimal: false
        };

        this.toggleAddAnimal = this.toggleAddAnimal.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(locationActions.getLocations())
    }

    toggleAddAnimal(e) {
        this.setState({addingAnimal: !this.state.addingAnimal})
    }

    render() {
        return (
            <div>
                {this.state.addingAnimal ? (
                    <AnimalFormContainer toggleAddAnimal={this.toggleAddAnimal}/>) : (
                    <button onClick={this.toggleAddAnimal} className="btn btn-success">Add animal</button>
                )}
                {Object.keys(this.props.locations).map((location) =>
                    <LocationContainer key={location} //Need better unique key
                              location={location} />

                )}
            </div>
        );
    }
}

function mapStateToProps({authentication, locations}, ownProps) {
    return {
        locations: locations.locations,
        loggedIn: authentication.loggedIn
    }
}

export default connect(mapStateToProps)(Locations);
