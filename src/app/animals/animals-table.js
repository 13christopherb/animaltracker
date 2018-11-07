import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {actions} from './ducks/actions';
import {AnimalRow} from './animal-row';


class AnimalsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.deleteAnimal = this.deleteAnimal.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
    }

    deleteAnimal(animal) {
        this.props.dispatch(actions.deleteAnimal(animal));
    }

    handleChange(animal) {
        this.props.dispatch(actions.updateAnimal(animal))
    }

    render() {
        let animals = [];
        for (let animal of this.props.animals) {
            animals.push(<AnimalRow animal={animal}
                                    timeAgo={moment(animal.timestamp).fromNow()}
                                    deleteAnimal={this.deleteAnimal}
                                    handleChange={this.handleChange}
                                    key={animal.id}/>);
        }
        return (
            <div>
                <div className="row">
                    <div className="col col-md-12">
                        <table className="table table-striped table-responsive">
                            <tbody>
                            {animals}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(AnimalsTable);
