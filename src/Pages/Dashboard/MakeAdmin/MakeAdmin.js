import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {
        //console.log(data);

        const inputEmail = {
            email: data?.email
        }

        //console.log(inputEmail);

        const url = 'https://sheltered-sea-63278.herokuapp.com/makeAdmin';

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputEmail),
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
                    <Container className="order-form-container p-3 mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1>Make Admin Form</h1>

                            <label htmlFor="email">Enter Email</label>
                            <input
                                type="email"
                                placeholder="enter email" {...register("email")} />



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

export default MakeAdmin;