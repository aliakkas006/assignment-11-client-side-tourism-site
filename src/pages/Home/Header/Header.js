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
                            <Button onClick={logOut} variant="light">Sign out</Button>
                        ) : (
                                <Link to="/signin">
                                    <Button variant="light">Sign in</Button>
                                </Link>
                        )
                    }
                    
                </Container>
            </Navbar>

        </>
    );
};

export default Header;