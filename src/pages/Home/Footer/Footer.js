import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className="bg-dark p-5">
                <Container>
                    <div className="row">

                        <div className="col-md-4 text-light">
                            <h4>Home delivery services:</h4>
                            <ul>
                                <li>Home delivery</li>
                                <li>Business Services</li>
                                <li>Shop Delivery</li>
                                <li>Personal Services</li>
                            </ul>
                        </div>

                        <div className="col-md-4 text-light">
                            <h4>Contact with us:</h4>
                            <p>Email: fast@food.com</p>
                            <p><i class="fas fa-phone"></i> +88017273267</p>
                        </div>

                        <div className="col-md-4 text-light">
                            <h4>Follow us on:</h4>
                            <h5 className="text-danger">
                                <i className="fab fa-facebook ms-3"></i>
                                <i className="fab fa-instagram ms-3"></i>
                                <i className="fab fa-twitter ms-3"></i>
                                <i className="fab fa-youtube ms-3"></i>
                            </h5>
                        </div>
                    </div>
                    <p className="text-light text-center"><span>fast food delivery <i class="far fa-copyright"></i> copyright 2021. All rights reserved</span></p>
                </Container>
            </div>
        </div>
    );
};

export default Footer;