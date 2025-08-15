

import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import AuthLayout from "shared/layouts/AuthLayout";
import MainLayout from "shared/layouts/MainLayout";


const LoginPage = lazy(() => import("features/auth/Login") );
const Dashboard = lazy(() => import("features/dashboard/Dashboard") );



export const router = createBrowserRouter([
    {
        path:'auth',
        Component:AuthLayout,
        children:[
            {
                path:"login",
                index:true, Component:LoginPage
            }
        ]
    },
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                index:true, Component:Dashboard,
            }
        ]
    },
])