import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import AuthProviders from './providers/AuthProviders';
import Orders from './components/Orders';
import PrivateRoute from './routes/PrivateRoute';
import Profile from './components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute> 
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProviders>
     <RouterProvider router={router} />
     </AuthProviders>
  </React.StrictMode>,
)
