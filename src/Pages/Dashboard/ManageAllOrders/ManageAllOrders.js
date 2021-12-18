import React, { useState, useEffect } from 'react';
import { Button, Table, Row, Col, Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const url = `https://sheltered-sea-63278.herokuapp.com/allOrders`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                //console.log(orders)
                setLoading(false);
            })
    }, [orders])

    const handleDelete = id => {
        //console.log(id);

        const confirmation = window.confirm("Are you sure you want to delete your order?");

        if (confirmation) {
            fetch(`https://sheltered-sea-63278.herokuapp.com/deleteOrder/${id}`, {
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

    const handleUpdate = id => {
        const url = 'https://sheltered-sea-63278.herokuapp.com/updateStatus';

        const orderInfo = {
            orderId: id
        }

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderInfo),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <Container>
            <Row>
                {
                    loading ? <Spinner animation="grow" /> :
                        <Col xs={12}>
                            <h1 className="text-center mb-4">All Orders</h1>
                            <h4 className="text-center mb-5 text-secondary">See all orders here</h4>
                            <h2 className="text-center mb-5 ">Number of Orders: {orders?.length}</h2>

                            {
                                <Table responsive="sm">
                                    <thead>
                                        <tr>
                                            <th>index</th>
                                            <th>Service Name</th>
                                            <th>Price</th>
                                            <th>Email</th>
                                            <th>Status</th>
                                            <th>Delete</th>
                                            <th>Update</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {

                                            orders?.map((order, index) => {

                                                return <tr key={order?._id}>
                                                    <td>{index}</td>
                                                    <td>{order?.serviceName}</td>
                                                    <td>{order?.servicePrice}</td>

                                                    <td>{order?.email}</td>

                                                    <td>{order?.status}</td>
                                                    <td>  <Button variant="danger" onClick={() => handleDelete(order?._id)} >Delete</Button>
                                                    </td>

                                                    <td><Button variant="success" onClick={() => handleUpdate(order?._id)} >Update</Button>
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

export default ManageAllOrders;