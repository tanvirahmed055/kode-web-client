import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import {
    useNavigate
} from "react-router-dom";
import useFirebase from '../../../hooks/useFirebase';

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { handleRegistration, updateProfile, auth } = useFirebase();

    let navigate = useNavigate();




    const onSubmit = (data, e) => {
        //console.log(data);

        // const newUser = {
        //     name: data?.name,
        //     email: data?.email,
        //     password: data?.password
        // }

        //console.log(newUser);


        handleRegistration(data.name, data.email, data.password)
            .then(result => {
                // Signed in 
                //const user = result.user;
                // ...
                updateProfile(auth.currentUser, {
                    displayName: data.name,
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });


                reset();
                navigate('/login')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode, errorMessage);
            });



    }







    return (
        <Container fluid >
            <Row>
                <Col sm={12} >
                    <Container className="login-form-container py-3  my-5 ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="fw-bold">Sign Up</h1>

                            <label htmlFor="name">Name</label>
                            <input placeholder="name" type="text" {...register("name")} />


                            <label htmlFor="email">Email</label>
                            <input placeholder="email" type="email" {...register("email")} />


                            <label htmlFor="password">Password</label>
                            <input placeholder="password" type="password" {...register("password")} />


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

export default Register;