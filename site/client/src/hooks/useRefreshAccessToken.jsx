import axios from "../api/axios";
import jwt from "jwt-decode";

export default function useRefreshAccessToken() {
  const refreshToken = async function () {
    const response = await axios
      .get("/refresh", {
        withCredentials: true,
      })
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
      });

    return { ...jwt(response), accessToken: response };
  };
  return refreshToken;
}
