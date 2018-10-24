import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {transportActions} from "../actions/TransportActions";
import {NewTransport} from "./NewTransport";
import {TransportRow} from "./TransportRow";


class Transports extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }

    componentDidMount() {
        this.props.dispatch(transportActions.getTransports())
    }

    render() {
        let transports = [];
        for (let transport of this.props.transports) {
            transports.push(<TransportRow key={transport.id} transport={transport}/>);
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
