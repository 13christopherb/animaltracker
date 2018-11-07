import React from 'react';
import {Field} from 'redux-form'
import {Input, Select} from "../form-fields/index";

/**
 * Form for creating a new animal
 * @param handleSubmit
 * @param handleChange
 * @param onSubmit
 * @param props
 * @returns {*}
 * @constructor
 */
const AnimalForm = ({handleSubmit, handleChange, onSubmit, ...props}) => {
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="col col-md-2">
                            <Field
                                component={Select}
                                id="location"
                                title="Location"
                                name="location"
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
                                id="species"
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
                                onChange={handleChange}
                                value={props.value}
                            />

                        </div>
                        <div className="col col-md-3">
                            <Field
                                component={Input}
                                id="weight"
                                name="weight"
                                title="Weight"
                                type="text"
                                onChange={handleChange}
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
                                    onChange={handleChange}
                                    value={props.value}
                                />
                            </label>
                            <label>
                                Tube feeding:
                                <Field
                                    component="input"
                                    name="isGettingTubed"
                                    type="checkbox"
                                    onChange={handleChange}
                                    value={props.value}
                                />
                            </label>
                            <button className="btn btn-primary" disabled={props.pristine || !props.valid} type="submit">
                                Submit
                            </button>
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

export default AnimalForm;