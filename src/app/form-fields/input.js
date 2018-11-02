import React from 'react';

/**
 * Wrapper for input html element for use by redux-form Field
 * @param input Prop passed in from redux-form
 * @param touched Prop changed to true on onBlur event
 * @param error Contains relevant error from validation function
 * @param title Content for label
 * @param other Other props for the input tag
 * @returns {*} Rendered input field
 */
export const Input = ({input, meta: {touched, error}, title, ...other}) => {
    const isValid = touched ? error ? 'is-invalid' : 'is-valid' : '';
    return (
        <div className="form-group">
            <label className="form-label">{title}</label>
            <input
                className={'form-control ' + isValid}
                {...input}
                {...other}
            />
            {isValid && <div className="invalid-feedback">{error}</div>}
        </div>
    )
};