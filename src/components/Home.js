import React, {Component} from 'react';
import {connect} from 'react-redux';
import { animalActions } from '../actions/AnimalActions';
import AnimalTitle from './AnimalRow';


class Home extends Component {

    constructor(props) {
        super(props);
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
        animals: ownProps.animals,
    }
}

export default connect(
    mapStateToProps,
)(Home);
