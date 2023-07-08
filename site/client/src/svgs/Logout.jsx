import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";

export default function FormSvg({ width, height, className, children }) {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  return (
    <div
      className={className}
      onClick={() => {
        axios
          .get("/logout", { withCredentials: true })
          .then((data) => {
            setUser({});
            localStorage.setItem("isLoggedIn", false);
            navigate("/login");
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      <svg
        viewBox="0 -960 960 960"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
      >
        <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621-612l43-43 176 176-174 174Z" />
      </svg>
      {children}
    </div>
  );
}
