import { Navigate, Outlet, Route } from "react-router-dom";
import React from "react";

const PrivateRoute: React.FC = () => {
  const islogin = localStorage.getItem("token") === "true";
  return islogin ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
