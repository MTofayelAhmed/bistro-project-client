import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/signUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Secret from "../Pages/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import AllUser from "../Pages/AllUser/AllUser";
import AddItem from "../Pages/DashBoard/Add Item/AddItem";
import AdminRoute from "../PrivateRoute/AdminRoute";



export   const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
      element: <Home></Home>
    },
    {
      path: 'menu',
      element: <Menu></Menu>
    },
    {path: 'order/:category',
    element: <Order></Order>},
    {
      path: 'login',
      element: <Login></Login>
    },
    {
      path: 'signUp',
      element: <SignUp></SignUp>
    }, 
    {
      path: 'secret',
      element: <PrivateRoute><Secret></Secret></PrivateRoute>
    }

    ]
  },
  {
    path: 'dashboard',
    element:<PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'myCart',
        element: <MyCart></MyCart>
      },
      {
        path: 'allUser',
        element: <AdminRoute><AllUser></AllUser></AdminRoute>
      },
      {
        path: 'addItem',
        element: <AdminRoute><AddItem></AddItem></AdminRoute>
      }
    ]
  },
  

  
]);