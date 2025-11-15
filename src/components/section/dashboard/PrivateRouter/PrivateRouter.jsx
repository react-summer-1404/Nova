import React from "react";
import { getToken } from "../../../../hooks/localStorage";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const token = getToken();

  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRouter;
