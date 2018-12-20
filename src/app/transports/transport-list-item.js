import React from "react";
import moment from 'moment';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import {transportActions} from "./ducks";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ButtonDropdownToggle} from "../form-fields/button-dropdown-toggle";
import connect from "react-redux/es/connect/connect";


class TransportListItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.dispatch(transportActions.deleteTransport(this.props.transport));
    }

    render () {
        return (
            <ListGroupItem key={this.props.transport.id}>
                <Dropdown>
                    {this.props.transport.departs}
                    <FontAwesomeIcon icon="arrow-right" size="sm"/>
                    {this.props.transport.arrives}
                    {moment(this.props.transport.meetTime).format('MM/DD HHmm')}

                    <Dropdown.Toggle as={ButtonDropdownToggle} variant="light" size="sm">
                        <FontAwesomeIcon icon="ellipsis-h"/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={this.handleDelete}>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </ListGroupItem>
        )
    }
}

export default connect()(TransportListItem);