import React from 'react';
import { Card, Col, Button, Row, Image } from 'react-bootstrap';
import {
    useNavigate
} from "react-router-dom";

const Service = (props) => {
    const { _id, serviceName, serviceImg, shortDescription, servicePrice } = props.service;

    let navigate = useNavigate();

    return (
        <Col>
            <Card className="text-center  shadow-lg p-1 mb-5 bg-body rounded card service-card" onClick={() => navigate(`/purchaseService/${_id}`)}>
                <div className="icon-color pt-3 text-start">
                    <Image src={serviceImg} fluid />
                </div>
                <Card.Body>
                    <Card.Title className="fw-bold text-start">{serviceName}</Card.Title>
                    <Card.Text className="text-start">
                        {shortDescription}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;