import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import ContactForm from "../ContactForm/ContactForm";
import './Contact.css';

const Contact = () => {
    return (
        <>
            <Header></Header>
            <div className="my-5">
                <h1 className="fw-bold">Get in touch</h1>

                <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us...</p>

                <hr className="horizontal-line" />
                <ContactForm></ContactForm>

            </div>
            <Footer></Footer>
        </>

    );
};

export default Contact;