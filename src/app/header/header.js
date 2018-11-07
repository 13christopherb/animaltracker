import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {withRouter} from "react-router";
import {actions} from '../authentication/ducks/actions';
import {HeaderLoggedIn, HeaderLoggedOut} from "./headers";


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
    }

    logout(e) {
        this.props.dispatch(actions.logout());
    }

    changeNavbar(e) {
        const newPath = e.target.name;
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

    render() {
        return (
            <div>
                {this.props.loggedIn ?
                    <HeaderLoggedIn
                        pathname={this.state.pathname}
                        changeNavbar={this.changeNavbar}
                        logout={this.logout}
                    />:
                    <HeaderLoggedOut />
                }
            </div>
        );
    }
}

function mapStateToProps({animals, authentication}, ownProps) {
    return {
        loggedIn: authentication.loggedIn
    }
}

export default withRouter(connect(
    mapStateToProps,
)(Header));