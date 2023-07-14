import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function isAdmin() {
  const { user, isLoading } = useAuth();

  if (!isLoading) {
    return user?.role == "admin" ? <Outlet /> : <Navigate to="/dash" />;
  }
}
