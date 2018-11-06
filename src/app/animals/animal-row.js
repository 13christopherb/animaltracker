import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Select} from "../form-fields";
import {Field} from "redux-form";

export const AnimalRow = (props) => {

    const deleteAnimal = () => {
        props.deleteAnimal(props.animal);
    };

    const updateAnimal = (e) => {
        props.handleChange({
            ...props.animal,
            location: e.target.value
        })
    }

    return (
        <tr key={props.animal.id}>
            <td style={{width: '16.66%'}}>
                {props.animal.species}
            </td>
            <td style={{width: '40%'}}>
                {props.animal.name}
                <p style={{fontSize: 11}}>{props.timeAgo}</p>
            </td>
            <td style={{width: '16.66%'}}>
                {props.animal.weight} kg
            </td>
            <td style={{width: '1%'}}>
                {props.animal.isGettingTubed ? (
                        <FontAwesomeIcon color="green" icon="blender" />):
                    <FontAwesomeIcon opacity="0" color="grey" icon="blender" />}
            </td>
            <td style={{width: '1%'}}>
                {props.animal.isGettingControlledMeds ? (
                        <FontAwesomeIcon color="green" icon="prescription-bottle-alt" />) :
                    <FontAwesomeIcon opacity="0" color="grey" icon="prescription-bottle-alt" />}
            </td>
            <td style={{width: '15%'}}>
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