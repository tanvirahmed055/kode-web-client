import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="container centered">
                <h1 className=" text-center  pt-5"></h1>

                <h3 className="text-center text-white mt-3"></h3>
                <h2 style={{ padding: '25px', textAlign: "center", color: 'white', fontWeight: 'bold' }}>

                </h2>
                <HashLink to="/home#topProjects">
                    <Button variant="info" size="lg" className="mt-4 text-white fw-bold">READ MORE</Button></HashLink>


                <Button variant="danger" size="lg" className="mt-4 text-white fw-bold ms-3" >Know More</Button>
                <br />
            </div>
        </div >
    );
};

export default Banner;