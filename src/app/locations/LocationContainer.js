import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'underscore';
import {Location} from './Location'
import Animals from "../animals/Animals";


class LocationContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let animalsBySpecies = _.countBy(this.props.animals, (animal) => {
            return animal['species']
        });
        let speciesCount  = [];

        for (let property in animalsBySpecies) {
            if (animalsBySpecies.hasOwnProperty(property)) {
                speciesCount.push(property + '(' + animalsBySpecies[property] + ') ')
            }
        }
        return (
            <div>
                <Location locationName={this.props.locationName} animals={this.props.animals}
                          speciesCount={speciesCount}/>
            </div>
        );
    }
}

function mapStateToProps({locations}, ownProps) {
    return {
        animals: locations.locations[ownProps.location].animals,
        locationName: locations.locations[ownProps.location].locationName
    }
}

export default connect(mapStateToProps)(LocationContainer);