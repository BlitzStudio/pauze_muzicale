import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

import AccountSvg from "../../../svgs/Account";
import FormSvg from "../../../svgs/Form";
import LogoutSvg from "../../../svgs/Logout";
import TuneSvg from "../../../svgs/Tune";
import HomeSvg from "../../../svgs/Home";

export default function nav() {
  // const NavLinkStyle = "flex items-center justify-center sm:justify-start";
  const NavLinkStyle = function ({ isActive, isPending }) {
    return isActive
      ? "flex items-center justify-center rounded-full bg-slate-300 p-1 sm:justify-start sm:rounded-e-md sm:hover:rounded-e-md sm:hover:bg-gray-200"
      : "flex items-center justify-center rounded-full p-1 sm:justify-start sm:rounded-e-md sm:hover:rounded-e-md sm:hover:bg-gray-200";
  };

  return (
    <nav className="fixed bottom-0 mt-2 bg-white p-1 shadow-inner   shadow-slate-300  sm:top-0 sm:mt-0 sm:h-screen sm:shadow-lg sm:shadow-slate-300">
      <ul className="flex w-screen items-center justify-around sm:h-[100vh] sm:w-48 sm:flex-col ">
        <div className="mb-8 hidden flex-col items-center  sm:flex sm:w-full">
          <NavLink to="/" className="text-xl font-bold">
            Pauze Muzicale
          </NavLink>
          <p className="text-slate-700">Dashboard</p>
        </div>
        <NavItem>
          <NavLink to="/dash" className={NavLinkStyle} end>
            <HomeSvg className="h-auto w-[32px]" />
            <p className="hidden sm:inline">Acasa</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="account" className={NavLinkStyle}>
            <AccountSvg className="h-auto w-[32px]" />
            <p className="hidden sm:inline">Cont</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="songs" className={NavLinkStyle}>
            <FormSvg className="h-auto w-[32px]" />
            <p className="hidden sm:inline">Recomanda melodii</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="config" className={NavLinkStyle}>
            <TuneSvg className="h-auto w-[32px]" />
            <p className="hidden sm:inline">Configurare</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="flex items-center justify-center rounded-full p-1 sm:justify-start sm:rounded-e-md sm:hover:rounded-e-md sm:hover:bg-gray-200">
            <LogoutSvg
              width="32px"
              height="32px"
              className="flex cursor-pointer items-center"
            >
              <p className="hidden sm:block">Deconectare</p>
            </LogoutSvg>
          </NavLink>
        </NavItem>
      </ul>
    </nav>
  );
}
