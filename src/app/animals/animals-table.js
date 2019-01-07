import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {Row, Col, Table} from 'react-bootstrap';
import {animalsActions} from "./ducks";
import {AnimalRow} from './animal-row';


class AnimalsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.deleteAnimal = this.deleteAnimal.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
    }

    deleteAnimal(animal) {
        this.props.dispatch(animalsActions.deleteAnimal(animal));
    }

    handleChange(animal) {
        this.props.dispatch(animalsActions.updateAnimal(animal))
    }

    render() {
        const {animals} = this.props;
        
        return (
            <Row>
                <Col md={12}>
                    <Table striped>
                        <tbody>
                        {animals.map((animal) =>
                            <AnimalRow deleteAnimal={this.deleteAnimal}
                                       handleChange={this.handleChange}
                                       key={animal.id}
                                       animal={animal}
                            />
                        )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        );
    }
}

export default connect()(AnimalsTable);
