import { useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axios";
import jwt from "jwt-decode";

export default function useRefreshAccessToken() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const refreshToken = async function () {
    const response = await axios
      .get("/refresh", {
        withCredentials: true,
      })
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
        localStorage.setItem("isLoggedIn", false);
        if (location.pathname != "/") {
          navigate("/login");
        }
      });

    return { ...jwt(response), accessToken: response };
  };
  return refreshToken;
}
