import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const DeliveryMan = () => {
    const [deliveryMan, setDeliveryMan] = useState([]);

    useEffect(() => {
        axios.get('https://guarded-hollows-00315.herokuapp.com/delivery')
            .then(res => setDeliveryMan(res.data));
    }, []);

    return (
        <Container>
            <h2 className="text-center my-3">Our Delivery Men</h2>
            <Row xs={1} md={3} className="g-4 mb-5">
                {
                    deliveryMan.map(dm => <Col key={dm._id}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={dm.img} />
                            <Card.Body>
                                <Card.Title> {dm.name} </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default DeliveryMan;