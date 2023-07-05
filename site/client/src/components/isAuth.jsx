import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function isAuth() {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" />;
}
