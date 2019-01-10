import React, {Component} from 'react';
import {Card, Button, Collapse} from 'react-bootstrap';
import {AnimalList} from '../animals/animal-list';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LocationCardFooter from './location-card-footer';
import {AnimalFormContainer, AnimalModalForm} from '../animal-forms/index';
import {TransportFormContainer, TransportModalForm} from '../transport-form/index';
import Dropdown from "react-bootstrap/lib/Dropdown";
import {connect} from 'react-redux';


/**
 * Condensed view of information about a location for mobile devices
 */
class LocationCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.expanded,
            isShowingAnimalForm: false,
            isShowingTransportForm: false,
        };
        this.toggleAnimalForm = this.toggleAnimalForm.bind(this);
        this.toggleTransportForm = this.toggleTransportForm.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isSavingAnimal === true && this.props.isSavingAnimal === false) { //Close form if finished saving
            this.toggleAnimalForm()
        }
    }

    /**
     * Open the new animal form if it is currently closed, or close it if it is open and no new animal is being saved
     */
    toggleAnimalForm() {
        const {isSavingAnimal} = this.props;
        const {isShowingAnimalForm} = this.state;
        this.setState({isShowingAnimalForm: isSavingAnimal || !isShowingAnimalForm});
    }

    /**
     * Open the new transport form if it is currently closed,
     * or close it if it is open and no new transport is being saved
     */
    toggleTransportForm() {
        const {isSavingTransport} = this.props;
        const {isShowingTransportForm} = this.state;
        this.setState({isShowingTransportForm: isSavingTransport || !isShowingTransportForm});
    }

    render() {
        const {locationName, animals, transports} = this.props;
        const {isShowingAnimalForm, isShowingTransportForm, isOpen} = this.state;
        let speciesCount = {};
        for (let animal of animals) {
            speciesCount[animal.species] = speciesCount[animal.species] ? speciesCount[animal.species] + 1 : 1
        }
        return (
            <Card className="card" key={locationName}>
                <Card.Body>
                    <Card.Title>
                        <Dropdown>
                            <h5 className="card-title">
                                {locationName}
                                <Dropdown.Toggle variant="outline-success" size="sm" className="float-right">
                                    <FontAwesomeIcon icon="plus"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => this.setState({isShowingAnimalForm: true})}>
                                        <FontAwesomeIcon icon="otter"/> Add animal
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.setState({isShowingTransportForm: true})}>
                                        <FontAwesomeIcon icon="truck-pickup"/> Add Transport
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </h5>
                        </Dropdown>
                    </Card.Title>
                    {animals.length > 0 ?
                        <Button variant="primary" size="sm"
                                onClick={(e) => this.setState({isOpen: !isOpen})}>
                        <span>
                            {isOpen ? <FontAwesomeIcon icon="chevron-down"/> : <FontAwesomeIcon icon="chevron-up"/>}
                            {Object.entries(speciesCount).map(([species, number]) =>
                                <span key={species + '-count'}>{species}({number}) </span>
                            )}
                            </span>
                        </Button> : <span>No animals</span>}
                    <Collapse in={isOpen}>
                        <div>
                            <AnimalList animals={animals}/>
                        </div>
                    </Collapse>
                </Card.Body>
                <LocationCardFooter locationName={locationName} transports={transports}/>
                <AnimalFormContainer location={locationName}>
                    <AnimalModalForm id={locationName + 'animalForm'}
                                     show={isShowingAnimalForm}
                                     toggleModal={this.toggleAnimalForm}/>
                </AnimalFormContainer>
                <TransportFormContainer>
                    <TransportModalForm id={locationName + 'transportForm'}
                                        show={isShowingTransportForm}
                                        toggleModal={this.toggleTransportForm}/>
                </TransportFormContainer>
            </Card>
        );
    }
}

function mapStateToProps({loading}, ownProps) {
    return {
        isSavingAnimal: loading['ADD_ANIMAL'] && loading['animal'].location === ownProps.locationName,
    }
}

export default connect(mapStateToProps)(LocationCard);