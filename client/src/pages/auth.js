import { observer } from 'mobx-react-lite';
import React, {useContext, useState} from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { NavLink, useLocation } from 'react-router-dom';
import { Context } from '../index';
import { login } from '../http/userAPI';
import { registration } from '../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        let data;
        if (isLogin) {
            data = await login(email, password);
        } else {
            data = await registration(email, password);
        }
        user.setUser(user);
        user.setIsAuth(true);
    }

    return ( 
        <div>
            <Container 
                className='d-flex justify-content-center align-items-center'
                style={{height: window.innerHeight - 54}}
            >
                <Card style={{width: 600}} className='p-5'>
                    <h2 className='m-auto'> {isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                    <Form className='d-flex flex-column'>
                        <Form.Control 
                            className='mt-3'
                            placeholder='Введите ваш e-mail...' 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Control 
                            className='mt-3'
                            placeholder='Введите ваш пароль...' 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type='password'
                        />
                        <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                            {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                            }
                            <Button  
                                className='align-self-end'
                                variant={'outline-success'}
                                onClick={click}
                            >
                                {isLogin ? 'Войти' : 'Зарегестрироваться'} 
                            </Button>
                        </Row>
                    </Form>
                </Card>
            </Container>
        </div>
    );
});

export default Auth;