import React from 'react';
import { Nav, Navbar as BootstrapNavbar, NavDropdown, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <BootstrapNavbar expand="lg" variant="dark" style={{ backgroundColor: '#171923' }}>
            <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <h2 style={{ fontFamily: 'revert', margin: '0' }}>Elysium</h2>
            </NavLink>

            <BootstrapNavbar.Toggle aria-controls="navbar-nav" />

            <BootstrapNavbar.Collapse id="navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="TRENDING" id="trending-dropdown">
                        <NavDropdown.Item href="#trending/action">Tv Show</NavDropdown.Item>
                        <NavDropdown.Item href="#trending/comedy">Movie</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="TV SHOW" id="tv-show-dropdown">
                        <NavDropdown.Item href="#tv-show/series">Top Rated</NavDropdown.Item>
                        <NavDropdown.Item href="#tv-show/shows">Popular</NavDropdown.Item>
                        <NavDropdown.Item href="#tv-show/shows">Coming Soon</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="MOVIES" id="movies-dropdown">
                        <NavDropdown.Item href="#movies/latest">Top Rated</NavDropdown.Item>
                        <NavDropdown.Item href="#movies/popular">Popular</NavDropdown.Item>
                        <NavDropdown.Item href="#tv-show/shows">Coming Soon</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Button variant="outline-light" className="me-2">Signup</Button>
                    <Button variant="outline-light">Login</Button>
                </Nav>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    );
}

export default Navbar;
