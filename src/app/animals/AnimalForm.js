import React from 'react';
import {Input, Select} from "../form_fields/FormFields";

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
                                    handleChange={props.handleInputChange}
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
                                    handleChange={props.handleInputChange}
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
                                   value={props.name}
                                   handleChange={props.handleInputChange}/>

                        </div>
                        <div className="col col-md-3">
                            <Input id={'weight'}
                                   name={'weight'}
                                   title={'Weight'}
                                   type={'text'}
                                   value={props.weight}
                                   handleChange={props.handleInputChange}/>

                        </div>
                    </div>
                    <div className="form-row">
                        <label>
                            Controlled meds:
                            <input
                                name="isGettingControlledMeds"
                                type="checkbox"
                                onChange={props.handleInputChange}
                                value={props.isGettingControlledMeds}
                            />
                        </label>
                        <label>
                            Tube feeding:
                            <input
                                name="isGettingTubed"
                                type="checkbox"
                                onChange={props.handleInputChange}
                                value={props.isGettingTubed}
                            />
                        </label>
                        <button className="btn btn-primary" type="submit">Submit</button>
                        <button onClick={props.toggleAddAnimal} className="btn btn-danger" type="button">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};