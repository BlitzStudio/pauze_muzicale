import { useEffect } from "react";
const GoogleBtn = () => {
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: import.meta.env["VITE_GOOGLE_ID"],
      //
      callback: (res) => {
        console.log(res);
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
