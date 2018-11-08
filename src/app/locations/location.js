import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'underscore';
import AnimalsTable from "../animals/animals-table";


class Location extends Component {

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
                <a className="btn btn-info btn-block" data-toggle="collapse"
                   href={'#'+ this.props.locationName} role="button"
                   aria-expanded="false">
                    <div className='row'>
                        <div className='col-md-1 offset-md-5'>{this.props.locationName}</div>
                        <div className='col-md-1 '><small>{speciesCount}</small></div>
                    </div>
                </a>
                <div className="collapse show" aria-expanded="true" id={this.props.locationName}>
                    <AnimalsTable animals={this.props.animals}/>
                </div>
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

export default connect(mapStateToProps)(Location);