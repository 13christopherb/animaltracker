import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Collapse from 'react-bootstrap/lib/Collapse';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import _ from 'underscore';
import AnimalsTable from "../animals/animals-table";


export default class Location extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
    }

    render() {
        let animalsBySpecies = _.countBy(this.props.animals, (animal) => {
            return animal['species']
        });
        let speciesCount = [];
        for (let property in animalsBySpecies) {
            if (animalsBySpecies.hasOwnProperty(property)) {
                speciesCount.push(property + '(' + animalsBySpecies[property] + ') ')
            }
        }
        return (
            <div>
                <Button variant="info" onClick={() => this.setState({isOpen: !this.state.isOpen})} block>
                    <Row className="justify-content-md-center">
                        <Col md={1}>{this.props.locationName}</Col>
                        <Col md={1}>
                            <small>{speciesCount}</small>
                        </Col>
                    </Row>
                </Button>
                <Collapse in={this.state.isOpen}>
                    <div>
                        <AnimalsTable animals={this.props.animals}/>
                    </div>
                </Collapse>
            </div>
        );
    }
}
