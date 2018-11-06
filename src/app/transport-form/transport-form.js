import React from 'react';
import moment from 'moment';
import {Select, Input} from "../form-fields/index";
import {Field} from 'redux-form'

export const TransportForm = ({handleSubmit, handleChange, onSubmit, ...props}) => {
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                    <div className="col col-md-2">
                        <Field
                            component={Select}
                            title="Departs"
                            id="departs"
                            name="departs"
                            value={props.value}
                            onChange={handleChange}
                            options={[
                                'NRO',
                                'MBO',
                                'SLO'
                            ]}
                        />
                    </div>
                    <div className="col col-md-2">
                        <Field
                            component={Select}
                            title="Arrives"
                            name="arrives"
                            id="arrives"
                            value={props.value}
                            onChange={handleChange}
                            options={[
                                'NRO',
                                'MBO',
                                'SLO'
                            ]}
                        />
                    </div>
                    <div className="col col-md-2">
                        <Field
                            component={Select}
                            name="meetDate"
                            id="meetDate"
                            title="Meet Date"
                            value={props.value}
                            onChange={handleChange}
                            options={[
                                moment().format('dddd MM/DD'),
                                moment().add(1, 'days').format('dddd MM/DD'),
                                moment().add(2, 'days').format('dddd MM/DD'),
                                moment().add(3, 'days').format('dddd MM/DD'),
                            ]}
                        />
                    </div>
                    <div className="col col-md-2">
                        <Field
                            component={Input}
                            name="meetTime"
                            id="meetTime"
                            title="Meet Time"
                            type="text"
                            value={props.value}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col pt-4 col-md-3">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
};