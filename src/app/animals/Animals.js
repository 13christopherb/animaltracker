import React, {Component} from 'react';
import {connect} from 'react-redux';
import { actions } from './ducks/actions';
import { AnimalRow } from './AnimalRow';


class Animals extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''}
        this.deleteAnimal = this.deleteAnimal.bind(this)
    }

    componentDidMount() {
    }

    deleteAnimal(animal) {
        this.props.dispatch(actions.deleteAnimal(animal.props.animal));
    }

    render() {
        let animals = [];
        for (let animal of this.props.animals) {
            animals.push(<AnimalRow animal={animal} deleteAnimal={this.deleteAnimal} key={animal.id} />);
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

const connectedAnimals = connect(
    mapStateToProps,
)(Animals);

export {connectedAnimals as Animals}
