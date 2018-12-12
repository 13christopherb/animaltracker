/**
 * Contains the separate views for the header while logged in or logged out
 */

import React from 'react';
import {Link} from 'react-router-dom';
import HeaderLogin from '../authentication/header-login'
import {Navbar, Nav, NavItem, Button} from 'react-bootstrap'

/**
 * Component for header while user is logged out
 * @returns {*}
 * @constructor
 */
export const HeaderLoggedOut = (props) => {
    return (
        <Navbar bg="light">
            <Nav className="justify-content-end">
                <HeaderLogin/>
            </Nav>
        </Navbar>
    )
};

/**
 * Component for header while user is logged in
 * @param props
 * @returns {*}
 * @constructor
 */
export const HeaderLoggedIn = (props) => {
    return (
        <Navbar bg="light">
            <Navbar.Collapse>
                <Nav activeKey={props.pathname}>
                    <NavItem eventKey="" onClick={props.changeNavbar}>
                        <Link name="" className="nav-link" to="/">Animals</Link>
                    </NavItem>
                    <NavItem eventKey="transportsReducer" onClick={props.changeNavbar}>
                        <Link name="transports" className="nav-link" to="/transports">Transports</Link>
                    </NavItem>
                    <NavItem pullRight>
                        <Button variant="outline-primary" onClick={props.logout}>Sign out</Button>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export const MobileHeader = (props) => {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <span>Marine Mammals</span>
            <button className="btn btn-outline-primary btn-sm my-2 my-sm-0" onClick={props.logout}>Sign out</button>
        </nav>
    )
};