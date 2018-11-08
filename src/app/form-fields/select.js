import React from 'react';
import PropTypes from "prop-types";
import {Input} from "./input";

/**
 * Wrapper for select html element for use by redux-form Field
 * @param input Prop passed in from redux-form
 * @param touched Prop changed to true on onBlur event
 * @param error Contains relevant error from validation function
 * @param title Content for label
 * @param options Array of values for options for select
 * @param other Other props for the select tag
 * @returns {*} Rendered select field
 */
export const Select = ({input, meta: {touched, error}, title, options, ...other}) => {
    const validityClass = touched ? error ? 'is-invalid' : 'is-valid' : '';
    return (
        <div className="form-group">
            <label>{title}</label>
            <select
                className={'custom-select ' + validityClass}
                {...input}
                {...other}
            >
                <option value="" disabled></option>
                {options.map(option => {
                    return (
                      <option
                          key={option}
                          value={option}
                          label={option}
                      >{option}
                      </option>
                    );
                })}
            </select>
        </div>
    )
};