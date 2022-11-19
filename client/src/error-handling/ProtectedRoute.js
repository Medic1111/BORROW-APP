import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { validateToken } from "../utils/api";

const ProtectedRoute = ({ children, setIsAuth, isAuth, token }) => {
  useEffect(()=>{
    validateToken(token)
      .then((serverRes) => {
        if (serverRes.response.status === 401){
          console.log(serverRes.response.data.message)
          return setIsAuth(false)
          // return <Navigate to={"/login"} replace />;
        }
        setIsAuth(true)
      })
  }, [])

  // if (!isAuth) {
  //   return <Navigate to={"/login"} replace />;
  // }

  return children;
};

export default ProtectedRoute;