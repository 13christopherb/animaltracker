import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardColumns from 'react-bootstrap/lib/CardColumns'
import BounceLoader from 'react-spinners/BounceLoader';
import LocationCard from "./location-card";
import Locations from './locations';
import Row from "react-bootstrap/lib/Container";
import Col from "react-bootstrap/lib/Col";

class LocationSummaries extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            expandedLocationNames: [this.props.userLocation],
        };
        this.expandSummary = this.expandSummary.bind(this);
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
            <div>
                {this.props.isLoading ?
                    <Row>
                        <Col xs={{span: 8, offset: 2}}>
                            <div style={{marginTop: '25vh'}}>
                                <BounceLoader
                                    size={140}
                                    color={'#123abc'}
                                    loading={this.props.isLoading}
                                />
                            </div>
                        </Col>
                    </Row> :
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
                }
            </div>
        );
    }
}

function mapStateToProps({locations, transports, authentication}, ownProps) {
    return {
        locations: Locations.sortLocations(locations.locations),
        isLoading: locations.isLoading,
        transports: transports.transports,
        userLocation: authentication.userLocation
    }
}

export default connect(mapStateToProps)(LocationSummaries);
