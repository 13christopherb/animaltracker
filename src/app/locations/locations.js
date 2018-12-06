import React, {Component} from 'react';
import {connect} from 'react-redux';
import Media from 'react-media';
import {locationActions} from './ducks/';
import {transportActions} from '../transports/ducks';
import Location from './location';
import LocationSummaries from './location-summaries';
import {AnimalForm, AnimalFormContainer} from '../animal-forms/';


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
                <Media query={{minWidth: 650}}>
                    {matches =>
                        matches ? (
                            <div>
                                {this.state.addingAnimal ? (
                                    <AnimalFormContainer toggleAddAnimal={this.toggleAddAnimal}>
                                        <AnimalForm/>
                                    </AnimalFormContainer>) : (
                                    <button onClick={this.toggleAddAnimal} className="btn btn-success">Add animal</button>
                                )}
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
