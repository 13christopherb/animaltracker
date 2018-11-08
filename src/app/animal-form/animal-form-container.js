import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {actions} from './ducks/actions';
import {AnimalForm} from "./animal-form";
import {reduxForm} from 'redux-form'
import {validate} from './validators';


/**
 * Container component for a form to create a new animal
 */
class AnimalFormContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        const animal = {
            timestamp: moment().utc().format(),
            location: values.location,
            name: values.name,
            species: values.species,
            weight: values.weight,
            isGettingControlledMeds: values.isGettingControlledMeds,
            isGettingTubed: values.isGettingTubed
        };
        this.props.dispatch(actions.addAnimal(animal));
    }


    render() {
        return (
                React.cloneElement(this.props.children, {onSubmit: this.handleSubmit, ...this.props})
        );
    }
}

function mapStateToProps({animalForm}, ownProps) {
    return {
        fields: animalForm.fields
    }
}

const connected = reduxForm({
    form: 'AnimalForm',
    validate,
})(connect(mapStateToProps)(AnimalFormContainer));

export {connected as AnimalFormContainer}