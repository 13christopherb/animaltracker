import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {actions} from "./ducks/actions";
import {TransportForm} from "./transport-form";

import {reduxForm} from "redux-form";
import {validate} from './validators';

class TransportFormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            departs: '',
            arrives: '',
            meetTime: this.props.defaultTime
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDateTimeChange = this.handleDateTimeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        //this.props.dispatch(actions.fetchAnimals());
    }


    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleDateTimeChange(dateTime) {
        this.setState({
            meetTime: dateTime
        });
    }

    handleSubmit(values) {
        let meetDateTime = moment(values.meetDate + ' ' + values.meetTime,'dddd MM/DD h:mm' );
        const transport = {
            departs: values.departs,
            arrives: values.arrives,
            meetTime: meetDateTime.format()
        };
        this.props.dispatch(actions.addTransport(transport));
    }

    render() {
        return (
            <div>
                <TransportForm
                    onSubmit={this.handleSubmit}
                    handleSubmit={this.props.handleSubmit}
                    {...this.props}
                />
            </div>
        );
    }
}

function mapStateToProps({}, ownProps) {
    return {
        defaultTime: ownProps.defaultTime
    }
}

export default reduxForm({
    form: 'TransportForm',
    validate
})(connect(mapStateToProps)(TransportFormContainer));