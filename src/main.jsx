import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Home from './component/Home/Home';
import AuthProvider from './component/AuthProvider';
import Login from './component/Authentication/Login';
import Registration from './component/Authentication/Registration';
import Rooms from './component/Authentication/Pages/Rooms';
import MyBookings from './component/Authentication/Pages/MyBookings';
import Error from './component/Error';
import Details from './component/Authentication/Pages/Details';
import About from './component/Authentication/Pages/About';
import PrivateRoute from './component/Authentication/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/reg',
        element: <Registration></Registration>,
      },
      {
        path: '/rooms',
        element: <Rooms></Rooms>,
      },
      {
        path: '/myBookings',
        element: <PrivateRoute>
          <MyBookings></MyBookings>
        </PrivateRoute>
        ,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/detail/:id',
        element: <Details></Details>,
        // loader : ({params})=> fetch(`http://localhost:4000/homeCard`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

    <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)
