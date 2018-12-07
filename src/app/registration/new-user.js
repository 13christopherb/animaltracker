import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../authentication/ducks/actions';


class NewUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            location: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        const login = {
            username: this.state.username,
            password: this.state.password,
            location: this.state.location
        };
        this.props.dispatch(actions.register(login));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="col">
                            <label>
                                Username
                                <input
                                    name="username" className="form-control"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    value={this.state.username}
                                />
                            </label>
                        </div>
                    </div>
                    <label>
                        Password
                        <input
                            name="password" className="form-control"
                            type="text"
                            onChange={this.handleInputChange}
                            value={this.state.password}
                        />
                    </label>
                    <label>
                        Location
                        <input
                            name="location" className="form-control"
                            type="text"
                            onChange={this.handleInputChange}
                            value={this.state.location}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps() {
    return {}
}

export default connect(
    mapStateToProps,
)(NewUser);
