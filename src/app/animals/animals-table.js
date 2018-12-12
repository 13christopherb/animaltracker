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
        let animals = [];
        for (let animal of this.props.animals) {
            animals.push(<AnimalRow animal={animal}
                                    timeAgo={moment(animal.timestamp).fromNow()}
                                    deleteAnimal={this.deleteAnimal}
                                    handleChange={this.handleChange}
                                    key={animal.id}/>);
        }
        return (
            <Row>
                <Col md={12}>
                    <Table striped>
                        <tbody>
                        {animals}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        );
    }
}

export default connect()(AnimalsTable);
