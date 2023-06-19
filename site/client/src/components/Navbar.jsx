import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="  bg-[#f5f5f5] px-2 py-2 font-Nunito text-lg text-black ">
      <div className="m-auto  flex items-center  justify-between md:max-w-[75vw]">
        <Link to="/">Pauze muzicale</Link>
        <ul className="">
          <li className="mr-2 inline-block">
            <Link to="/docs">Docs</Link>
          </li>
          <li className="inline-block rounded border-2 border-solid border-black px-1 py-1">
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
