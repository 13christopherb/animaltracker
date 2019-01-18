import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Collapse from 'react-bootstrap/lib/Collapse';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import moment from "moment";
import AnimalsTable from "../animals/animals-table";


export default class Location extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
    }

    render() {
        const {animals, name, lastUpdated} = this.props;
        const {isOpen} = this.state;
        let speciesCount = {};
        for (let animal of animals) {
            speciesCount[animal.species] = speciesCount[animal.species] ? speciesCount[animal.species] + 1 : 1
        }
        return (
            <div>
                <Button variant="info" onClick={() => this.setState({isOpen: !isOpen})} block>
                    <Row>
                        <Col md={{span: 1, offset: 5}}><strong>{name}</strong>{moment(lastUpdated).fromNow()}</Col>
                        <Col md={3}>
                            {Object.entries(speciesCount).map(([species, number]) =>
                                <span key={species+'-count'}>{species}({number}) </span>
                            )}
                        </Col>
                    </Row>
                </Button>
                <Collapse in={isOpen}>
                    <div>
                        <AnimalsTable animals={animals}/>
                    </div>
                </Collapse>
            </div>
        );
    }
}
