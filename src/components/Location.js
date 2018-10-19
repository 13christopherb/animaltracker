import React, {Component} from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'underscore';
import Animals from './Animals';


class Location extends Component {

    constructor(props) {
        super(props);
        this.state = {expanded: true}
    }

    render() {
        let animalsBySpecies = _.countBy(this.props.animals, (animal) => {
            return animal['species']
        });
        let speciesCount  = [];

        for (var property in animalsBySpecies) {
            if (animalsBySpecies.hasOwnProperty(property)) {
                speciesCount.push(property + '(' + animalsBySpecies[property] + ') ')
            }
        }

        return (
            <div>
                <a onTransitionEnd={this.onCollapseClick} className="btn btn-info btn-block" data-toggle="collapse"
                   href={'#'+this.props.location} role="button"
                   aria-expanded="false">
                    <div className='row'>
                    <div className='col-md-1 offset-md-5'>{this.props.location}</div>
                    <div className='col-md-1 '><small>{speciesCount}</small></div>
                    </div>
                </a>
                <div className="collapse show" aria-expanded="true" id={this.props.location}>
                    <Animals animals={this.props.animals}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps({animals}, ownProps) {
    return {
        animals: ownProps.animals
    }
}

export default connect(
    mapStateToProps,
)(Location);