import React, { useState, useEffect } from 'react';
import { Button, Table, Row, Col, Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

const ManageServices = () => {


    const [services, setServices] = useState([]);

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const url = `https://sheltered-sea-63278.herokuapp.com/services`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                //console.log(orders)
                setLoading(false);
            })
    }, [services])

    const handleDelete = id => {
        //console.log(id);
        const confirmation = window.confirm("Are you sure you want to delete this product?");

        if (confirmation) {
            fetch(`https://sheltered-sea-63278.herokuapp.com/deleteService/${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    //console.log('Success:', data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }

    }




    return (
        <Container>
            <Row>
                {
                    loading ? <Spinner animation="grow" /> :
                        <Col xs={12}>
                            <h1 className="text-center mb-4">All Services</h1>
                            <h4 className="text-center mb-5 text-secondary">See all the available services here</h4>
                            <h2 className="text-center mb-5 ">Number of Services: {services?.length}</h2>

                            {
                                <Table responsive="sm">
                                    <thead>
                                        <tr>
                                            <th>index</th>
                                            <th>Service Name</th>
                                            <th>Price</th>
                                            <th>Delete</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {

                                            services?.map((service, index) => {

                                                return <tr key={service?._id}>
                                                    <td>{index}</td>
                                                    <td>{service?.serviceName}</td>
                                                    <td>{service?.servicePrice}</td>

                                                    <td>  <Button variant="danger" onClick={() => handleDelete(service?._id)} >Delete</Button>
                                                    </td>

                                                </tr>
                                            })
                                        }

                                    </tbody>
                                </Table>
                            }
                        </Col>
                }
            </Row>

        </Container >
    );
};

export default ManageServices;