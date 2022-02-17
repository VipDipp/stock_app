import React, { useContext } from 'react';
import {Context} from '../index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { NavLink, useNavigate } from 'react-router-dom';
import { BALANCE_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import logo from '../assets/logo.png';
import AppRouter from './AppRouter';
import Image from 'react-bootstrap/Image';

const NavBar = observer(() => {
    const navigate = useNavigate();
    const {user} = useContext(Context);

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }
    return ( 
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={MAIN_ROUTE}>
                    <Image width={200} height={100} src={logo} />
                </NavLink>
                {user.isAuth ? 
                <Nav>
                    <Button 
                    variant={"outline-light"}
                    onClick={() => navigate(BALANCE_ROUTE)}
                    > 
                        Баланс 
                    </Button>

                    <Button
                    variant={"outline-light"}
                    onClick={() => logOut()}
                    >
                        Выйти
                    </Button>
                </Nav>
                :
                <Nav>
                    <Button 
                    variant={"outline-light"} 
                    onClick={() => navigate(LOGIN_ROUTE)}
                    > 
                        Войти 
                    </Button>
                </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;