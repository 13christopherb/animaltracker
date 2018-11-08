import React, {Component} from 'react';
import {connect} from 'react-redux';
import Media from "react-media";
import {locationActions} from './ducks/';
import Location from './location';
import AnimalFormContainer from "../animal-form/animal-form-container";
import LocationSummary from "./location-summary";


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
                <Media query={{minWidth: 700}}>
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
                                {Object.keys(this.props.locations).map(
                                    (location) =>
                                        <LocationSummary key={location}
                                                         {...this.props.locations[location]} />
                                )}
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
