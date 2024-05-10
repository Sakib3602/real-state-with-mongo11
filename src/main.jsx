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
import toast, { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
