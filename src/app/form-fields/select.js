import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import InputGroup from 'react-bootstrap/lib/InputGroup';

/**
 * Wrapper for select html element for use by redux-form Field
 * @param {Object} input Prop passed in from redux-form
 * @param {boolean} touched Prop changed to true on onBlur event
 * @param {string} error Contains relevant error from validation function
 * @param {string} title Content for label
 * @param {array} options Array of values for options for select
 * @param other Other props for the select tag
 * @returns {*} Rendered select field
 */
export const Select = ({input, meta: {touched, error}, id, title, options, ...other}) => {
    return (
        <Form.Group controlId={id}>
            <Form.Label>{title}</Form.Label>
            <Form.Control as="select"
                          isValid={touched && !error}
                          isInvalid={touched && error}
                          {...input}
                          {...other}
            >
                <option value="" disabled/>
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
            </Form.Control>
        </Form.Group>
    )
};