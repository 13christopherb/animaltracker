import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from './ducks/actions';
import {Input, Select, CheckBox} from '../forms/FormFields';

class NewAnimal extends Component {

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
            timestamp: Date.now(),
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
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="col col-md-2">
                            <Select title={'Location'}
                                    name={'location'}
                                    value={this.state.location}
                                    handleChange={this.handleInputChange}
                                    options={[
                                        'NRO',
                                        'MBO',
                                        'SLO'
                                    ]}
                            />

                        </div>
                        <div className="col col-md-2">
                            <Select title={'Species'}
                                    name={'species'}
                                    value={this.state.species}
                                    handleChange={this.handleInputChange}
                                    options={[
                                        'CSL',
                                        'ES',
                                        'HS',
                                        'NFS',
                                        'GFS',
                                        'SSO',
                                        'CET'
                                    ]}
                            />
                        </div>
                        <div className="col col-md-3">
                                <Input id={'name'}
                                       name={'name'}
                                       title={'Name'}
                                       type={'text'}
                                       value={this.state.name}
                                       handleChange={this.handleInputChange}/>

                        </div>
                        <div className="col col-md-3">
                            <Input id={'weight'}
                                   name={'weight'}
                                   title={'Weight'}
                                   type={'text'}
                                   value={this.state.weight}
                                   handleChange={this.handleInputChange}/>

                        </div>
                    </div>

                    <div className="form-row">
                        <label>
                            Controlled meds:
                            <input
                                name="isGettingControlledMeds"
                                type="checkbox"
                                onChange={this.handleInputChange}
                                value={this.state.isGettingControlledMeds}
                            />
                        </label>
                        <label>
                            Tube feeding:
                            <input
                                name="isGettingTubed"
                                type="checkbox"
                                onChange={this.handleInputChange}
                                value={this.state.isGettingTubed}
                            />
                        </label>
                        <button className="btn btn-primary" type="submit">Submit</button>
                        <button onClick={this.props.toggleAddAnimal} className="btn btn-danger" type="button">
                            Cancel
                        </button>
                    </div>
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

const connectedNewAnimal = connect(
    mapStateToProps,
)(NewAnimal);

export {connectedNewAnimal as NewAnimal};