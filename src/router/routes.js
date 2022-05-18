import { Navigate } from 'react-router-dom';
import About from '../Components/About';
// Components
import Home from '../Components/Home';
import AppLayout from '../Components/Layouts/AppLayout';
import Login from '../Components/Login';


const routes = [
    {
        path: '/',
        component: <Navigate to="/game/home" />,
        requireAuth: true
    },
    {
        path: '/game/*',
        requireAuth: true,
        component: <AppLayout />,
        children: [
            {
                path: 'home',
                component: <Home />,
            },
            {
                path: 'about',
                component: <About />
            }
        ]
    },

    {
        path: '/login',
        component: <Login />,
        requireAuth: false
    }
];


export default routes;

