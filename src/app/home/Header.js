import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {withRouter} from "react-router";
import {actions} from '../authentication/ducks/actions';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            username: '',
            password: '',
            pathname: this.props.history.location.pathname.slice(1)
        };
        this.logout = this.logout.bind(this);
        this.changeNavbar = this.changeNavbar.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    logout(e) {
        this.props.dispatch(actions.logout());
    }

    changeNavbar(e) {
        const newPath = e.target.name
        this.setState({
            pathname: newPath
        })
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        };
        this.props.dispatch(actions.login(user));
    }

    render() {
        const activeClassName = 'nav-item active';
        const inactiveClassName = 'nav-item';
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li id="" onClick={this.changeNavbar}
                            className={this.state.pathname === '' ? (activeClassName):(inactiveClassName)}>
                            <Link name="" className="nav-link" to="/">Animals</Link>
                        </li>
                        <li id="transports" onClick={this.changeNavbar}
                            className={this.state.pathname === 'transportsReducer' ? (activeClassName):(inactiveClassName)}>
                            <Link name="transports" className="nav-link" to="/transports">Transports</Link>
                        </li>
                    </ul>
                    {this.props.loggedIn ? (
                        <button className="btn btn-outline-primary my-2 my-sm-0" onClick={this.logout}>Sign out</button>
                    ) : (
                        <form className="form-inline" onSubmit={this.handleSubmit}>
                            <input className="form-control mr-sm-2" name="username" type="text"
                                   value={this.state.username} onChange={this.handleInputChange}/>
                            <input className="form-control" name="password" type="password"
                                   value={this.state.password} onChange={this.handleInputChange}/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign in</button>
                        </form>
                    )}
                </nav>
            </div>
        );
    }
}

function mapStateToProps({animals, authentication}, ownProps) {
    return {
        loggedIn: authentication.loggedIn
    }
}

const connectedHeader = withRouter(connect(
    mapStateToProps,
)(Header));

export {connectedHeader as Header};