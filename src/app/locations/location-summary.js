import React, {Component} from 'react';
import _ from 'underscore';
import $ from 'jquery';
import moment from 'moment';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import AnimalListItem from "./animal-list-item";
import {AnimalFormContainer} from "../animal-form/animal-form-container";
import {TransportCard} from "../transports/transport-card";
import {AnimalModalForm} from "../animal-form/animal-modal-form";

/**
 * Condensed view of information about a location for mobile devices
 */
export default class LocationSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {isEditing: false};
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit(e) {
        e.preventDefault();
        this.setState({isEditing: !this.state.isEditing});
    }

    static toggleAddAnimal(e) {
        $('#animalModalForm').modal('hide');
    }

    render() {
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
            <div className="card">
                <div className="card-body h-100">
                    <h5 className="card-title">
                        {this.props.locationName}
                        <button type="button"
                                className="btn btn-success float-right btn-sm"
                                data-toggle="modal"
                                data-target="#animalModalForm"
                        >
                            <FontAwesomeIcon icon="plus"/> Add animal
                        </button>
                    </h5>
                    {this.props.animals.length >= 5 && !this.state.isEditing && !this.props.expanded ? (
                        <span>
                            <p className="card-text">{speciesCount}</p>
                            <button className="btn btn-primary btn-sm"
                                    onClick={(e) => this.props.expandSummary(this.props.locationName)}>Expand</button>
                        </span>

                    ) : (
                        <ul className="list-group list-group-flush">
                            {this.props.animals.map((animal) =>
                                <AnimalListItem key={animal.id} animal={animal} onDelete={this.handleDelete}/>
                            )}
                        </ul>
                    )}
                </div>
                <footer className="card-footer bg-transparent">
                    {this.props.transports &&
                        <div>
                            <button className="btn btn-primary btn-sm" type="button" data-toggle="collapse"
                                    data-target={'#collapse' + this.props.locationName} aria-expanded="false">
                                <FontAwesomeIcon icon="chevron-down"/> Transports
                            </button>
                            <div className="collapse" id={'collapse' + this.props.locationName}>
                                <TransportCard transports={this.props.transports} />
                            </div>
                        </div>
                    }
                    <button className="btn btn-success btn-sm">
                        <FontAwesomeIcon icon="plus"/> Add Transport
                    </button>
                </footer>
                <AnimalFormContainer toggleAddAnimal={LocationSummary.toggleAddAnimal}>
                    <AnimalModalForm/>
                </AnimalFormContainer>
            </div>
        );
    }
}
