import React from 'react';

/**
 * Wrapper for input html element for use by redux-form Field
 * @param {Object} input Prop passed in from redux-form
 * @param {Object} meta Prop from redux-form
 * @param {boolean} meta.touched Prop changed to true on onBlur event
 * @param {string} meta.error Contains relevant error from validation function
 * @param {string} title Content for label
 * @param {boolean} [displayErrorMessage=true] Whether to display error messages or not, defaults
 * @param other Other props for the input tag
 * @returns {*} Rendered input field
 */
export const Input = ({input, meta: {touched, error}, title, displayErrorMessage = true, ...other}) => {
    const validityClass = touched ? error ? 'is-invalid' : 'is-valid' : '';
    return (
        <div className="form-group">
            {title && <label className="form-label">{title}</label>}
            <input
                className={'form-control ' + validityClass}
                {...input}
                {...other}
            />
            {touched && error && displayErrorMessage && <div className="invalid-feedback">{error}</div>}
        </div>
    )
};