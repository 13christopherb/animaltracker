import React, {Component} from 'react';
import {connect} from 'react-redux';
import AnimalsTable from './animals-table';


class Animals extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AnimalsTable animals={this.props.animals} />
            </div>
        );
    }
}


export default Animals;
