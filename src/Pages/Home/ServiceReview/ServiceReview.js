import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import Rating from "react-rating";
import './ServiceReview.css';

const ServiceReview = (props) => {
    const { reviewerName, reviewerOccupation, reviewerImg, description, rating } = props.review;
    console.log(props?.review?.rating);


    return (
        <Col>
            <Card className="mt-2 mb-5 pb-5">
                <Card.Body>
                    <Card.Title className="fs-1 pb-3">{reviewerName}</Card.Title>
                    <div className="icons text-center mb-3">
                        <i className="fab fa-facebook-square fa-2x icon facebook-icon-color me-3"></i>
                        <i className="fab fa-twitter-square fa-2x icon twitter-icon-color me-3"></i>
                        <i className="fab fa-linkedin fa-2x icon linkedin-icon-color me-3"></i>

                    </div>
                    <Card.Text>
                        {reviewerOccupation}
                    </Card.Text>
                    <Rating initialRating={rating} emptySymbol="far fa-star star-icon-color fa-2x" fullSymbol="fas fa-star star-icon-color fa-2x" readonly className="pb-3"> </Rating>
                    <br />
                    <Card.Text className="text-center">
                        {description}
                    </Card.Text>

                </Card.Body>

                <Image src={reviewerImg} fluid className="rounded-circle mx-auto d-block pt-3 "
                    style={{ width: '90px', height: '150px', marginBottom: '-35%' }} />
            </Card>



        </Col>
    );
};

export default ServiceReview;