import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner";

export default function isAuth() {
  const { user, isLoading } = useAuth();
  const isLoggedIn =
    localStorage.getItem("isLoggedIn") == "true" ? true : false;

  if (isLoading && isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center dark:bg-[#001D3D] dark:text-white">
        <Spinner />
        <p className="text-xl font-semibold">Site is loading</p>
      </div>
    );
  } else if (!isLoading && !isLoggedIn) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
}
