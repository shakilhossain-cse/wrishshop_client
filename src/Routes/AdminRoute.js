import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading,admin } = useAuth();
  if (isLoading) {
    return <h4 className="text-center my-5">Loading .......</h4>;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
