import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import './Header.css';
import useFirebase from '../../../hooks/useFirebase';
import { useSelector } from "react-redux";

const Header = () => {

    const { handleLogOut } = useFirebase();

    const user = useSelector((state) => state?.user?.value);

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="p-3">
            <Container>
                <Link to="/">
                    <Navbar.Brand className="fs-3 fw-bolder fst-italic text-dark"><img src="https://img.icons8.com/external-outline-juicy-fish/50/000000/external-code-coding-and-development-outline-outline-juicy-fish.png" alt="dfj" />&nbsp;KodeWeb</Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">

                        {user?.displayName && <Nav.Link className="me-2 fw-bold fst-italic text-dark" >Signed in as: {user?.displayName}</Nav.Link>}


                        <HashLink className="me-3 nav-link text-dark fst-italic fw-bold" style={{ fontWeight: '' }} to="">About</HashLink>

                        <HashLink className="me-3 nav-link text-dark fst-italic fw-bold" style={{ fontWeight: '' }} to="">Works</HashLink>

                        <HashLink className="me-3 nav-link text-dark fst-italic fw-bold" style={{ fontWeight: '' }} to="">Contact Us</HashLink>

                        <HashLink className="me-3 nav-link text-dark fst-italic fw-bold" style={{ fontWeight: '' }} to="">Blog</HashLink>

                        {user?.displayName ? <Link to="/dashboard">
                            <Button variant="primary" className="me-3 fw-bold">Dashboard</Button>
                        </Link> : <Link to="/register">
                            <Button variant="danger" className="me-3">Signup</Button>
                        </Link>}




                        {user?.email ? <Link to="/">
                            <Button variant="warning" className="me-3 mb-1" onClick={() => handleLogOut()}>Logout</Button>
                        </Link> :
                            <Link to="/login">
                                <Button variant="warning" className="me-3">Login</Button>
                            </Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;