import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import Technology from '../Technology/Technology';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Technology></Technology>
            <Footer></Footer>
        </div>
    );
};

export default Home;