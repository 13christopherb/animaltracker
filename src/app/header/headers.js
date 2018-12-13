/**
 * Contains the separate views for the header while logged in or logged out
 */

import React from 'react';
import {Link} from 'react-router-dom';
import HeaderLogin from '../authentication/header-login'
import {Navbar, Nav, NavItem, Button, NavDropdown, FormControl, Form} from 'react-bootstrap'

/**
 * Component for header while user is logged out
 * @returns {*}
 * @constructor
 */
export const HeaderLoggedOut = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">TMMC</Navbar.Brand>
            <Navbar.Collapse>
                <Nav className="mr-auto"/>
                <HeaderLogin/>
            </Navbar.Collapse>
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
                <Nav activeKey={props.pathname} onSelect={props.changeNavbar} className="mr-auto">
                    <NavItem>
                        <Link name="" className="nav-link" to="/">Animals</Link>
                    </NavItem>
                    <NavItem>
                        <Link name="transports" className="nav-link" to="/transports">Transports</Link>
                    </NavItem>
                </Nav>
                <Nav>
                    <Button className="mr-sm-2" variant="outline-primary" onClick={props.logout}>Sign out</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
};

export const MobileHeader = (props) => {
    return (
        <Navbar bg="light">
            <Navbar.Brand>Marine Mammals</Navbar.Brand>
            <Navbar.Collapse>
                <Nav>
                    <Button className="mr-sm-2" size="sm" variant="outline-primary" onClick={props.logout}>Sign
                        out</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};