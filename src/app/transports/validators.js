/**
 * Contains validators for TransportForm component
 */

/**
 * Validation function for required values for provided fields
 * @param values Field values to be validated
 */
export const validate = values => {
    const errors = {};
    if (!values.meetTime) {
        errors.meetTime = 'Required';
    } else if (!/^[0-2]?\d\:?((?:60)|[0-5]\d)$/.test(values.meetTime)) {
        errors.meetTime = 'Must be a valid military time'
    }
    return errors
};