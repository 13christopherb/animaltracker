import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'underscore'
import * as Actions from '../actions/AnimalActions';
import Location from './Location';


class Locations extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''}
    }

    componentDidMount() {
        this.props.dispatch(Actions.fetchAnimals());
    }

    render() {
        let locations = []
        let animalsByLocation = _.groupBy(this.props.animals, (animal) => {
            return animal['location']
        });
        for (var property in animalsByLocation) {
            if (animalsByLocation.hasOwnProperty(property)) {
                locations.push(<Location key={property} location={property} animals={animalsByLocation[property]} />)
            }
        }
        return (
            <div>
                {locations}
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
)(Locations);
