

import { Navigate, Outlet, Route } from "react-router-dom";
import React from "react";
import InsideLogin from "./insideLogin";

const PrivateRoute: React.FC = () => {
    const islogin = localStorage.getItem('islogin') === 'true';
    return islogin ? <Outlet /> : <Navigate to="/signin" replace />;
}; 


export default PrivateRoute;