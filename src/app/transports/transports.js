import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from "./ducks/actions";
import moment from 'moment';
import Table from 'react-bootstrap/lib/Table';

import {TransportFormContainer} from '../transport-form/';
import {TransportForm} from "../transport-form/transport-form";
import {TransportRow} from "./transport-row";


class Transports extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.deleteTransport = this.deleteTransport.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(actions.getTransports())
    }

    deleteTransport(transport) {
        this.props.dispatch(actions.deleteTransport(transport));
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
                <TransportFormContainer defaultTime={moment().hour(12)}>
                    <TransportForm/>
                </TransportFormContainer>
                <Table striped>
                    <tbody>
                        {transports}
                    </tbody>
                </Table>
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
