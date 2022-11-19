import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { validateToken } from "../utils/api";

const ProtectedRoute = ({ children, setIsAuth, isAuth, token }) => {
  useEffect(() => {
    validateToken(token, setIsAuth);
  }, []);

  if (!isAuth) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
};

export default ProtectedRoute;
