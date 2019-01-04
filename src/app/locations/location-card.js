import React, {Component} from 'react';
import _ from 'underscore';
import {Card, Button, Collapse} from 'react-bootstrap';
import {AnimalList} from '../animals/animal-list';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LocationCardFooter from './location-card-footer';
import {AnimalFormContainer, AnimalModalForm} from '../animal-forms/index';
import {TransportFormContainer, TransportModalForm} from '../transport-form/index';
import Dropdown from "react-bootstrap/lib/Dropdown";
import connect from "react-redux/es/connect/connect";



/**
 * Condensed view of information about a location for mobile devices
 */
class LocationCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.expanded,
            showingAnimalForm: false,
            showingTransportForm: false,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.isSaving === false && prevProps.isSaving === true) {
            this.setState({showingAnimalForm: false})
        }
    }

    render() {
        console.log(this.props.isSaving);
        let animalsBySpecies = _.countBy(this.props.animals, (animal) => {
            return animal['species']
        });
        let speciesCount = [];
        for (let property in animalsBySpecies) {
            if (animalsBySpecies.hasOwnProperty(property)) {
                speciesCount.push(property + '(' + animalsBySpecies[property] + ') ')
            }
        }
        return (
            <Card className="card" key={this.props.locationName}>
                <Card.Body>
                    <Card.Title>
                        <Dropdown>
                            <h5 className="card-title">
                                {this.props.locationName}
                                <Dropdown.Toggle variant="outline-success" size="sm" className="float-right">
                                    <FontAwesomeIcon icon="plus"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => this.setState({showingAnimalForm: true})}>
                                        <FontAwesomeIcon icon="otter"/> Add animal
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.setState({showingTransportForm: true})}>
                                        <FontAwesomeIcon icon="truck-pickup"/> Add Transport
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </h5>
                        </Dropdown>
                    </Card.Title>
                    {this.props.animals.length > 0 ?
                    <Button variant="primary" size="sm"
                            onClick={(e) => this.setState({isOpen: !this.state.isOpen})}>
                        {this.state.isOpen ? <span><FontAwesomeIcon icon="chevron-down" /> {speciesCount}</span>
                            : <span><FontAwesomeIcon icon="chevron-up"/> {speciesCount}</span>}
                    </Button> : <span>No animals</span>}
                    <Collapse in={this.state.isOpen}>
                        <div>
                            <AnimalList animals={this.props.animals}/>
                        </div>
                    </Collapse>
                </Card.Body>
                <LocationCardFooter locationName={this.props.locationName} transports={this.props.transports}/>
                <AnimalFormContainer location={this.props.locationName}>
                    <AnimalModalForm id={this.props.locationName + 'animalForm'}
                                     show={this.state.showingAnimalForm || this.props.isSaving}
                                     isSaving={this.props.isSaving}
                                     toggleModal={() =>
                                         this.setState({showingAnimalForm: !this.state.showingAnimalForm})} />
                </AnimalFormContainer>
                <TransportFormContainer>
                    <TransportModalForm id={this.props.locationName + 'transportForm'}
                                        show={this.state.showingTransportForm}
                                        toggleModal={() =>
                                            this.setState({showingTransportForm: !this.state.showingTransportForm})} />
                </TransportFormContainer>
            </Card>
        );
    }
}

function mapStateToProps({loading}, ownProps) {
    return {
        isSaving: loading['ADD_ANIMAL'] && loading['animal'].location === ownProps.locationName,
    }
}

export default connect(mapStateToProps)(LocationCard);