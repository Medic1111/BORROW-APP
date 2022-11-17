import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAuth }) => {

  if (!isAuth) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
};

export default ProtectedRoute;