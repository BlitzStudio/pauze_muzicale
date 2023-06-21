import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";

const App = function (props) {
  return (
    <>
      <Navbar />
      <Header />
    </>
  );
};
export default App;
