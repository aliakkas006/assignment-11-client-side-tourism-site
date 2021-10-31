
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Foods from '../Foods/Foods';

const Services = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axios.get('https://guarded-hollows-00315.herokuapp.com/foods')
            .then(res => setFoods(res.data));
    }, []);

    return (
        <Container>
            <h2 className="text-center my-3 text-info">Our Foods</h2>
            <Row xs={1} md={3} className="g-4 mb-5">
                {
                    foods.map(food => <Foods
                        key={food._id}
                        food={food}
                    />)
                }
            </Row>
        </Container>
    );
};

export default Services;