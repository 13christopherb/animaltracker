import React from 'react';
import {Field} from 'redux-form'
import {Form, Col, Button} from 'react-bootstrap'
import {Select} from "../form-fields/index";

/**
 * Form for creating a new animal
 * @param handleSubmit
 * @param handleChange
 * @param onSubmit
 * @param props
 * @returns {*}
 * @constructor
 */
export const AnimalListItemForm = ({handleSubmit, handleChange, onSubmit, ...props}) => {
    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Row>
                    <Col md={2}>
                        <h6>{props.animal.name}</h6>
                        <Field
                            component={Select}
                            id="location"
                            name="location"
                            value={props.value}
                            onChange={props.handleChange}
                            options={[
                                'NRO',
                                'MBO',
                                'SLO'
                            ]}
                        />
                    </Col>
                    <Col md={6}>
                        <Button variant="primary" disabled={props.pristine || !props.valid} type="submit">
                            Submit
                        </Button>
                        <Button onClick={props.toggleMoving} variant="danger" type="button">
                            Cancel
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    )
};