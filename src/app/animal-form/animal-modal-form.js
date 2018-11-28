import React from 'react';
import {Field} from 'redux-form'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Input, Select} from "../form-fields/index";

/**
 * Form for creating a new animal in the form of a modal
 * @param handleSubmit
 * @param handleChange
 * @param onSubmit
 * @param props
 * @returns {*}
 * @constructor
 */
export const AnimalModalForm = ({handleSubmit, handleChange, onSubmit, ...props}) => {
    return (
        <div className="modal fade" id="animalModalForm" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <header className="modal-header">
                            <button type="button" className="close" onClick={props.toggleAddAnimal}>
                                <FontAwesomeIcon icon="times" size="xs"/>
                            </button>
                        </header>
                        <div className="modal-body">
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
                                </div>
                            </div>
                        </div>
                        <footer className="modal-footer">
                            <button className="btn btn-primary" onClick={props.toggleAddAnimal}
                                    disabled={props.pristine || !props.valid}
                                    type="submit">
                                Submit
                            </button>
                            <button className="btn btn-danger" onClick={props.toggleAddAnimal}
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