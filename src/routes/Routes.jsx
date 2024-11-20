// src/routes/Routes.jsx
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import LetsLearn from '../pages/Learn/LetsLearn';
import LessonDetails from '../pages/Learn/LessonDetails';
import Tutorials from '../pages/Tutorials';
import Profile from '../pages/Profile/Profile';
import UpdateProfile from '../pages/Profile/UpdateProfile';
import AboutUs from '../pages/AboutUs';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            // Auth Routes
            {
                path: 'auth',
                children: [
                    {
                        path: 'login',
                        element: <Login />
                    },
                    {
                        path: 'register',
                        element: <Register />
                    },
                    {
                        path: 'forgot-password',
                        element: <ForgotPassword />
                    }
                ]
            },
            // Learning Routes
            {
                path: 'start-learning',
                element: <LetsLearn />
            },
            {
                path: 'lesson/:lessonNo',
                element: (
                    
                        <LessonDetails />
                    
                )
            },
            // Tutorial Routes
            {
                path: 'tutorials',
                element: (
                    
                        <Tutorials />
                
                )
            },
            // Profile Routes
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        element: (
                            
                                <Profile />
                            
                        )
                    },
                    {
                        path: 'update',
                        element: (
                            
                                <UpdateProfile />
                            
                        )
                    }
                ]
            },
            {
                path: 'about-us',
                element: <AboutUs />
            }
        ]
    }
]);

export default router;