import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuidv4 from 'uuid';
import * as Actions from '../actions/AnimalActions';
import AnimalTitle from './AnimalTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Animals extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''}
    }

    componentDidMount() {
        this.props.dispatch(Actions.getAnimals());
    }

    deleteAnimal = (animal) => {
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
                    <table className="table table-striped">
                        <tbody>
                        {animals}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps({animals}, ownProps) {
    return {
        animals: animals
    }
}

export default connect(
    mapStateToProps,
)(Animals);
