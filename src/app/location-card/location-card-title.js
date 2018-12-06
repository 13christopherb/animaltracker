import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const LocationCardTitle = ({locationName}) => {
    return (
        <h5 className="card-title">
            {locationName}
            <button className="btn btn-sm btn-outline-success float-right" type="button" id="dropdownTitleButton"
                    data-toggle="dropdown">
                <FontAwesomeIcon icon="plus"/>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownTitleButton">
                <button type="button"
                        className="btn btn-sm dropdown-item"
                        data-toggle="modal"
                        data-target={"#" + locationName + 'animalForm'}
                >
                    <FontAwesomeIcon icon="otter"/> Add animal
                </button>
                <button className="btn btn-sm dropdown-item"
                        data-toggle="modal"
                        data-target={'#' + locationName + 'transportForm'}
                >
                    <FontAwesomeIcon icon="truck-pickup"/> Add Transport
                </button>
            </div>
        </h5>
    )
};