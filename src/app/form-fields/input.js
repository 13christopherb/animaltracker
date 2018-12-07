import React from 'react';
import Form from 'react-bootstrap/lib/Form';
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
export const Input = ({input, meta: {touched, error}, id, title, append, displayErrorMessage = true, ...other}) => {
    return (
        <Form.Group controlId={id}>
            {title && <Form.Label className="form-label">{title}</Form.Label>}
            <InputGroup>
                <Form.Control
                    isValid={touched && !error}
                    isInvalid={touched && error}
                    {...input}
                    {...other}
                />
                {append &&
                    <InputGroup.Append>{append}</InputGroup.Append>
                }
                <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
            </InputGroup>
        </Form.Group>
    )
};