import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'underscore'
import * as Actions from '../actions/AnimalActions';
import Location from './Location';
import UserLogin from './UserLogin'


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
                {this.props.loggedIn ? (
                    <p>Log out</p>) :
                <UserLogin/>}
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

export default connect(
    mapStateToProps,
)(Locations);
