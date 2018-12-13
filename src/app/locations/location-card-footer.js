import React, {Component} from 'react';
import Card from 'react-bootstrap/lib/Card';
import Button from 'react-bootstrap/lib/Button';
import Collapse from 'react-bootstrap/lib/Collapse';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {TransportCard} from "../transports/transport-card";

export default class LocationCardFooter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    render() {
        const {isOpen} = this.state;
        return (
            <Card.Footer className="bg-transparent">
                {this.props.transports.length > 0 ?
                <div>
                    <Button variant="primary" size="sm" onClick={() => this.setState({isOpen: !isOpen})}>
                        <FontAwesomeIcon icon="chevron-down"/> Transports
                    </Button>
                    <Collapse in={this.state.isOpen}>
                        <div>
                            <TransportCard transports={this.props.transports}/>
                        </div>
                    </Collapse>
                </div> :
                    <span>No transports</span>
                }
            </Card.Footer>
        )
    }
};