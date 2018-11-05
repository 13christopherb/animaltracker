import React, {Component} from "react";
import moment from 'moment';


export const TransportRow = (props) => {

    const deleteTransport = (e) => {
        e.preventDefault();
        props.deleteTransport(props.transport)
    };

    return (
        <tr key={props.transport.id}>
            <td style={{width: '16.66%'}}>
                {props.transport.departs}
            </td>
            <td style={{width: '16.66%'}}>
                {props.transport.arrives}
            </td>
            <td style={{width: '16.66%'}}>
                {moment(props.transport.meetTime).format('dddd MM/DD hhmm')}
            </td>
            <td style={{width: '16.66%'}}>
                <button onClick={deleteTransport} id="delete" className="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
};