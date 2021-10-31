import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className="bg-dark p-5">
                <Container>
                    <div className="row">

                        <div className="col-md-4 text-light">
                            <h4>Home delivery services</h4>
                        </div>

                        <div className="col-md-4 text-light">
                            <h4>Contact us</h4>
                        </div>

                        <div className="col-md-4 text-light">
                            <h4>Follow us on:</h4>
                            <h5>
                                <i class="fab fa-facebook ms-3"></i>
                                <i class="fab fa-instagram ms-3"></i>
                                <i class="fab fa-twitter ms-3"></i>
                                <i class="fab fa-youtube ms-3"></i>
                            </h5>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Footer;