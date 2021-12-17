import React from 'react';
import { Card, Col, Row, Image } from 'react-bootstrap';
import './Services.css';


const Services = () => {

    return (
        <div className="container-fluid mt-5 mb-5 pt-5" id="features">
            <h3 className="fw-bolder mb-3 text-primary">Diverse Services</h3>
            <h5 className="text-center mb-4 text-secondary text-bold">We're dedicated to customers and focused on quality
            </h5>
            <Row xs={1} md={3} className="g-4">
                <Col >
                    <Card className="text-center  shadow-lg p-1 mb-5 bg-body rounded card">
                        <div className="icon-color pt-3 text-start">
                            <Image src="https://img.icons8.com/dotty/80/000000/erp-system.png" fluid />
                        </div>
                        <Card.Body>
                            <Card.Title className="fw-bold text-start">ERP Software Development</Card.Title>
                            <Card.Text className="text-start">
                                We provide ERP software development service for small to large companies. This will help to manage accounts, inventory, purchase, sales etc.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card className="text-center  shadow-lg p-1 mb-5 bg-body rounded card">
                        <div className="icon-color pt-3 text-start">
                            <Image src="https://img.icons8.com/ios-filled/80/000000/e.png" fluid />
                        </div>
                        <Card.Body>
                            <Card.Title className="fw-bold text-start">E-Commerce
                            </Card.Title>
                            <Card.Text className="text-start">
                                We offer E-Commerce Website development service with awesome user interfaces and user experiences for your online businesses.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card className="text-center  shadow-lg p-1 mb-5 bg-body rounded card">
                        <div className="icon-color pt-3 text-start">
                            <Image src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/80/000000/external-pencil-creative-kiranshastry-lineal-kiranshastry.png" fluid />
                        </div>
                        <Card.Body>
                            <Card.Title className="fw-bold text-start">Customized Software
                            </Card.Title>
                            <Card.Text className="text-start">
                                We offer Customized Software which is specifically tailored to meet your business needs with your desired features.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card className="text-center  shadow-lg p-1 mb-5 bg-body rounded card">
                        <div className="icon-color pt-3 text-start">
                            <Image src="https://img.icons8.com/external-wanicon-lineal-wanicon/80/000000/external-world-user-interface-wanicon-lineal-wanicon.png" fluid />
                        </div>
                        <Card.Body>
                            <Card.Title className="fw-bold text-start">Website Design & Development
                            </Card.Title>
                            <Card.Text className="text-start">
                                We provide Premium Website Design and Development service with awesome UI designs to attract website visitors.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card className="text-center  shadow-lg p-1 mb-5 bg-body rounded card">
                        <div className="icon-color pt-3 text-start">
                            <Image src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/80/000000/external-mobile-phone-technology-dreamstale-lineal-dreamstale-2.png" fluid />
                        </div>
                        <Card.Body>
                            <Card.Title className="fw-bold text-start">Mobile App Development
                            </Card.Title>
                            <Card.Text className="text-start">
                                We offer cross-platform native Mobile Apps Development service to give awesome user experience on mobile devices.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card className="text-center  shadow-lg p-1 mb-5 bg-body rounded card">
                        <div className="icon-color pt-3 text-start">
                            <Image src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/80/000000/external-digital-marketing-digital-marketing-flatart-icons-outline-flatarticons.png" fluid />
                        </div>
                        <Card.Body>
                            <Card.Title className="fw-bold  text-start">Digital Marketing
                            </Card.Title>
                            <Card.Text className="text-start">
                                To get your desired customers and produce more attention fo your products, we offer digital marketing services with unique techniques.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default Services;