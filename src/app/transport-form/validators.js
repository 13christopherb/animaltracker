import moment from 'moment';

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
    } else if (!/^([0-1]?\d|(?:2[0-3]))\:?((?:60)|[0-5]\d)$/.test(values.meetTime)) {
        errors.meetTime = 'Must be a valid military time'
    }
    return errors
};