import React from 'react';
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
                            <Select title={'Location'}
                                    name={'location'}
                                    value={props.location}
                                    onChange={props.handleInputChange}
                                    onBlur={props.onBlur}
                                    options={[
                                        'NRO',
                                        'MBO',
                                        'SLO'
                                    ]}
                            />
                        </div>
                        <div className="col col-md-2">
                            <Select title={'Species'}
                                    name={'species'}
                                    value={props.species}
                                    onChange={props.handleInputChange}
                                    onBlur={props.onBlur}
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
                            <Input id={'name'}
                                   name={'name'}
                                   title={'Name'}
                                   type={'text'}
                                   onChange={props.handleInputChange}
                                   onBlur={props.onBlur}
                                   value={props.name}/>

                        </div>
                        <div className="col col-md-3">
                            <Input id={'weight'}
                                   name={'weight'}
                                   title={'Weight'}
                                   type={'text'}
                                   onChange={props.handleInputChange}
                                   onBlur={props.onBlur}
                                   value={props.weight}/>

                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col col-md-6">
                        <label>
                            Controlled meds:
                            <input
                                name="isGettingControlledMeds"
                                type="checkbox"
                                onChange={props.handleInputChange}
                                onBlur={props.onBlur}
                                value={props.isGettingControlledMeds}
                            />
                        </label>
                        <label>
                            Tube feeding:
                            <input
                                name="isGettingTubed"
                                type="checkbox"
                                onBlur={props.onBlur}
                                onChange={props.handleInputChange}
                                value={props.isGettingTubed}
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

export default AnimalForm