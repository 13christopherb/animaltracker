import React from "react";
import moment from 'moment';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const TransportListItem = ({transport}) => {

    return (
        <ListGroupItem key={transport.id}>
            {transport.departs} &nbsp;
            <FontAwesomeIcon icon="arrow-right"/> &nbsp;
            {transport.arrives} &nbsp;
            {moment(transport.meetTime).format('MM/DD HHmm')}
        </ListGroupItem>
    )
};