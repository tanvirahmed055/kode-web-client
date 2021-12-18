import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    useParams
} from "react-router-dom";
import { useForm } from "react-hook-form";
import Image from 'react-bootstrap/Image';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { useSelector } from "react-redux";
import './PurchaseService.css';

const PurchaseService = () => {

    const { id } = useParams();

    const user = useSelector((state) => state?.user?.value);

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



        const url = 'https://sheltered-sea-63278.herokuapp.com/orders';

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newOrder),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);

            })
            .catch((error) => {
                console.error('Error:', error);
            });

        reset();


    }


    useEffect(() => {
        const url = `https://sheltered-sea-63278.herokuapp.com/service?id=${id}`
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
                        <Container className="order-form-container p-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h1>Service Order Form</h1>
                                <label htmlFor="username">Your Name</label>
                                <input defaultValue={user?.displayName} {...register("username")} />

                                <label htmlFor="email">Email</label>
                                <input
                                    defaultValue={user?.email}
                                    type="text"
                                    {...register("email")}
                                />

                                <label htmlFor="address">Address</label>
                                <input placeholder="address" {...register("address")} />


                                <label htmlFor="phonenumber">Phone Number</label>
                                <input placeholder="+880" {...register("phonenumber")} />


                                <label htmlFor="city">City</label>
                                <input placeholder="city" {...register("city")} />


                                <div style={{ color: "red" }}>
                                    {Object.keys(errors).length > 0 &&
                                        "There are errors, check your console."}
                                </div>
                                <input type="submit" />
                            </form>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default PurchaseService;