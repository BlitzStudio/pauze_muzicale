import React from "react";
import { Link } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";

export default function NavBar() {
  return (
    <nav className="bg-[#f5f5f5] px-2 py-2 font-Nunito text-lg text-black dark:bg-oxfordBlue dark:text-white ">
      <div className="m-auto flex  items-center justify-between  p-1 md:max-w-[75vw]">
        <Link to="/">Pauze muzicale</Link>
        <ul className="flex items-center">
          <li className="mr-3">
            <ThemeToggler />
          </li>
          <li className="mr-3 ">
            <Link to="/docs">Docs</Link>
          </li>
          <li className="">
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
