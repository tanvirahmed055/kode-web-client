import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const ContactForm = () => {
    return (
        <div className="mx-auto my-5 border border-1 rounded border-secondary p-5" style={{ maxWidth: '80vw', maxHeight: '50vh' }}>
            <Form>
                <Row className="mb-3 ">


                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Control type="text" placeholder="name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="email" placeholder="email" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">

                    <Form.Control placeholder="home address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                    <Form.Control as="textarea" rows={3} placeholder="message" />
                </Form.Group>

                <Button variant="success px-4 py-2 " type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;