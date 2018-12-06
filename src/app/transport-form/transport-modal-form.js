import React from 'react';
import {Field} from 'redux-form'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Input, Select} from "../form-fields/index";
import moment from "moment";

/**
 * Form for creating a new animal in the form of a modal
 * @param handleSubmit
 * @param handleChange
 * @param onSubmit
 * @param props
 * @returns {*}
 * @constructor
 */
export const TransportModalForm = ({handleSubmit, handleChange, onSubmit, id, hideModal, ...props}) => {
    return (
        <div className="modal fade" id={id} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <header className="modal-header">
                        <button type="button" className="close" onClick={() => hideModal(id)}>
                            <FontAwesomeIcon icon="times" size="xs"/>
                        </button>
                    </header>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="modal-body">
                            <div className="form-row">
                                <div className="col col-6">
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
                                <div className="col col-6">
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
                            </div>
                            <div className="form-row">
                                <div className="col col-12">
                                    <Field
                                        component={Input}
                                        name="meetPlace"
                                        id="meetPlace"
                                        title="Meet Place"
                                        type="text"
                                        value={props.value}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col col-6">
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
                                <div className="col col-6">
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
                            </div>
                        </div>
                        <footer className="modal-footer">
                            <button className="btn btn-primary" onClick={() => hideModal(id)}
                                    disabled={props.pristine || !props.valid}
                                    type="submit">
                                Submit
                            </button>
                            <button className="btn btn-danger" onClick={() => hideModal(id)}
                                    type="button">
                                Cancel
                            </button>
                        </footer>
                    </form>
                </div>
            </div>
        </div>
    );
};