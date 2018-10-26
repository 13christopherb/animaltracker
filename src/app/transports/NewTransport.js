import React, {Component} from 'react';
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {actions} from "./ducks/actions";

import 'react-datepicker/dist/react-datepicker.css';

class NewTransport extends Component {

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
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="col col-md-3">
                            <label>
                                Departs
                                <select name="departs" className="custom-select"
                                        value={this.state.departs} onChange={this.handleInputChange}>
                                    <option value=""></option>
                                    <option value="NRO">NRO</option>
                                    <option value="MBO">MBO</option>
                                    <option value="SLO">SLO</option>
                                </select>
                            </label>
                        </div>
                        <div className="col col-md-3">
                            <label>
                                Arrives
                                <select name="arrives" className="custom-select"
                                        value={this.state.arrives} onChange={this.handleInputChange}>
                                    <option value=""></option>
                                    <option value="NRO">NRO</option>
                                    <option value="MBO">MBO</option>
                                    <option value="SLO">SLO</option>
                                </select>
                            </label>
                        </div>
                        <div className="col col-md-3">
                            <label>
                                Meet Time
                                <DatePicker
                                    name="meetDate"
                                    selected={this.state.meetTime}
                                    onChange={this.handleDateTimeChange}
                                    showTimeSelect
                                    dateFormat="MM/DD/YYYY"
                                    placeholderText="Click to select a date"
                                    timeFormat='HH:mm'
                                    minDate={moment()}
                                    maxDate={moment().add(5, "days")}
                                    minTime={moment().hours(8).minutes(0)}
                                    maxTime={moment().hours(20).minutes(0)}
                                    autoComplete="off"
                                />
                            </label>
                        </div>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps({}, ownProps) {
    return {
        meetTime: ownProps.currentTime
    }
}

const connectedNewTransport = connect(
    mapStateToProps,
)(NewTransport);

export {connectedNewTransport as NewTransport};