/**
 * Contains the separate views for the header while logged in or logged out
 */

import React from 'react';
import {Link} from 'react-router-dom';
import HeaderLogin from '../authentication/header-login'

/**
 * Component for header while user is logged out
 * @returns {*}
 * @constructor
 */
export const HeaderLoggedOut = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
            </ul>
            <HeaderLogin/>
        </nav>
    )
};

/**
 * Component for header while user is logged in
 * @param props
 * @returns {*}
 * @constructor
 */
export const HeaderLoggedIn = (props) => {
    const activeClassName = 'nav-item active';
    const inactiveClassName = 'nav-item';
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li id="" onClick={props.changeNavbar}
                    className={props.pathname === '' ? (activeClassName):(inactiveClassName)}>
                    <Link name="" className="nav-link" to="/">Animals</Link>
                </li>
                <li id="transports" onClick={props.changeNavbar}
                    className={props.pathname === 'transportsReducer' ? (activeClassName):(inactiveClassName)}>
                    <Link name="transports" className="nav-link" to="/transports">Transports</Link>
                </li>
            </ul>
            <button className="btn btn-outline-primary my-2 my-sm-0" onClick={props.logout}>Sign out</button>
        </nav>
    )
};