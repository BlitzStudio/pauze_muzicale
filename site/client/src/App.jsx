import { Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import Dash from "./routes/Dash";
import Home from "./routes/Home.jsx";
import NotFound from "./routes/404";

const App = function (props) {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="dash/*" element={<Dash />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default App;
