import React, {Component} from 'react';
import {connect} from 'react-redux';
import Media from 'react-media';
import Button from 'react-bootstrap/lib/Button';
import Collapse from 'react-bootstrap/lib/Collapse';
import Fade from 'react-bootstrap/lib/Fade';
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
            addingAnimal: false,
            open: false
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

    static sortLocations(locations) {
        const locationOrder = {
            'NRO': 0,
            'MBO': 1,
            'SLO': 2,
        };
        let locs = [];
        Object.keys(locations).map(
            (location) =>
                locs.push(locations[location])
        );
        locs.sort((loc1, loc2) => locationOrder[loc1.locationName] < locationOrder[loc2.locationName] ? -1 : 1);
        return locs;
    }

    render() {
        return (
            <div>
                <Media query={{minWidth: 650}}>
                    {matches =>
                        matches ? (
                            <div>
                                <Collapse in={this.state.addingAnimal}>
                                    <div id="animal-inline-form">
                                        <AnimalFormContainer toggleAddAnimal={this.toggleAddAnimal}>
                                            <AnimalForm/>
                                        </AnimalFormContainer>
                                    </div>
                                </Collapse>
                                <Fade in={!this.state.addingAnimal}>
                                    <div id="add-animal-inline-form">
                                        <Button variant="primary"
                                                onClick={this.toggleAddAnimal}
                                                aria-controls="animal-inline-form"
                                        >Add animal</Button>
                                    </div>
                                </Fade>
                                {this.props.locations.map(
                                    (location) =>
                                        <Location key={location.locationName}
                                                  {...location}
                                        />
                                )}
                            </div>
                        ) : (
                            <LocationSummaries/>
                        )
                    }
                </Media>
            </div>
        );
    }
}

function mapStateToProps({authentication, locations}, ownProps) {
    return {
        locations: Locations.sortLocations(locations.locations),
        loggedIn: authentication.loggedIn
    }
}

export default connect(mapStateToProps)(Locations);
