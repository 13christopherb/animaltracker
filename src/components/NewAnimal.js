import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuidv4 from 'uuid';
import * as Actions from '../actions/AnimalActions';
import AnimalTitle from './AnimalRow';

class NewAnimal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isGettingTubed: false,
            isGettingControlledMeds: false,
            name: ''
        };
    }

    componentDidMount() {
        //this.props.dispatch(actions.fetchAnimals());
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
        console.log(name)
    }

    /**
     * post the input values saved in the state
     * to the server.
     * @param e On click event
     */
    handleSubmit = (e) => {
        e.preventDefault();
        const animal = {
            timestamp: Date.now(),
            location: this.state.location,
            name: this.state.name,
            species: this.state.species,
            weight: this.state.weight,
            isGettingControlledMeds: this.state.isGettingControlledMeds,
            isGettingTubed: this.state.isGettingTubed
        };
        this.props.dispatch(Actions.addAnimal(animal));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="col col-md-3">
                            <label>
                                Location
                                <select name="location" className="custom-select" onChange={this.handleInputChange}>
                                    <option value=""></option>
                                    <option value="NRO">NRO</option>
                                    <option value="MBO">MBO</option>
                                    <option value="SLO">SLO</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col col-md-3">
                            <label>
                                Species
                                <select name="species" className="custom-select" onChange={this.handleInputChange}>
                                    <option value=""></option>
                                    <option value="CSL">CSL</option>
                                    <option value="ES">ES</option>
                                    <option value="HS">HS</option>
                                    <option value="NFS">NFS</option>
                                    <option value="GFS">GFS</option>
                                    <option value="Other">Other</option>
                                </select>
                            </label>
                        </div>
                        <div className="col">
                            <label>
                                Name
                                <input
                                    name="name" className="form-control"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    value={this.state.name}
                                />
                            </label>
                        </div>
                    </div>
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
                            onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        Tube feeding:
                        <input
                            name="isGettingTubed"
                            type="checkbox"
                            onChange={this.handleInputChange}/>
                    </label>
                    <button type="submit">Submit</button>
                </form>
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
