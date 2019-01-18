import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/lib/Button';
import moment from "moment";


export const AnimalRow = ({animal, handleChange, deleteAnimal}) => {
    return (
        <tr key={animal.id}>
            <td>
                {animal.species}
            </td>
            <td>
                {animal.name}
                <p style={{fontSize: 11}}>{moment(animal.timestamp).fromNow()}</p>
            </td>
            <td>
                {animal.weight} kg
            </td>
            <td style={{width: '5%'}}>
                <FontAwesomeIcon color="green" icon="blender"
                                 className={!animal.isGettingTubed ? 'invisible' : 'visible'}
                />
            </td>
            <td style={{width: '5%'}}>
                <FontAwesomeIcon color="green" icon="prescription-bottle-alt"
                                 className={!animal.isGettingControlledMeds ? 'invisible' : ''}
                />
            </td>
            <td  style={{width: '118px'}}>
                <div className="form-group">
                    <select
                        className={'custom-select'}
                        id="location"
                        title="Location"
                        name="location"
                        value={animal.location}
                        onChange={(e) => handleChange({
                            ...animal,
                            location: e.target.value
                        })}
                    >
                        <option value="NRO">NRO</option>
                        <option value="MBO">MBO</option>
                        <option value="SLO">SLO</option>
                    </select>
                </div>
            </td>
            <td style={{width: '16.66%'}}>
                <Button onClick={(e) => deleteAnimal(animal)} id="delete" variant="danger">Delete</Button>
            </td>
        </tr>
    )
};