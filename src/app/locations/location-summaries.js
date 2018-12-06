import React, {Component} from 'react';
import {connect} from 'react-redux';
import {locationActions} from './ducks/';
import LocationCard from "../location-card";

class LocationSummaries extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            expandedLocationName: ''
        };

        this.componentWillMount = this.componentWillMount.bind(this);
        this.toggleAddAnimal = this.toggleAddAnimal.bind(this);
        this.expandSummary = this.expandSummary.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(locationActions.getLocations())
    }

    expandSummary(locationName) {
        this.setState({
            expandedLocationName: locationName ? locationName : ''
        });
    }

    toggleAddAnimal(e) {
        //this.setState({addingAnimal: !this.state.addingAnimal})
    }

    render() {
        return (
            <div className="card-columns">
                {this.state.expandedLocationName ? (
                    <LocationCard key={this.state.expandedLocationName}
                                  {...this.props.locations[this.state.expandedLocationName]}
                                  expandSummary={this.expandSummary}
                                  expanded={true}/>
                    ): (
                    <div>
                        {Object.keys(this.props.locations).map(
                            (location) =>
                                <LocationCard key={location}
                                              {...this.props.locations[location]}
                                              expandSummary={this.expandSummary}
                                              expanded={this.state.expandedSummaryName === location}
                                              transports={this.props.transports.filter((transport) =>
                                                     transport.departs === location || transport.arrives === location)}
                                />
                        )}
                    </div>
                    )}
            </div>
        );
    }
}

function mapStateToProps({locations, transports}, ownProps) {
    return {
        locations: locations.locations,
        transports: transports.transports
    }
}

export default connect(mapStateToProps)(LocationSummaries);
