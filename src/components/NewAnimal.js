import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuidv4 from 'uuid';
import * as actions from '../actions/actions';
import AnimalTitle from './AnimalTitle';

class NewAnimal extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''}
    }

    componentDidMount() {
        //this.props.dispatch(actions.getAnimals());
    }

    /**
     * Saves the input values to the state to submit later
     * when button is pressed
     * @param e Input change event
     */
    handleInputChange = (e) => {
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
    handleSubmit = (e) => {
        e.preventDefault();
        const animal = {
            id: uuidv4(),
            timestamp: Date.now(),
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
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Species
                            <input
                                name="species"
                                onChange={this.handleInputChange}/>
                        </label>
                        <label>
                            Name
                            <input
                                name="name"
                                onChange={this.handleInputChange}/>
                        </label>
                        <label>
                            Weight
                            <input
                                name="weight"
                                onChange={this.handleInputChange}/>
                        </label>
                        <label>
                            Controlled meds:
                            <input
                                name="isGettingControlledMeds"
                                type="checkbox"
                                onChange={this.handleInputChange} />
                        </label>
                        <label>
                            Tube feeding:
                            <input
                                name="isGettingTubed"
                                type="checkbox"
                                onChange={this.handleInputChange} />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
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
)(NewAnimal)
