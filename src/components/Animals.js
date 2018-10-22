import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuidv4 from 'uuid';
import * as Actions from '../actions/AnimalActions';
import AnimalTitle from './AnimalRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Animals extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''}
        this.deleteAnimal = this.deleteAnimal.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(Actions.fetchAnimals());
    }

    deleteAnimal(animal) {
        this.props.dispatch(Actions.deleteAnimal(animal.props.animal));
    }

    render() {
        let animals = [];
        for (let animal of this.props.animals) {
            animals.push(<AnimalTitle animal={animal} deleteAnimal={this.deleteAnimal} key={animal.id} />);
        }
        return (
            <div>
                <div className="row">
                    <div className="col col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <tbody>
                                {animals}
                                </tbody>
                            </table>
                        </div>
                    </div>
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
)(Animals);
