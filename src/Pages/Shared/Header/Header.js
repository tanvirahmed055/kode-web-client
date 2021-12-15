import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {



    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="p-3">
            <Container>
                <Link to="/">
                    <Navbar.Brand className="fs-3 fw-bolder fst-italic text-dark"><img src="https://img.icons8.com/external-outline-juicy-fish/50/000000/external-code-coding-and-development-outline-outline-juicy-fish.png" alt="dfj" />&nbsp;KodeWeb</Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">

                        <HashLink className="me-5 nav-link text-dark fst-italic fw-bold" style={{ fontWeight: '' }} to="">Home</HashLink>

                        <HashLink className="me-5 nav-link text-dark fst-italic fw-bold" style={{ fontWeight: '' }} to="">Services</HashLink>

                        <HashLink className="me-5 nav-link text-dark fst-italic fw-bold" style={{ fontWeight: '' }} to="">About</HashLink>

                        <HashLink className="me-5 nav-link text-dark fst-italic fw-bold" style={{ fontWeight: '' }} to="">Our works</HashLink>

                        <HashLink className="me-5 nav-link text-dark fst-italic fw-bold" style={{ fontWeight: '' }} to="">Contact Us</HashLink>

                        <HashLink className="me-5 nav-link text-dark fst-italic fw-bold" style={{ fontWeight: '' }} to="">Blog</HashLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;