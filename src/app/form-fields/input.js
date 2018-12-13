import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import InputGroup from 'react-bootstrap/lib/InputGroup';

/**
 * Wrapper for input html element for use by redux-form Field
 * @param {Object} input Prop passed in from redux-form
 * @param {Object} meta Prop from redux-form
 * @param {boolean} meta.touched Prop changed to true on onBlur event
 * @param {string} meta.error Contains relevant error from validation function
 * @param {string} title Content for label
 * @param {string} append Text to place after the input
 * @param {boolean} [displayErrorMessage=true] Whether to display error messages or not, defaults
 * @param other Other props for the input tag
 * @returns {*} Rendered input field
 */
export const Input = ({input, meta: {touched, error}, id, title, append, className, displayErrorMessage = true, ...other}) => {
    return (
        <Form.Group controlId={id}>
            {title && <Form.Label className="form-label">{title}</Form.Label>}
            <InputGroup>
                <FormControl
                    isValid={touched && !error}
                    isInvalid={touched && error}
                    className={className}
                    {...input}
                    {...other}
                />
                {append &&
                    <InputGroup.Append>{append}</InputGroup.Append>
                }
                <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
            </InputGroup>
        </Form.Group>
    )
};