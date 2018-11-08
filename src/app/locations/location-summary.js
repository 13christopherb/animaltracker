import React, {Component} from 'react';
import _ from 'underscore';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import AnimalListItem from "./animal-list-item";

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
                    <h5 className="card-title">{this.props.locationName}</h5>
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
