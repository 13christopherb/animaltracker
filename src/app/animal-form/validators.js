/**
 * Contains validators for AnimalForm component
 */

/**
 * Validation function for required values for provided fields
 * @param values Field values to be validated
 */
export const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    } else if (!/^[a-zA-Z\s]+$/.test(values.name)) {
        errors.name = 'Must contain only letters and whitespace'
    } else if (values.name.length > 30) {
        errors.name = 'Must be 30 characters or fewer';
    }
    if (!values.weight) {
        errors.weight = 'Required';
    } else if (!/^\d+(?:\.[0,5]{1})*$/.test(values.weight)) {
        errors.weight = 'Must be an integer or end in .0 or .5';
    }
    if (!values.species) {
        errors.species = 'Required';
    } else if (values.species.length > 3) {
        errors.species = 'Must be fewer than 4 characters'
    }
    if (!values.location) {
        errors.location = 'Required';
    } else if (values.location.length > 3) {
        errors.location = 'Must be fewer than 4 characters'
    }
    return errors
};