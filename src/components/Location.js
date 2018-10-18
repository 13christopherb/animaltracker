import React, {Component} from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Animals from './Animals';


class Location extends Component {

    constructor(props) {
        super(props);
        this.state = {expanded: true}
    }

    render() {
        return (
            <div>
                <a onTransitionEnd={this.onCollapseClick} className="btn btn-info btn-block" data-toggle="collapse"
                   href={'#'+this.props.location} role="button"
                   aria-expanded="false">
                    {this.props.location}
                </a>
                <div className="collapse show" aria-expanded="true" id={this.props.location}>
                    <Animals animals={this.props.animals}/>
                </div>
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