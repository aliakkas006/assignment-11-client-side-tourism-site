import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const DeliveryMessage = () => {
    return (
        <Container>
            <h2 className="text-center my-3">This is our Delivery Testimonials</h2>

            <Row xs={1} md={3} className="g-4 mb-5">
                <Col>
                    <h3>TESTIMONIALS</h3>
                    <p>"I recently switched my online meal ordering platform from a big company that was taking 13% of every order to your free online ordering platform. I am VERY PLEASED with your service —the ease of setup, functionality, multiple delivery zone, visually appealing layout and format all for a GENUINELY FREE COST.Your customer service has been stellar via chat/email despite no phone option. I was initially concerned your international location could be an issue but you have delivered excellent, prompt and understandable customer service via chat every time."</p>
                    <p>--- GloriaFood review by Julie JULIE P.Restaurant Owner | Sandwich, MA, USA Sandwich Pizza House</p>
                </Col>
                <Col>
                    <img src="https://i.ibb.co/HTQDnxb/delivery-man-wearing-blue-gloves-red-jacket-searching-customer-address-by-mobile-phone-43157-1214.jpg" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default DeliveryMessage;