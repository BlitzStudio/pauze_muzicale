import React from "react";
import AccountSvg from "../../svgs/Account";
import FormSvg from "../../svgs/Form";
import ArrowBackSvg from "../../svgs/ArrowBack";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

export default function nav() {
  const NavLinkStyle = "flex items-center justify-center sm:justify-start";

  return (
    <nav className="fixed bottom-0 mt-2 bg-white p-1 shadow-inner shadow-slate-300 drop-shadow-lg sm:top-0 sm:mt-0 sm:h-screen sm:shadow-md  ">
      <ul className="flex w-screen items-center justify-around sm:h-[100vh] sm:w-44 sm:flex-col ">
        <div className="mb-8 hidden flex-col items-center  sm:flex sm:w-full">
          <Link to="/" className="text-xl font-bold">
            Pauze Muzicale
          </Link>
          <p className="text-slate-700">Dashboard</p>
        </div>
        <NavItem>
          <Link className={NavLinkStyle}>
            <AccountSvg className="h-auto w-[32px]" />
            <p className="hidden sm:inline">Account</p>
          </Link>
        </NavItem>
        <NavItem>
          <Link className={NavLinkStyle}>
            <FormSvg className="h-auto w-[32px]" />
            <p className="hidden sm:inline">Add new song</p>
          </Link>
        </NavItem>
        <NavItem>
          <ArrowBackSvg
            width="32px"
            height="32px"
            className="flex cursor-pointer items-center"
          >
            <p className="hidden sm:block">Go back</p>
          </ArrowBackSvg>
        </NavItem>
      </ul>
    </nav>
  );
}
