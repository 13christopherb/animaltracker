import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import {ButtonDropdownToggle} from "../form-fields/button-dropdown-toggle";
import Dropdown from 'react-bootstrap/lib/Dropdown';
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
                        <AnimalListItemForm
                            onSubmit={this.handleSubmit}
                            handleSubmit={this.props.handleSubmit}
                            toggleMoving={this.toggleMoving}
                            {...this.props}
                        />
                    ) : (
                        <Dropdown>
                            {this.props.animal.species} | {this.props.animal.name} {this.props.animal.weight} kg
                            <Dropdown.Toggle as={ButtonDropdownToggle} variant="light" size="sm">
                                <FontAwesomeIcon icon="ellipsis-h"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={this.toggleMoving}>
                                    <FontAwesomeIcon icon="people-carry"/> Move
                                </Dropdown.Item>
                                <Dropdown.Item onClick={this.handleDelete}>
                                    <FontAwesomeIcon icon="trash-alt"/> Delete
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    )
                    }
                </ListGroup.Item>
            </div>
        )
    }
}

export default reduxForm({})(connect()(AnimalListItem));