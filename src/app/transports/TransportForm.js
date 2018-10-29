import React from 'react';
import moment from 'moment';
import {Select} from "../form_fields/Select";
import DatePicker from "react-datepicker";

export const TransportForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className="form-row">
                    <div className="col col-md-2">
                        <Select title={'Departs'}
                                name={'departs'}
                                value={props.departs}
                                handleChange={props.handleInputChange}
                                options={[
                                    'NRO',
                                    'MBO',
                                    'SLO'
                                ]}
                        />
                    </div>
                    <div className="col col-md-2">
                        <Select title={'Arrives'}
                                name={'arrives'}
                                value={props.arrives}
                                handleChange={props.handleInputChange}
                                options={[
                                    'NRO',
                                    'MBO',
                                    'SLO'
                                ]}
                        />
                    </div>
                    <div className="col col-md-3">
                        <label>
                            Meet Time
                            <DatePicker
                                name="meetDate"
                                selected={props.meetTime}
                                onChange={props.handleDateTimeChange}
                                showTimeSelect
                                dateFormat="MM/DD/YYYY"
                                placeholderText="Click to select a date"
                                timeFormat="HH:mm"
                                minDate={props.defaultTime}
                                maxDate={moment(props.defaultTime).add(5, "days")}
                                minTime={moment(props.defaultTime).hours(8).minutes(0)}
                                maxTime={moment(props.defaultTime).hours(20).minutes(0)}
                                autoComplete="off"
                                dropdownMode="select"
                            />
                        </label>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
};