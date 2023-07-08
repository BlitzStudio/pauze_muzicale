import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function isAuth() {
  const { user, isLoading } = useAuth();
  const isLoggedIn =
    localStorage.getItem("isLoggedIn") == "true" ? true : false;
  console.log(isLoggedIn);

  if (isLoading && isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex items-center justify-center text-2xl font-semibold text-richBlack">
          <svg
            className="ml-1 mr-3 h-auto w-10 animate-spin text-slate-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <p>Site is loading</p>
        </div>
      </div>
    );
  } else if (!isLoading && !isLoggedIn) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
}
