import React from 'react';
import moment from 'moment';
import {Select, Input} from "../form-fields/index";
import {Button, Col, Form} from 'react-bootstrap';
import {Field} from 'redux-form'

export const TransportForm = ({handleSubmit, handleChange, onSubmit, ...props}) => {
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
                <Col md={2}>
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
                <Col md={2}>
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
                <Col md={2}>
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
                <Col md={2}>
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
                <Col md={2}>
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
                <Col md={3}>
                    <Button variant="primary"
                            disabled={props.pristine || !props.valid}
                            type="submit">
                        Submit
                    </Button>
                </Col>
            </Form.Row>
        </Form>
    )
};