import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardColumns from 'react-bootstrap/lib/CardColumns'
import {locationActions} from './ducks/';
import LocationCard from "./location-card";
import Locations from './locations';

class LocationSummaries extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            expandedLocationNames: [this.props.userLocation],
        };
        this.componentWillMount = this.componentWillMount.bind(this);
        this.expandSummary = this.expandSummary.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(locationActions.getLocations())
    }

    expandSummary(locationName) {
        const index = this.state.expandedLocationNames.indexOf(locationName);
        const locations = [...this.state.expandedLocationNames];
        index >= 0 ? locations.splice(index, 1) : locations.push(locationName);
        this.setState({
            expandedLocationNames: locations
        });
    }

    render() {
        return (
            <CardColumns>
                {this.props.locations.map(
                    (location) =>
                        <LocationCard key={location.locationName}
                                      {...location}
                                      expandSummary={this.expandSummary}
                                      expanded={this.state.expandedLocationNames.includes(location.locationName)}
                                      transports={this.props.transports.filter((transport) =>
                                          transport.departs === location.locationName ||
                                          transport.arrives === location.locationName)}
                        />
                )}
            </CardColumns>
        );
    }
}

function mapStateToProps({locations, transports, authentication}, ownProps) {
    return {
        locations: Locations.sortLocations(locations.locations),
        transports: transports.transports,
        userLocation: authentication.userLocation
    }
}

export default connect(mapStateToProps)(LocationSummaries);
