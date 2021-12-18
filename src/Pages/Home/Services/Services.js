import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Image, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const url = 'https://sheltered-sea-63278.herokuapp.com/services';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
    }, [])

    return (
        <div className="container-fluid mt-5 mb-5 pt-5" id="services">
            <h3 className="fw-bolder pb-3 text-primary">Diverse Services</h3>
            <h5 className="text-center pb-5 text-secondary text-bold">We're dedicated to customers and focused on quality
            </h5>
            <Row xs={1} md={3} className="g-4">
                {
                    loading ? <Spinner animation="grow" className="mx-auto" /> :
                        services?.map(service => <Service key={service._id} service={service}></Service>)
                }

            </Row>
        </div>
    );
};

export default Services;