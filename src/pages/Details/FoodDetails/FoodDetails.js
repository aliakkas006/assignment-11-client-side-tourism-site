import React from 'react';
import { useParams } from 'react-router';

const FoodDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>This is food details id: {id} </h2>
        </div>
    );
};

export default FoodDetails;