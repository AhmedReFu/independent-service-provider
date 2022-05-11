import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand className='fs-3' href="/#home">Food For Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            {
                                user ? <Nav.Link onClick={handleSignOut}>Log Out</Nav.Link>
                                    : <Nav.Link as={Link} to="/login">
                                        LogIn
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
};

export default Header;