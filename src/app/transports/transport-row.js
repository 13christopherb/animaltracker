import React from "react";
import moment from 'moment';
import Button from 'react-bootstrap/lib/Button';



export const TransportRow = ({deleteTransport, transport, ...other}) => {

    const handleDelete = (e) => {
        e.preventDefault();
        deleteTransport(transport)
    };

    return (
        <tr key={transport.id}>
            <td style={{width: '16.66%'}}>
                {transport.departs}
            </td>
            <td style={{width: '16.66%'}}>
                {transport.arrives}
            </td>
            <td style={{width: '16.66%'}}>
                {transport.meetPlace}
            </td>
            <td style={{width: '16.66%'}}>
                {moment(transport.meetTime).format('dddd MM/DD HHmm')}
            </td>
            <td style={{width: '16.66%'}}>
                <Button onClick={handleDelete} id="delete" variant="danger">Delete</Button>
            </td>
        </tr>
    )
};