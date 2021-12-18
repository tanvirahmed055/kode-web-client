import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddAService = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        //console.log(data);

        const newService = {
            serviceName: data.serviceName,
            serviceImg: data.serviceImg,
            shortDescription: data.shortDescription,
            detailDescription: data.detailDescription,
            servicePrice: data.servicePrice,
        };

        console.log(newService);

        const url = 'https://sheltered-sea-63278.herokuapp.com/addService';

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newService),
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


    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <Container className="order-form-container p-3 mt-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1>Add A New Service</h1>
                            <label htmlFor="servicename">Service Name</label>
                            <input placeholder="name of the service" {...register("serviceName")} />

                            <label htmlFor="imageUrl">Service Image</label>
                            <input placeholder="image url" {...register("serviceImg")} />



                            <label htmlFor="shortDescription">Short Description</label>
                            <input
                                placeholder="short description of service"
                                type="text"
                                {...register("shortDescription")}
                            />

                            <label htmlFor="detailDescription">Detail Description</label>
                            <input
                                placeholder="detail description of service"
                                type="text"
                                {...register("detailDescription")}
                            />

                            <label htmlFor="serviceprice">Price</label>
                            <input type="number" placeholder="service price" {...register("servicePrice")} />

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
    );
};

export default AddAService;