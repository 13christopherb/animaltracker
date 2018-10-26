import React, {Component} from 'react';
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {actions} from "./ducks/Actions";
import {TransportForm} from "./TransportForm";

import 'react-datepicker/dist/react-datepicker.css';
import {Select} from "../form_fields/Select";

class TransportFormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            departs: '',
            arrives: '',
            meetTime: this.props.currentTime
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

    handleSubmit(e) {
        e.preventDefault();
        const transport = {
            departs: this.state.departs,
            arrives: this.state.arrives,
            meetTime: this.state.meetTime.format()
        };
        this.props.dispatch(actions.addTransport(transport));
    }

    render() {
        return (
            <div>
               <TransportForm
                   handleSubmit={this.handleSubmit}
                   handleInputChange={this.handleInputChange}
                   handleDateTimeChange={this.handleDateTimeChange}
                   arrives={this.state.arrives}
                   departs={this.state.departs}
                   meetTime={this.state.meetTime}
                   currentTime={this.props.currentTime}

               />
            </div>
        );
    }
}

function mapStateToProps({}, ownProps) {
    return {
        meetTime: ownProps.currentTime
    }
}

export default connect(
    mapStateToProps,
)(TransportFormContainer);