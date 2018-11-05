import {validate} from './validators'

describe('validators', () => {
    const invalidValues = {
        name: '1',
        weight: '1.t',
        species: 'CSFQ',
        location: 'NROOO',
    };
    const expectedErrors = {
        name: 'Must contain only letters and whitespace',
        weight: 'Must be an integer or end in .0 or .5',
        species: 'Must be fewer than 4 characters',
        location: 'Must be fewer than 4 characters'
    };
    const validValues = {
        name: 'Pipester',
        weight: '7.5',
        species: 'NFS',
        location: 'MBO'
    };
    test('detects invalid inputs', () => {
        expect(validate(invalidValues)).toEqual(expectedErrors);
    })
    test('passes valid inputs', () => {
        expect(validate(validValues)).toEqual({});
    })
});