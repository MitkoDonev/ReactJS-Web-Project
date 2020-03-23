import React, {Component} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">.
                            <Navbar.Brand>
                                <Link to="/">Home</Link>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <Link to="/about">About</Link>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <Link to="/showroom">Show Room</Link>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <Link to="/calculator">Calculator</Link>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <Link to="/services">Services</Link>
                            </Navbar.Brand>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;