import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {Input, Select} from "../form-fields/form-fields";

/**
 * Form for creating a new animal
 * @param props
 * @returns {*}
 * @constructor
 */
export const AnimalForm = (props) => {
    return (
        <div>
            <div>
                <form onSubmit={props.handleSubmit}>
                    <div className="form-row">
                        <div className="col col-md-2">
                            <Field
                                    component={Select}
                                    title="Location"
                                    name="location"
                                    value={props.value}
                                    onChange={props.handleChange}
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
                                title="Species"
                                    name="species"
                                    value={props.value}
                                    onChange={props.handleChange}
                                    options={[
                                        'CSL',
                                        'ES',
                                        'HS',
                                        'NFS',
                                        'GFS',
                                        'SSO',
                                        'CET'
                                    ]}
                            />
                        </div>
                        <div className="col col-md-3">
                            <Field
                                component={Input}
                                id="name"
                                name="name"
                                title="Name"
                                type="text"
                                onChange={props.handleChange}
                                value={props.value}
                            />

                        </div>
                        <div className="col col-md-3">
                            <Field
                                component={Input}
                                id="weight"
                                name="weight"
                                title={'Weight'}
                                type="text"
                                onChange={props.handleChange}
                                value={props.value}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col col-md-6">
                        <label>
                            Controlled meds:
                            <Field
                                component="input"
                                name="isGettingControlledMeds"
                                type="checkbox"
                                onChange={props.handleChange}
                                value={props.value}
                            />
                        </label>
                        <label>
                            Tube feeding:
                            <Field
                                component="input"
                                name="isGettingTubed"
                                type="checkbox"
                                onChange={props.handleChange}
                                value={props.value}
                            />
                        </label>
                        <button className="btn btn-primary" type="submit">Submit</button>
                        <button onClick={props.toggleAddAnimal} className="btn btn-danger" type="button">
                            Cancel
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default reduxForm({ form: 'AnimalForm' })(AnimalForm)