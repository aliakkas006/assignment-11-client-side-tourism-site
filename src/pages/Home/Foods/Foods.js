import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const Foods = ({ food }) => {
    const { name, img, description, price } = food;

    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    <Card.Text>
                        {description}
                        <br />
                        Price: ${price}
                    </Card.Text>
                    <Button variant="primary">Buy now!</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Foods;