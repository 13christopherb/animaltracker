import React from 'react';
import {Field} from 'redux-form'
import {Form, Col, Button} from 'react-bootstrap'
import {Input, Select} from "../form-fields/index";

/**
 * Form for creating a new animal
 * @param handleSubmit
 * @param handleChange
 * @param onSubmit
 * @param props
 * @returns {*}
 * @constructor
 */
export const AnimalForm = ({handleSubmit, handleChange, onSubmit, ...props}) => {
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
                <Col md={2}>
                    <Field
                        component={Select}
                        id="location"
                        title="Location"
                        name="location"
                        value={props.value}
                        onChange={handleChange}
                        options={[
                            'NRO',
                            'MBO',
                            'SLO'
                        ]}
                    />
                </Col>
                <Col md={2}>
                    <Field
                        component={Select}
                        id="species"
                        title="Species"
                        name="species"
                        value={props.value}
                        onChange={props.handleChange}
                        options={[
                            'CSL',
                            'ES',
                            'HS',
                            'NFS',
                            'GFS',
                            'SSO',
                            'CET'
                        ]}
                    />
                </Col>
                <Col md={3}>
                    <Field
                        component={Input}
                        id="name"
                        name="name"
                        title="Name"
                        type="text"
                        onChange={handleChange}
                        value={props.value}
                    />
                </Col>
                <Col md={3}>
                    <Field
                        component={Input}
                        id="weight"
                        name="weight"
                        title="Weight"
                        type="text"
                        onChange={handleChange}
                        value={props.value}
                        append="kg"
                    />
                </Col>
            </Form.Row>
            <Form.Row>
                <Col md={8}>
                    <Form.Group>
                        <Form.Label>
                            Controlled meds:
                            <Field
                                component="input"
                                name="isGettingControlledMeds"
                                type="checkbox"
                                onChange={handleChange}
                            />
                        </Form.Label>
                        <Form.Label>
                            Tube feeding:
                            <Field
                                component="input"
                                name="isGettingTubed"
                                type="checkbox"
                                onChange={handleChange}
                            />
                        </Form.Label>
                        <Button variant="primary" disabled={props.pristine || !props.valid} type="submit">
                            Submit
                        </Button>
                        <Button onClick={props.toggleAddAnimal} variant="danger" type="button">
                            Cancel
                        </Button>
                    </Form.Group>
                </Col>
            </Form.Row>
        </Form>
    )
};