import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import jwt from "jwt-decode";

export default function useRefreshAccessToken() {
  const navigate = useNavigate();
  const refreshToken = async function () {
    const response = await axios
      .get("/refresh", {
        withCredentials: true,
      })
      .then((response) => response.data)
      .catch((err) => {
        localStorage.setItem("isLoggedIn", false);
        navigate("/login");
      });

    return { ...jwt(response), accessToken: response };
  };
  return refreshToken;
}
