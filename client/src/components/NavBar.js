import React, { useContext } from 'react';
import {Context} from '../index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { MAIN_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import logo from '../assets/logo.png';
import AppRouter from './AppRouter';
import Image from 'react-bootstrap/Image';

const NavBar = observer(() => {
    const {user} = useContext(Context);
    return ( 
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={MAIN_ROUTE}>
                    <Image width={200} height={100} src={logo} />
                </NavLink>
                {user.isAuth ? 
                <Nav className="ml-15">
                    <Button> Баланс </Button>
                </Nav>
                :
                <Nav className="ml-15">
                    <Button variant={"outline-light"}> Авторизация </Button>
                </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;