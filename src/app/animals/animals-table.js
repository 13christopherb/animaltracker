import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import { actions } from './ducks/actions';
import { AnimalRow } from './animal-row';


class AnimalsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.deleteAnimal = this.deleteAnimal.bind(this)
    }

    componentDidMount() {
    }

    deleteAnimal(animal) {
        this.props.dispatch(actions.deleteAnimal(animal));
    }

    render() {
        let animals = [];
        for (let animal of this.props.animals) {
            animals.push(<AnimalRow animal={animal}
                                    timeAgo={moment(animal.timestamp).fromNow()}
                                    deleteAnimal={this.deleteAnimal}
                                    key={animal.id} />);
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

export default connect()(AnimalsTable);
