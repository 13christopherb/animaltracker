import React from "react";
import {TransportListItem} from "./transport-list-item";


export const TransportCard = ({transports}) => {
    return (
            <ul className="list-group">
                {transports.map(transport => <TransportListItem key={transport.id} transport={transport} />)}
            </ul>
    )
};