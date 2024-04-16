import { createBrowserRouter }from 'react-router-dom'
import MainLayout from '../Pages/MainLayout/MainLayout';
import Facilities from '../Pages/Facilities/Facilities';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Authentication from '../Pages/Authentication/Authentication';
import NotFound from '../Pages/NotFound/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <NotFound/>,
        children: [
            {
                path:'/',
                element: <Home/>,
            },
            {
                path:'/facilities',
                element: <Facilities/>,
            },
            {
                path:'/login',
                element: <Login/>,
            }
        ]
    },
    {
        path: '/authenticate',
        element: <Authentication/>,
        children: [
            {
                path: '/authenticate',
                element: <Login/>,
            },
            {
                path:'/authenticate/register',
                element: <Register/>,
            }
        ]
    }
])

export default router;