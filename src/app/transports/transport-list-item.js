import React from "react";
import moment from 'moment';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const TransportListItem = ({transport}) => {

    return (
        <li className="list-group-item" key={transport.id}>
            {transport.departs} &nbsp;
            <FontAwesomeIcon icon="arrow-right"/> &nbsp;
            {transport.arrives} &nbsp;
            {moment(transport.meetTime).format('MM/DD HHmm')}
        </li>
    )
};