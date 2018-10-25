import React, {Component} from "react";


export class TransportRow extends Component {

    constructor(props) {
        super(props);
        this.deleteTransport = this.deleteTransport.bind(this);
    }

    deleteTransport(e) {
        e.preventDefault();
        this.props.deleteTransport(this)
    }

    render() {
        return (
            <tr key={this.props.transport.id}>
                <td style={{width: '16.66%'}}>
                    {this.props.transport.departs}
                </td>
                <td style={{width: '16.66%'}}>
                    {this.props.transport.arrives}
                </td>
                <td style={{width: '16.66%'}}>
                    {this.props.transport.meetTime}
                </td>
                <td style={{width: '16.66%'}}>
                    <button onClick={this.deleteTransport} id="delete" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}