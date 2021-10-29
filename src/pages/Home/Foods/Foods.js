import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Foods = ({ food }) => {
    const { _id, name, img, description, price } = food;

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
                    <Link to={`/details/${_id}`}>
                        <Button variant="primary">Buy now!</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Foods;