import React, {Component} from 'react';
import {connect} from 'react-redux';
import Media from 'react-media';
import Row from 'react-bootstrap/lib/Container';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Collapse from 'react-bootstrap/lib/Collapse';
import Fade from 'react-bootstrap/lib/Fade';
import BounceLoader from 'react-spinners/BounceLoader';
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

    componentDidMount() {
        this.props.dispatch(locationActions.getLocations());
        this.props.dispatch(transportActions.getTransports())
    }

    toggleAddAnimal(e) {
        this.setState({isAddingAnimal: !this.state.isAddingAnimal})
    }

    render() {
        const {isLoading} = this.props;
        const {isAddingAnimal} = this.state;
        return (
            <Media query={{minWidth: 650}}>
                {matches =>
                    matches ? (
                        <div>
                            {isLoading ?
                                <Row>
                                    <Col xs={{span: 4, offset: 4}}>
                                        <div style={{marginTop: '25vh'}}>
                                            <BounceLoader
                                                size={200}
                                                color={'#123abc'}
                                                loading={isLoading}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                :
                                <div>
                                    <Row>
                                        <Col>
                                            <Collapse in={isAddingAnimal}>
                                                <div id="animal-inline-form">
                                                    <AnimalFormContainer toggleAddAnimal={this.toggleAddAnimal}>
                                                        <AnimalForm/>
                                                    </AnimalFormContainer>
                                                </div>
                                            </Collapse>
                                            <Fade in={!isAddingAnimal}>
                                                <div id="add-animal-inline-form">
                                                    <Button variant="primary"
                                                            onClick={this.toggleAddAnimal}
                                                            aria-controls="animal-inline-form"
                                                    >Add animal</Button>
                                                </div>
                                            </Fade>
                                        </Col>
                                    </Row>
                                    {this.props.locations.map(
                                        (location) =>
                                            <Location key={location.locationName}
                                                      {...location}
                                            />
                                    )}
                                </div>
                            }
                        </div>
                    ) : (
                        <LocationSummaries/>
                    )
                }
            </Media>
        );
    }
}

const sortLocations = (locations) =>
{
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
};

function mapStateToProps({authentication, locations, loading}, ownProps) {
    return {
        isLoading: loading['GET_LOCATIONS'],
        locations: sortLocations(locations.locations),
        loggedIn: authentication.loggedIn
    }
}

export default connect(mapStateToProps)(Locations);
