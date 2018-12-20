import React from "react";
import moment from 'moment';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Dropdown from 'react-bootstrap/lib/Dropdown';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const TransportListItem = ({transport}) => {

    return (
        <ListGroupItem key={transport.id}>
            <Dropdown>
                <span>
                    {transport.departs}
                    <FontAwesomeIcon icon="arrow-right" size="sm"/>
                    {transport.arrives}
                    {moment(transport.meetTime).format('MM/DD HHmm')}

                <Dropdown.Toggle size="sm" id={transport.id + '-dropdown'} variant="success" id="dropdown-basic">
                    <FontAwesomeIcon icon="ellipsis-h"/>
                </Dropdown.Toggle>
                </span>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </ListGroupItem>
    )
};