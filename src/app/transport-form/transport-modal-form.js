import React from 'react';
import {Field} from 'redux-form'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Button, Col, Form, Modal} from 'react-bootstrap';
import {Input, Select} from "../form-fields/index";
import moment from "moment";

/**
 * Form for creating a new animal in the form of a modal
 * @param handleSubmit
 * @param handleChange
 * @param onSubmit
 * @param props
 * @returns {*}
 * @constructor
 */
export const TransportModalForm = ({handleSubmit, handleChange, onSubmit, toggleModal, show, ...props}) => {
    return (
        <Modal show={show} onHide={toggleModal}>
            <Modal.Header closeButton>
                <Modal.Title>New Transport</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Body className="modal-body">
                    <Form.Row>
                        <Col xs={6}>
                            <Field
                                component={Select}
                                title="Departs"
                                id="departs"
                                name="departs"
                                value={props.value}
                                onChange={handleChange}
                                options={[
                                    'NRO',
                                    'MBO',
                                    'SLO'
                                ]}
                            />
                        </Col>
                        <Col xs={6}>
                            <Field
                                component={Select}
                                title="Arrives"
                                name="arrives"
                                id="arrives"
                                value={props.value}
                                onChange={handleChange}
                                options={[
                                    'NRO',
                                    'MBO',
                                    'SLO'
                                ]}
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col xs={12}>
                            <Field
                                component={Input}
                                name="meetPlace"
                                id="meetPlace"
                                title="Meet Place"
                                type="text"
                                value={props.value}
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col xs={8}>
                            <Field
                                component={Select}
                                name="meetDate"
                                id="meetDate"
                                title="Meet Date"
                                value={props.value}
                                onChange={handleChange}
                                options={[
                                    moment().format('dddd MM/DD'),
                                    moment().add(1, 'days').format('dddd MM/DD'),
                                    moment().add(2, 'days').format('dddd MM/DD'),
                                    moment().add(3, 'days').format('dddd MM/DD'),
                                ]}
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col xs={6}>
                            <Field
                                component={Input}
                                name="meetTime"
                                id="meetTime"
                                title="Meet Time"
                                type="text"
                                value={props.value}
                                onChange={handleChange}
                            />
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