import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {transportFormActions} from "./ducks";
import {TransportForm} from "./transport-form";

import {reduxForm} from "redux-form";
import {validate} from './validators';

class TransportFormContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        let meetDateTime = moment(values.meetDate + ' ' + values.meetTime,'dddd MM/DD h:mm' );
        const transport = {
            departs: values.departs,
            arrives: values.arrives,
            meetPlace: values.meetPlace,
            meetTime: meetDateTime.format()
        };
        this.props.dispatch(transportFormActions.addTransport(transport));
    }

    render() {
        return (
            React.cloneElement(this.props.children, {onSubmit: this.handleSubmit, ...this.props})
        );
    }
}

function mapStateToProps({}, ownProps) {
    return {
        defaultTime: ownProps.defaultTime
    }
}

const connected = reduxForm({
    form: 'TransportForm',
    validate
})(connect(mapStateToProps)(TransportFormContainer));

export {connected as TransportFormContainer};