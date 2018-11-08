import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {actions} from './ducks/actions';
import AnimalForm from "./animal-form";
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
            <div>
                <AnimalForm
                    onSubmit={this.handleSubmit}
                    handleSubmit={this.props.handleSubmit}
                    {...this.props}
                />
            </div>
        );
    }
}

function mapStateToProps({animalForm}, ownProps) {
    return {
        fields: animalForm.fields
    }
}

export default reduxForm({
    form: 'AnimalForm',
    validate,
})(connect(mapStateToProps)(AnimalFormContainer));