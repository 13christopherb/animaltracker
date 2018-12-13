import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {AnimalListItemForm} from "../animal-forms";
import {animalsActions} from "./ducks/index";

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
                <ListGroup.Item key={this.props.animal.name}>
                    {this.state.isMoving ? (
                        <div>
                            <AnimalListItemForm
                                onSubmit={this.handleSubmit}
                                handleSubmit={this.props.handleSubmit}
                                toggleMoving={this.toggleMoving}
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
                </ListGroup.Item>
            </div>
        )
    }
}

export default reduxForm({})(connect()(AnimalListItem));