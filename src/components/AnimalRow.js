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
                <td style={{width: '16.66%'}}>
                    {this.props.animal.species}
                </td>
                <td style={{width: '40%'}}>
                    {this.props.animal.name}
                </td>
                <td style={{width: '16.66%'}}>
                    {this.props.animal.weight}
                </td>
                <td style={{width: '1%'}}>
                    {this.props.animal.isGettingTubed ? (
                        <FontAwesomeIcon color="green" icon="blender" />):
                        <FontAwesomeIcon opacity="0" color="grey" icon="blender" />}
                </td>
                <td style={{width: '1%'}}>
                    {this.props.animal.isGettingControlledMeds ? (
                        <FontAwesomeIcon color="green" icon="prescription-bottle-alt" />) :
                        <FontAwesomeIcon opacity="0" color="grey" icon="prescription-bottle-alt" />}
                </td>
                <td style={{width: '16.66%'}}>
                    <button onClick={this.deleteAnimal} id="delete" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}

export {AnimalRow as AnimalRow};