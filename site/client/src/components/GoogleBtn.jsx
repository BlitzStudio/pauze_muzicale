import { useEffect } from "react";
import { loginController } from "../api/auth";
const GoogleBtn = ({ setUser }) => {
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: import.meta.env["VITE_GOOGLE_ID"],
      //
      callback: (res) => {
        console.log(res);
        // console.log(res.credential);
        loginController(setUser, res.credential);
        console.log("Initiate API request");
      },
    });
    google.accounts.id.renderButton(document.getElementById("googleBtn"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  return <div id="googleBtn"></div>;
};

export default GoogleBtn;
