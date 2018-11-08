import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {AnimalListItemForm} from "./animal-list-item-form";
import {animalsActions} from "../animals/ducks";

/**
 * Component for displaying information about an animal inside a list
 * @requires react
 * @requires react redux
 * @requires font awesome
 */
class AnimalListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMoving: false
        };
        this.toggleMoving = this.toggleMoving.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleMoving(e) {
        e.preventDefault();
        this.setState({isMoving: !this.state.isMoving})
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.dispatch(animalsActions.deleteAnimal(this.props.animal));
    }

    handleSubmit(values) {
        let animal = {
            ...this.props.animal,
            location: values.location,
        };
        this.props.dispatch(animalsActions.updateAnimal(animal));
    }

    render() {
        return (
            <div>
                <li key={this.props.animal.name} className="list-group-item">
                    {this.state.isMoving ? (
                        <div>
                            <AnimalListItemForm
                                onSubmit={this.handleSubmit}
                                handleSubmit={this.props.handleSubmit}
                                {...this.props}
                            />
                        </div>
                    ) : (
                        <div>
                            <span>
                                {this.props.animal.species} | {this.props.animal.name} {this.props.animal.weight} kg
                             </span>
                            <button className="btn btn-sm btn-light float-right" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown">
                                <FontAwesomeIcon icon="ellipsis-h"/>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <button className="dropdown-item" onClick={this.toggleMoving}>
                                    <FontAwesomeIcon icon="people-carry"/> Move
                                </button>
                                <button className="dropdown-item" onClick={this.handleDelete}>
                                    <FontAwesomeIcon icon="trash-alt"/> Delete
                                </button>
                            </div>
                        </div>
                    )
                    }
                </li>
            </div>
        )
    }
}

export default reduxForm({
    form: 'AnimalListItemForm'
})(connect()(AnimalListItem));