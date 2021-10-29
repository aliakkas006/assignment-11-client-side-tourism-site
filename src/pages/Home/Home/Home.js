import React from 'react';
import Banner from '../Banner/Banner';
import DeliveryMan from '../DeliveryMan/DeliveryMan';
import DeliveryMessage from '../DeliveryMessage/DeliveryMessage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Services />
            <DeliveryMan />
            <DeliveryMessage />
            <Footer />
        </div>
    );
};

export default Home;