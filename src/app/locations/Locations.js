import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'underscore';
import {actions} from '../animals/ducks/Actions';
import Location from './Location';
import AnimalFormContainer from "../animals/AnimalFormContainer";


class Locations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            addingAnimal: false
        };

        this.toggleAddAnimal = this.toggleAddAnimal.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(actions.getAnimals());
    }

    toggleAddAnimal(e) {
        this.setState({addingAnimal: !this.state.addingAnimal})
    }

    render() {
        let locations = [];
        let animalsByLocation = _.groupBy(this.props.animals, (animal) => {
            return animal['location']
        });
        for (let property in animalsByLocation) {
            if (animalsByLocation.hasOwnProperty(property)) {
                locations.push(<Location key={property} location={property} animals={animalsByLocation[property]}/>)
            }
        }
        return (
            <div>
                {this.state.addingAnimal ? (
                    <AnimalFormContainer toggleAddAnimal={this.toggleAddAnimal}/>) : (
                    <button onClick={this.toggleAddAnimal} className="btn btn-success">Add animal</button>
                )}
                {locations}
            </div>
        );
    }
}

function mapStateToProps({authentication, animals}, ownProps) {
    return {
        animals: animals.animals,
        loggedIn: authentication.loggedIn
    }
}

export default connect(mapStateToProps)(Locations);
