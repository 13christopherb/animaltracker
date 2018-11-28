import React, {Component} from 'react';
import {connect} from 'react-redux';
import Media from "react-media";
import {locationActions} from './ducks/';
import {transportActions} from "../transports/ducks";
import Location from './location';
import {AnimalFormContainer} from "../animal-form/animal-form-container";
import LocationSummaries from "./location-summaries";
import {AnimalForm} from "../animal-form/animal-form";


class Locations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            addingAnimal: false
        };

        this.toggleAddAnimal = this.toggleAddAnimal.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(locationActions.getLocations());
        this.props.dispatch(transportActions.getTransports())
    }

    toggleAddAnimal(e) {
        this.setState({addingAnimal: !this.state.addingAnimal})
    }

    render() {
        return (
            <div>
                {this.state.addingAnimal ? (
                    <AnimalFormContainer toggleAddAnimal={this.toggleAddAnimal}><AnimalForm/></AnimalFormContainer>) : (
                    <button onClick={this.toggleAddAnimal} className="btn btn-success">Add animal</button>
                )}
                <Media query={{minWidth: 650}}>
                    {matches =>
                        matches ? (
                            <div>
                                {Object.keys(this.props.locations).map(
                                    (location) =>
                                        <Location key={location}
                                                  location={location}/>
                                )}
                            </div>
                        ) : (
                            <div className="card-columns">
                                <LocationSummaries/>
                            </div>)
                    }
                </Media>
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
