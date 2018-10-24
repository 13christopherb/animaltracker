import React, {Component} from 'react';
import {connect} from 'react-redux';
import {transportActions} from "../actions/TransportActions";
import {NewTransport} from "./NewTransport";
import {TransportRow} from "./TransportRow";


class Transports extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.deleteTransport = this.deleteTransport.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(transportActions.getTransports())
    }

    deleteTransport(transport) {
        this.props.dispatch(transportActions.deleteTransport(transport.props.transport));
    }

    render() {
        let transports = [];
        for (let transport of this.props.transports) {
            transports.push(<TransportRow key={transport.id} transport={transport}
                                          deleteTransport={this.deleteTransport}
                                          />);
        }
        return (
            <div>
                <NewTransport/>
                <table className="table table-striped">
                    <tbody>
                    {transports}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps({transports}, ownProps) {
    return {
        transports: transports.transports
    }
}

const connectedTransports = connect(mapStateToProps)(Transports);

export {connectedTransports as Transports}
