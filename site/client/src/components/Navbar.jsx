import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";
import useAuth from "../hooks/useAuth";

export default function NavBar() {
  const { user } = useAuth();
  const handelScroll = function (event) {
    const nav = document.querySelector("nav");

    if (window.scrollY > 20) {
      nav.classList.add("bgBlurMdLight", "dark:bgBlurMdDark");
    } else {
      nav.classList.remove("bgBlurMdLight", "dark:bgBlurMdDark");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);
  return (
    <nav className="fixed top-0 w-[100vw] bg-transparent px-2 py-2 font-Nunito text-lg text-black  dark:text-white">
      <div className="m-auto flex  items-center justify-between  p-1 md:max-w-[75vw]">
        <Link to="/">Pauze muzicale</Link>
        <ul className="flex items-center">
          <li className="mr-3">
            <ThemeToggler />
          </li>
          {/* <li className="mr-3 ">
            <Link to="/docs">Docs</Link>
          </li> */}
          {user ? (
            <li className="">
              <Link to="/dash">Account</Link>
            </li>
          ) : (
            <li className="">
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
