import React from "react";
import { Navigate , Route } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ component: Component, ...restOfProps }) {

  const isAuth = useSelector((state) => state.auth.isAuthenticated)
  console.log("this", isAuth);
 

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Navigate  to="/login" />
      }
    />
  );
}

export default ProtectedRoute;