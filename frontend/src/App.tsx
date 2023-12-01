import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import React from "react";

const router = createBrowserRouter([
    {
        element: <Header />,
        children: [
            {
                path: '/',
                element: <Dashboard/>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
])

function App() {
    return (
        <div className={'container'}>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
