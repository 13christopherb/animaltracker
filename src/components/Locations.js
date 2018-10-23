import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'underscore';
import {animalActions} from '../actions/AnimalActions';
import {Location} from './Location';
import {NewAnimal} from "./NewAnimal";


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
        this.props.dispatch(animalActions.getAnimals());
    }

    toggleAddAnimal(e) {
        this.setState({addingAnimal: !this.state.addingAnimal})
    }

    render() {
        let locations = []
        let animalsByLocation = _.groupBy(this.props.animals, (animal) => {
            return animal['location']
        });
        for (var property in animalsByLocation) {
            if (animalsByLocation.hasOwnProperty(property)) {
                locations.push(<Location key={property} location={property} animals={animalsByLocation[property]}/>)
            }
        }
        return (
            <div>
                {this.state.addingAnimal ? (
                    <NewAnimal toggleAddAnimal={this.toggleAddAnimal}/>) : (
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

const connectedLocations = connect(mapStateToProps)(Locations);

export {connectedLocations as Locations}
