import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {actions} from './ducks/Actions';
import {AnimalForm} from "./AnimalForm";

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
            formErrors: {name: '', weight: '', species: '', location: ''},
            isNameValid: false,
            isWeightValid: false,
            isSpeciesValid: false,
            isLocationValid: false,
            isFormValid: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        //this.props.dispatch(actions.fetchAnimals());
    }

    /**
     * Saves the input values to the state to submit later
     * when button is pressed
     * @param e Input change event
     */
    handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    /**
     * post the input values saved in the state
     * to the server.
     * @param e On click event
     */
    handleSubmit(e) {
        e.preventDefault();
        const animal = {
            timestamp: moment().format(),
            location: this.state.location,
            name: this.state.name,
            species: this.state.species,
            weight: this.state.weight,
            isGettingControlledMeds: this.state.isGettingControlledMeds,
            isGettingTubed: this.state.isGettingTubed
        };
        this.props.dispatch(actions.addAnimal(animal));
    }

    render() {
        return (
            <div>
                <AnimalForm
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleSubmit}
                    location={this.state.location}
                    name={this.state.name}
                    species={this.state.species}
                    weight={this.state.weight}
                    isGettingControlledMeds={this.state.isGettingControlledMeds}
                    isGettingTubed={this.state.isGettingTubed}
                    toggleAddAnimal={this.props.toggleAddAnimal}
                />
            </div>
        );
    }
}

function mapStateToProps({animals}, ownProps) {
    return {
        animals: animals
    }
}

export default connect(
    mapStateToProps,
)(AnimalFormContainer);