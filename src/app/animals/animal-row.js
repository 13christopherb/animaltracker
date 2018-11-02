import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const AnimalRow = (props) => {

    const deleteAnimal = () => {
        props.deleteAnimal(props.animal);
    };

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
            <td style={{width: '16.66%'}}>
                <button onClick={deleteAnimal} id="delete" className="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
};