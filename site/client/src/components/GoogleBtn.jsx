import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../api/axios";
import jwt from "jwt-decode";
import useAuth from "../hooks/useAuth";

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
        setUser({ ...userData, accessToken: response.data });
        localStorage.setItem("isLoggedIn", true);
        navigate("/dash");
      })
      .catch((err) => {
        const { data, status } = err.response;
        switch (status) {
          case 401:
            toast.warn("Acesta nu este un cont autorizat.", {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "light",
            });
            break;
          case 500:
            toast.error(
              "Nu am putut valida credibilitatea datelor de la Google. Reincearca !",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
              }
            );
            break;
          default:
            toast.error(`Status: ${status} Err: ${data}`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            break;
        }
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
