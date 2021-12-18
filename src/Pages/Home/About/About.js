import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const About = () => {
    return (
        <>
            <Header></Header>
            <div className="card my-5 mx-auto" style={{ maxWidth: '80vw', maxHeight: '50vh' }}>
                <div className="row g-0">

                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title fw-bold">Work With Our Experts</h4>

                            <p className="card-text text-secondary">Our skilled experts can help you meet your dream goals. They can make your ideas into reality. Our expert workers are recognized and certified by renowed accredited software organizations.</p>
                            <p className="card-text text-secondary">Our expert software engineers have experience working with thousands of clients who have meet their business goals. You will be constanty get updated by our trainers so that they can track your projects progress and give you feedback on your journey and guide you in every step that you will be taking towards your business goal.</p>
                        </div>
                    </div>
                    <div className="col-md-4 ">

                        <img src="https://artoftesting.com/wp-content/uploads/2020/01/software-engineering-featured-1280x720.jpg" className="img-fluid rounded-start h-100" alt="..." />

                    </div>

                </div>
            </div>


        </>
    );
};

export default About;






{/* <div>
                <div className="card my-5 mx-auto" style={{ maxWidth: '80vw', maxHeight: '50vh' }}>
                    <div className="row g-0">

                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title fw-bold">Work With Our Experts</h4>

                                <p className="card-text text-secondary">Our skilled experts can help you meet your dream goals. They can make your ideas into reality. Our expert workers are recognized and certified by renowed accredited software organizations.</p>
                                <p className="card-text text-secondary">Our expert software engineers have experience working with thousands of clients who have meet their business goals. You will be constanty get updated by our trainers so that they can track your projects progress and give you feedback on your journey and guide you in every step that you will be taking towards your business goal.</p>
                            </div>
                        </div>
                        <div className="col-md-4 ">

                            <img src="https://www.mensjournal.com/wp-content/uploads/mf/_main2_trainer2.jpg?w=900&h=506&crop=1&quality=86&strip=all" className="img-fluid rounded-start h-100" alt="..." />

                        </div>

                    </div>
                </div> */}