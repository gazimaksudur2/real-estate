import { createBrowserRouter }from 'react-router-dom'
import MainLayout from '../Pages/MainLayout/MainLayout';
import Facilities from '../Pages/Facilities/Facilities';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Authentication from '../Pages/Authentication/Authentication';
import NotFound from '../Pages/NotFound/NotFound';
import Profile from '../Pages/Profile/Profile';
import ViewProfile from '../Pages/ViewProfile/ViewProfile';
import UpdateProfile from '../Pages/UpdateProfile/UpdateProfile';
import Locations from '../Pages/Locations/Locations';
import Properties from '../Pages/Properties/Properties';

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
                path:'/properties',
                element: <Properties/>
            },
            {
                path:'/facilities',
                element: <Facilities/>,
            },
            {
                path:'/location',
                element: <Locations/>,
            }
        ]
    },
    {
        path: '/authenticate',
        element: <Authentication/>,
        errorElement: <NotFound/>,
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
    },
    {
        path: '/profile',
        element: <Profile/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/profile',
                element: <ViewProfile/>
            },
            {
                path: '/profile/update',
                element: <UpdateProfile/>
            }
        ]
    }
])

export default router;