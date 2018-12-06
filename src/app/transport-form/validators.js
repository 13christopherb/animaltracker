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
    } else if (!/^([0-1]?\d|(?:2[0-3])):?([0-5]\d)$/.test(values.meetTime)) {
        errors.meetTime = 'Must be a valid military time'
    }
    if (!values.meetPlace) {
        errors.meetPlace = 'Required';
    } else if (!/^[a-zA-Z\s]+$/.test(values.meetPlace)) {
        errors.meetPlace = 'Must only contain letters';
    } else if (values.meetPlace.length > 20) {
        errors.meetPlace = 'Must be fewer than 20 characters';
    }
    if (values.departs === values.arrives) {
        errors.arrives = 'Cannot be the same as Departs';
    }
    return errors
};