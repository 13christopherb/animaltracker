import React from "react";
import ListGroup from 'react-bootstrap/lib/ListGroup';

import {TransportListItem} from "./transport-list-item";


export const TransportCard = ({transports}) => {
    return (
            <ListGroup>
                {transports.map(transport => <TransportListItem key={transport.id} transport={transport} />)}
            </ListGroup>
    )
};