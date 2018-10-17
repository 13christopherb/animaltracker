import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class AnimalRow extends React.Component {

    deleteAnimal = (e) => {
        e.preventDefault();
        this.props.deleteAnimal(this);
    }

    render() {
        return (
            <tr key={this.props.animal.id}>
                <td>
                    {this.props.animal.species}
                </td>
                <td>
                    {this.props.animal.name}
                </td>
                <td>
                    {this.props.animal.weight}
                </td>
                <td>
                    {this.props.animal.isGettingTubed ? (<FontAwesomeIcon icon="blender" />): <p></p>}
                </td>
                <td>
                    {this.props.animal.isGettingControlledMeds ? (<FontAwesomeIcon icon="prescription-bottle-alt" />) :
                        <p></p>}
                </td>
                <td>
                    <button onClick={this.deleteAnimal} id='delete' className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}

export default AnimalRow;