import React from 'react';
import './Team.css';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Team = () => {
    return (
        <>
            <Header></Header>
            <h1>Our Team</h1>
            <p>We have expert certified professionals to run our premium services </p>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto mt-3 mb-5" style={{ maxWidth: '80vw', maxHeight: '50vh' }}>

                <div className="col">
                    <div className="card h-100 border border-secondary">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQB9PyYvk2_Av619WnPllVkf8Rs81GgUjitnJHOJ-7ieVXYXNlw9-KzzAThbpVROyZ7E&usqp=CAU" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Steve Clark</h5>
                            <p className="card-text">CEO
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border border-secondary">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxswmpoiQChK1ixsS5JYHhFfcfKtZHRhGJf9ZmZF3cEQkr5LkRS1CNJH_sjWMKKzbfllI&usqp=CAU" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Zung Ming</h5>
                            <p className="card-text">CTO</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border border-secondary">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5Pap9XlO-MP8DkLd7tfdUkIpfrS4Xc0hTrMIHe8JD4iSdZRNMO_rxSdVtkyIqLtyYu8&usqp=CAU" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Russel Arnold</h5>
                            <p className="card-text">Tech Lead</p>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Team;