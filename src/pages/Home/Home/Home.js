import React from 'react';
import Banner from '../Banner/Banner';
import DeliveryMan from '../DeliveryMan/DeliveryMan';
import DeliveryMessage from '../DeliveryMessage/DeliveryMessage';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <DeliveryMan />
            <DeliveryMessage />
        </>
    );
};

export default Home;