import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {actions} from './ducks/actions';
import AnimalForm from "./animal-form";


/**
 * Container component for a form to create a new animal
 */
class AnimalFormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isGettingTubed: false,
            isGettingControlledMeds: false,
            name: '',
            weight: '',
            species: '',
            location: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        const animal = {
            timestamp: moment().format(),
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
                    toggleAddAnimal={this.props.toggleAddAnimal}
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

export default connect(
    mapStateToProps,
)(AnimalFormContainer);