import React from 'react';
import {Field} from 'redux-form'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Button, Col, Form, Modal} from 'react-bootstrap';
import {Input, Select} from "../form-fields/index";

/**
 * Form for creating a new animal in the form of a modal
 * @param handleSubmit
 * @param handleChange
 * @param onSubmit
 * @param id
 * @param props
 * @returns {*}
 * @constructor
 */
export const AnimalModalForm = ({handleSubmit, handleChange, onSubmit, show, toggleModal, ...props}) => {
    return (
        <Modal show={show} onHide={toggleModal}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Header closeButton>
                    <Modal.Title>New Animal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Row>
                        <Col xs={4}>
                            {props.location ?
                                <Form.Group>
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control as="select" defaultValue={props.location} disabled>
                                        <option>{props.location}</option>
                                    </Form.Control>
                                </Form.Group> :
                                <Field
                                    component={Select}
                                    id="location"
                                    title="Location"
                                    name="location"
                                    onChange={handleChange}
                                    options={[
                                        'NRO',
                                        'MBO',
                                        'SLO'
                                    ]}
                                />
                            }
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col xs={4}>
                            <Field
                                component={Select}
                                id="species"
                                title="Species"
                                name="species"
                                onChange={handleChange}
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
                        <Col xs={8}>
                            <Field
                                component={Input}
                                id="name"
                                name="name"
                                title="Name"
                                type="text"
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col xs={5}>
                            <Field
                                component={Input}
                                id="weight"
                                name="weight"
                                title="Weight"
                                type="text"
                                onChange={handleChange}
                                append="kg"
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col xs={12}>
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
                            </Form.Group>
                            <Form.Label>
                                Tube feeding:
                                <Field
                                    component="input"
                                    name="isGettingTubed"
                                    type="checkbox"
                                    onChange={handleChange}
                                />
                            </Form.Label>
                        </Col>
                    </Form.Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={toggleModal}
                            disabled={props.pristine || !props.valid}
                            type="submit">
                        Submit
                    </Button>
                    <Button variant="danger" onClick={toggleModal}
                            type="button">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};