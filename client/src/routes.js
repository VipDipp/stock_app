import {BALANCE_ROUTE, MAIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from './utils/consts';
import Main from './pages/main';
import Balance from './pages/balance';
import Auth from './pages/auth';

export const authRoutes = [
    {
        path: BALANCE_ROUTE,
        Component: Balance
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    }
]