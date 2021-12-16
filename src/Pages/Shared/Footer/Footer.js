import React from 'react';
import { Col, Container, Button, Row, FormControl, InputGroup, Image } from 'react-bootstrap';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className="mt-5  text-white shadow-lg bg-body rounded footer-container" style={{ maxWidth: '100vw' }}>
            <Container className="pt-4">
                <Row>
                    <Col sm={4}>
                        <h5 className="fw-bolder pb-5 text-dark fst-italic"><Image src="https://img.icons8.com/external-prettycons-lineal-prettycons/50/000000/external-coding-web-seo-prettycons-lineal-prettycons-2.png" fluid />KodeWeb - A Premium Web <span className="ps-3 fst-italic">Design & Development Agency</span></h5>
                        <p className="pb-3 text-dark fst-italic">Newsletter Sign Up</p>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Your Email"
                                aria-label="Recipient's Email"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="primary" id="button-addon2">
                                Subscribe
                            </Button>
                        </InputGroup>
                    </Col>
                    <Col sm={4}>


                        <Image src="https://img.icons8.com/external-prettycons-lineal-prettycons/196/000000/external-coding-web-seo-prettycons-lineal-prettycons-2.png" fluid className="" />



                    </Col>


                    <Col sm={4}>
                        <ul className="d-flex pt-3">

                            <HashLink className="me-2 nav-link pb-3 text-dark" style={{ color: 'white' }} to="/home#products"><i className="fas fa-check"></i>&nbsp;Home</HashLink>

                            <HashLink className="me-2 nav-link pb-3 text-dark" style={{ color: 'white' }} to="/home#features"><i className="fas fa-check"></i>&nbsp;Services</HashLink>

                            <HashLink className="me-2 nav-link pb-3 text-dark" style={{ color: 'white' }} to="/home#reviews"><i className="fas fa-check"></i>&nbsp;About</HashLink>



                            <HashLink className="me-2 nav-link pb-3 text-dark" style={{ color: 'white' }} to="/home#gallery"><i className="fas fa-check"></i>&nbsp;Contact</HashLink>
                        </ul>
                        <div className="ps-5 ms-5">
                            <Image src="https://img.icons8.com/ios/50/000000/facebook-new.png" fluid />
                            <Image src="https://img.icons8.com/ios/50/000000/twitter--v3.png" fluid />
                            <Image src="https://img.icons8.com/ios/50/000000/youtube-play.png" fluid />
                            <Image src="https://img.icons8.com/ios/50/000000/linkedin.png" fluid />
                            <Image src="https://img.icons8.com/ios/50/000000/instagram-new--v3.png" fluid />




                        </div>

                        <ul className="d-flex pt-3 ps-5 ms-5">

                            <HashLink className="me-2 nav-link pb-3 text-secondary" style={{ color: 'white' }} to="/home#products"><i className="fas fa-check"></i>&nbsp;Terms & Conditions</HashLink>

                            <HashLink className="me-2 nav-link pb-3 text-secondary" style={{ color: 'white' }} to="/home#features"><i className="fas fa-check"></i>&nbsp;Privacy Policy</HashLink>


                        </ul>

                    </Col>

                </Row>
                <Row>
                    <Col className="d-flex flex-column align-self-end justify-content-center pb-1">
                        <hr />
                        <p className="text-dark ">Copyright © 2021 KodeWeb, All Rights Reserved.

                        </p></Col>
                </Row>
            </Container>

        </div>
    );
};

export default Footer;