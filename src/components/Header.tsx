import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Alert, Button, Collapse, Modal, ModalBody, ModalHeader, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import SignUp from '../routes/SignUp';
import Login from '../routes/Login';

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(true);

    const toggleLogin = () => {
        setIsLoginOpen(!isLoginOpen);
    };

    const onDismiss = () => setVisible(!visible);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <Alert color="success" isOpen={visible} toggle={onDismiss} style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
                Account created successfully! Please check your email for verification.
            </Alert>
            <Navbar dark expand="md">
                <NavbarBrand className="mr-auto col-3" href="/">
                    <img src="src/assets/images/wisc-logo.png" style={{ height: '20%', width: '20%' }} alt="Badger's Market" />
                    Badger's Market
                </NavbarBrand>
                <NavbarToggler onClick={toggleNav} />
                <Collapse isOpen={isNavOpen} navbar>
                    <Nav navbar >
                        <NavItem className='m-1 me-5'>
                            <NavLink className='nav-link' to="/">
                                <span className="fa fa-home fa-lg"></span>Home
                            </NavLink>
                        </NavItem>
                        <NavItem className='m-1 me-5'>
                            <NavLink className='nav-link' to="/post">
                                <span className="fa fa-plus fa-lg"></span>Post Ad
                            </NavLink>
                        </NavItem>
                        <NavItem className='m-1 me-5'>
                            <NavLink className='nav-link' to="/dashboard">
                                <span className="fa fa-dashboard fa-lg"></span>Dashboard
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Nav className="m-1 ml-auto" navbar>
                    <NavItem className='m-1 me-5'>
                        <Button
                            style={{ backgroundColor: 'white', color: '#c5050c', width: 'fit-content' }}
                            size="lg"
                            onClick={toggleModal}
                        >
                            <span className="fa fa-sign-in fa-lg w-auto m-1"></span>Login/SignUp
                        </Button>
                    </NavItem>
                </Nav>
            </Navbar>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>{isLoginOpen ? 'Login' : 'Sign Up'}</ModalHeader>
                <ModalBody>
                    {isLoginOpen ? (
                        <Login toggle={toggleModal} />
                    ) : (
                        <SignUp toggle={toggleModal} toggleAlert={onDismiss} />
                    )}
                    <Button color="link" onClick={toggleLogin} style={{ width: '100%' }}>
                        {isLoginOpen ? 'Create an Account' : 'Already have an Account? Login'}
                    </Button>
                </ModalBody>
            </Modal>
        </div>
    )
}