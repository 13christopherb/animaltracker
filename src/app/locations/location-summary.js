import React, {Component} from 'react';
import _ from 'underscore';
import $ from 'jquery';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import AnimalListItem from "./animal-list-item";
import {AnimalFormContainer} from "../animal-form/animal-form-container";
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
                    {this.props.animals.length >= 5 && !this.state.isEditing ? (
                            <p className="card-text">{speciesCount}</p>) :

                        (
                            <ul className="list-group list-group-flush">
                                {this.props.animals.map((animal) =>
                                    <AnimalListItem key={animal.id} animal={animal} onDelete={this.handleDelete}/>
                                )}
                            </ul>
                        )}
                </div>
                <AnimalFormContainer toggleAddAnimal={LocationSummary.toggleAddAnimal}>
                    <AnimalModalForm />
                </AnimalFormContainer>
            </div>
        );
    }
}
