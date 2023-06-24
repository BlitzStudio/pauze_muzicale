import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";

const Home = function (props) {
  return (
    <>
      <Navbar />
      <Header />
    </>
  );
};
export default Home;
