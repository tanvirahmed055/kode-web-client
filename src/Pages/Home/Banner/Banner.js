import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="container centered">
                <h2 className="text-center pt-5 text-bold fst-italic pb-2">WEB DEVELOPMENT AGENCY</h2>

                <p className="text-bold fst-italic">KodeWeb is a web development agency. Our experienced<br /> Our experienced web designers, UX/UI specialists, web <br />developers, SEOs, digital marketers specialize in making premium <br />website. We will deliver you the best technical solutions to achieve <br />your company's targets in best way possible.</p>






                <HashLink to="">
                    <Button variant="info" size="lg" className=" text-white fw-bold fst-italic ps-5 pe-5" style={{ borderRadius: '32px' }}>HIRE US</Button></HashLink>



            </div>
        </div >
    );
};

export default Banner;