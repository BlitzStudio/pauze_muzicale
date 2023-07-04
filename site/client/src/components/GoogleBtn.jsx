import axios from "../api/axios";
import jwt from "jwt-decode";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleBtn = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async function (res) {
    const { credential } = res;
    axios
      .post(
        "/login",
        {
          credential: credential,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        const userData = jwt(response.data);
        setUser(userData);
        navigate("/dash");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: import.meta.env["VITE_GOOGLE_ID"],
      callback: handleSubmit,
    });
    google.accounts.id.renderButton(document.getElementById("googleBtn"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  return <div id="googleBtn"></div>;
};

export default GoogleBtn;
