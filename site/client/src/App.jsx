import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Login from "./routes/Login";
import Dash from "./routes/dash/index";
import Home from "./routes/Home.jsx";
import NotFound from "./routes/404";
import IsAuth from "./components/isAuth";

import useAuth from "./hooks/useAuth";
import useRefreshAccessToken from "./hooks/useRefreshAccessToken";

const App = function (props) {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />

        <Route path="dash/*" element={<Dash />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
};
export default App;
