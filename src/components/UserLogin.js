import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {userActions} from '../actions/UserActions';


class UserLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
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
            password: this.state.password
        };
        this.props.dispatch(userActions.login(login));
    };

    render() {
        if (this.props.user) {
            return (<Redirect to={{ pathname: '/'}} />)
        }
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
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps({authentication}) {
    return {
        user: authentication.user
    };
}

const connectedLogin = connect(mapStateToProps)(UserLogin);

export {connectedLogin as UserLogin}
