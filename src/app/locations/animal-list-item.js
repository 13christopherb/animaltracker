import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const AnimalListItem = ({animal, onDelete, isEditing}) => {

    const handleDelete = (e) => {
        e.preventDefault();
        onDelete(animal)
    };

    return (
        <li key={animal.name} className="list-group-item">
                                        <span>
                                            {animal.species} | {animal.name} {animal.weight} kg</span>
            <button className="btn btn-sm btn-danger float-right" onClick={handleDelete}>
                <FontAwesomeIcon icon="trash-alt"/>
            </button>
            {isEditing &&
            <select
                className={'custom-select'}
                id="location"
                title="Location"
                name="location"
                value={animal.location}
            >
                <option value="NRO">NRO</option>
                <option value="MBO">MBO</option>
                <option value="SLO">SLO</option>
            </select>
            }
        </li>
    )
};