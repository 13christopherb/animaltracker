import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const AnimalRow = (props) => {

    const deleteAnimal = () => {
        props.deleteAnimal(props.animal);
    };

    const updateAnimal = (e) => {
        props.handleChange({
            ...props.animal,
            location: e.target.value
        })
    };
    return (
        <tr key={props.animal.id}>
            <td>
                {props.animal.species}
            </td>
            <td>
                {props.animal.name}
                <p style={{fontSize: 11}}>{props.timeAgo}</p>
            </td>
            <td>
                {props.animal.weight} kg
            </td>
            <td style={{width: '5%'}}>
                <FontAwesomeIcon color="green" icon="blender"
                                 className={!props.animal.isGettingTubed ? 'invisible' : 'visible'}
                />
            </td>
            <td style={{width: '5%'}}>
                <FontAwesomeIcon color="green" icon="prescription-bottle-alt"
                                 className={!props.animal.isGettingControlledMeds ? 'invisible' : ''}
                />
            </td>
            <td  style={{width: '118px'}}>
                <div className="form-group">
                    <select
                        className={'custom-select'}
                        id="location"
                        title="Location"
                        name="location"
                        value={props.animal.location}
                        onChange={updateAnimal}
                    >
                        <option value="NRO">NRO</option>
                        <option value="MBO">MBO</option>
                        <option value="SLO">SLO</option>
                    </select>
                </div>
            </td>
            <td style={{width: '16.66%'}}>
                <button onClick={deleteAnimal} id="delete" className="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
};