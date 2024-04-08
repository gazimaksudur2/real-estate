import { createBrowserRouter }from 'react-router-dom'
import MainLayout from '../Pages/MainLayout/MainLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>
    }
])

export default router;