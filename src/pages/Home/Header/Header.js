import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            {/* Navigation bar */}
            <Navbar className="sticky-top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink
                            to="/home"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Home
                        </NavLink>
                    </Nav>

                    {
                        user?.email ? (
                            <>
                                <NavLink className="me-3"
                                    to="/order"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    My Orders
                                </NavLink>
                                <NavLink className="me-3"
                                    to="/allOrder"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Mange all Orders
                                </NavLink>
                                <NavLink className="me-3"
                                    to="/addService"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Add new Service
                                </NavLink>
                                <Button onClick={logOut} variant="light">Sign out</Button>
                            </>
                            
                        ) : (
                                <Link to="/signin">
                                    <Button variant="light">Sign in</Button>
                                </Link>
                        )
                    }

                    <p className="text-light ms-3">Signed as: <span className="text-info">{user.displayName}</span> </p>

                </Container>
            </Navbar>

            

        </>
    );
};

export default Header;