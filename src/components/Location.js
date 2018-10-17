import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'underscore'
import * as Actions from '../actions/AnimalActions';
import Animals from './Animals';


class Location extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''}
    }

    render() {
        return (
            <div>
                {this.props.location}
                <Animals animals={this.props.animals}/>
            </div>
        );
    }
}

function mapStateToProps({animals}, ownProps) {
    return {
        animals: ownProps.animals
    }
}

export default connect(
    mapStateToProps,
)(Location);