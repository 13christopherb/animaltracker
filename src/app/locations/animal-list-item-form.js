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
export const AnimalListItemForm = ({handleSubmit, handleChange, onSubmit, ...props}) => {
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                <div className="col col-md-2">
                    <h6>{props.animal.name}</h6>
                    <Field
                        component={Select}
                        id="location"
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
                <div className="col col-md-6">
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
    )
};