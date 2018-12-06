import React from 'react';
import {Field} from 'redux-form'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Input, Select} from "../form-fields/index";

/**
 * Form for creating a new animal in the form of a modal
 * @param handleSubmit
 * @param handleChange
 * @param onSubmit
 * @param id
 * @param props
 * @returns {*}
 * @constructor
 */
export const AnimalModalForm = ({handleSubmit, handleChange, onSubmit, id, hideModal, ...props}) => {
    return (
        <div className="modal fade" id={id} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <header className="modal-header">
                            <button type="button" className="close" onClick={() => hideModal(id)}>
                                <FontAwesomeIcon icon="times" size="xs"/>
                            </button>
                        </header>
                        <div className="modal-body">
                            <div className="form-row">
                                <div className="col col-4">
                                    {props.location ?
                                        <div className="form-group">
                                            <label>Location</label>
                                            <select defaultValue={props.location} className="form-control" disabled>
                                                <option>{props.location}</option>
                                            </select>
                                        </div> :
                                        <Field
                                            component={Select}
                                            id="location"
                                            title="Location"
                                            name="location"
                                            onChange={handleChange}
                                            options={[
                                                'NRO',
                                                'MBO',
                                                'SLO'
                                            ]}
                                        />
                                    }
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col col-4">
                                    <Field
                                        component={Select}
                                        id="species"
                                        title="Species"
                                        name="species"
                                        onChange={handleChange}
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
                                <div className="col col-8">
                                    <Field
                                        component={Input}
                                        id="name"
                                        name="name"
                                        title="Name"
                                        type="text"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col col-5">
                                    <div className="input-group">
                                        <Field
                                            component={Input}
                                            id="weight"
                                            name="weight"
                                            title="Weight"
                                            type="text"
                                            onChange={handleChange}
                                            append="kg"
                                        />
                                    </div>
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
                                        />
                                    </label>
                                    <label>
                                        Tube feeding:
                                        <Field
                                            component="input"
                                            name="isGettingTubed"
                                            type="checkbox"
                                            onChange={handleChange}
                                        />
                                    </label>
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