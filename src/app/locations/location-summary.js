import React, {Component} from 'react';
import _ from 'underscore';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import connect from "react-redux/es/connect/connect";
import {AnimalListItem} from "./animal-list-item";
import {animalsActions} from "../animals/ducks";

/**
 * Condensed view of information about a location for mobile devices
 */
class LocationSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {isEditing: false};
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    toggleEdit(e) {
        e.preventDefault();
        this.setState({isEditing: !this.state.isEditing});
    }

    handleDelete(animal) {
        this.props.dispatch(animalsActions.deleteAnimal(animal));
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
                    <h5 className="card-title">{this.props.locationName}
                        {this.state.isEditing ?
                            (
                                <button className="btn btn-sm btn-danger float-right"
                                        onClick={this.toggleEdit}>
                                    <FontAwesomeIcon icon="times"/> Cancel
                                </button>
                            ) : (
                                <button className="btn btn-sm btn-primary float-right"
                                        onClick={this.toggleEdit}>
                                    <FontAwesomeIcon icon="edit"/> Edit
                                </button>
                            )
                        }
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
            </div>
        );
    }
}

export default connect()(LocationSummary);
