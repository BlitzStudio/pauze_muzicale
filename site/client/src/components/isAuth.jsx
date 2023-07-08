import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

export default function isAuth() {
  const { user, isLoading } = useAuth();
  console.log(user);
  console.log(isLoading);
  return (
    <div>
      {isLoading && <div>Loading</div>}
      {!isLoading && <Outlet />}
    </div>
  );
}
