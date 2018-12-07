import React from 'react';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const LocationCardTitle = ({locationName}) => {
    return (
        <Dropdown>
            <h5 className="card-title">
                {locationName}
                <Dropdown.Toggle variant="outline-success" size="sm" className="float-right">
                    <FontAwesomeIcon icon="plus"/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <FontAwesomeIcon icon="otter"/> Add animal
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <FontAwesomeIcon icon="truck-pickup"/> Add Transport
                    </Dropdown.Item>
                </Dropdown.Menu>
            </h5>
        </Dropdown>
    )
};