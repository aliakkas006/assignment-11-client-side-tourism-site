import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className="bg-dark p-5">
                <Container>
                    <div className="row">

                        <div className="col-md-4 text-light">
                            <h2>Home delivery services</h2>
                        </div>

                        <div className="col-md-4 text-light">
                            <h2>Contact us</h2>
                        </div>

                        <div className="col-md-4 text-light">
                            <h2>Social media links</h2>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Footer;