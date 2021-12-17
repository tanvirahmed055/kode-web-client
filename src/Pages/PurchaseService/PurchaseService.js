import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    useParams
} from "react-router-dom";
import { useForm } from "react-hook-form";
import Image from 'react-bootstrap/Image';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const PurchaseService = () => {

    const { id } = useParams();



    const [service, setService] = useState({});

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.status = 'pending';

        const newOrder = {
            name: data.username,
            email: data.email,
            address: data.address,
            phone: data.phonenumber,
            city: data.city,
        }

        newOrder.serviceName = service?.serviceName;
        newOrder.servicePrice = service?.servicePrice;
        newOrder.status = 'pending';




        reset();


    }


    useEffect(() => {
        const url = `http://localhost:5000/service?id=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    return (
        <>
            <Header></Header>
            <Container className="text-center mt-5">
                <Row>
                    <Col sm={7}>
                        <Image src={service?.serviceImg} style={{ width: '330px', height: '330px' }} className="text-center" fluid />
                        <h3 className="fw-bolder text-center mt-3">Service Name:&nbsp;{service?.serviceName}</h3>
                        <p className="text-center mt-3 mb-4"><span className="text-decoration-underline fw-bold">Service Description:</span>&nbsp;{service?.detailDescription}</p>
                        <h5>Service Price: &nbsp;${service?.servicePrice}</h5>
                    </Col>
                    <Col sm={5}>

                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default PurchaseService;