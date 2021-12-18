import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import ServiceReview from '../ServiceReview/ServiceReview';
import './ServiceReviews.css';


const ServiceReviews = () => {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);




    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const url = 'https://sheltered-sea-63278.herokuapp.com/reviews';
        fetch(url, { signal: signal })
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(false);

            })
        return function cleanup() {
            abortController.abort();
        }

    }, [])


    return (
        <div className="container mt-5 mb-5 pb-5 pt-3" id="reviews">
            <h1 className="text-center mb-4 fst-italic"> Clients Words</h1>
            <h4 className="text-center mb-3 text-secondary pb-5 fst-italic">This is what our Client's say about us.</h4>
            <Row xs={1} md={3} className="g-4">
                {

                    reviews?.map(review => <ServiceReview key={review?._id} review={review}></ServiceReview>)

                }
            </Row>
        </div>
    );
};

export default ServiceReviews;