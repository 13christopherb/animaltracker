import React, {Component} from 'react';
import _ from 'underscore';
import $ from 'jquery';
import {AnimalList} from '../animals/animal-list';
import {LocationCardTitle} from './location-card-title';
import {LocationCardFooter} from './location-card-footer';
import {AnimalFormContainer, AnimalModalForm} from '../animal-forms';
import {TransportFormContainer, TransportModalForm} from '../transport-form/';


/**
 * Condensed view of information about a location for mobile devices
 */
export default class LocationCard extends Component {
    constructor(props) {
        super(props);
        this.hideModal = this.hideModal.bind(this);
    }

    hideModal(id) {
        $('#' + id).modal('hide');
    }

    render() {
        let animalsBySpecies = _.countBy(this.props.animals, (animal) => {
            return animal['species']
        });
        let speciesCount = [];
        for (let property in animalsBySpecies) {
            if (animalsBySpecies.hasOwnProperty(property)) {
                speciesCount.push(property + '(' + animalsBySpecies[property] + ') ')
            }
        }
        return (
            <div className="card">
                <div className="card-body h-100">
                    <LocationCardTitle locationName={this.props.locationName}/>
                    {this.props.animals.length >= 5 && !this.props.expanded ? (
                        <span>
                            <p className="card-text">{speciesCount}</p>
                            <button className="btn btn-primary btn-sm"
                                    onClick={(e) => this.props.expandSummary(this.props.locationName)}>Expand</button>
                        </span>

                    ) : (
                        <AnimalList animals={this.props.animals}/>
                    )}
                </div>
                <LocationCardFooter locationName={this.props.locationName} transports={this.props.transports}/>
                <AnimalFormContainer location={this.props.locationName}
                >
                    <AnimalModalForm id={this.props.locationName + 'animalForm'} hideModal={this.hideModal} />
                </AnimalFormContainer>
                <TransportFormContainer>
                    <TransportModalForm id={this.props.locationName + 'transportForm'} hideModal={this.hideModal} />
                </TransportFormContainer>
            </div>
        );
    }
}