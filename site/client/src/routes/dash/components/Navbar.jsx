import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import useAuth from "../../../hooks/useAuth";

import ThemeToggler from "../../../components/ThemeToggler";
import AccountSvg from "../../../svgs/Account";
import FormSvg from "../../../svgs/Form";
import LogoutSvg from "../../../svgs/Logout";
import TuneSvg from "../../../svgs/Tune";
import HomeSvg from "../../../svgs/Home";

export default function nav() {
  const { user } = useAuth();
  const NavLinkStyle = function ({ isActive, isPending }) {
    return isActive
      ? "flex items-center justify-center rounded-full bg-gray-300 dark:bg-[#003D7D]  p-1 sm:justify-start sm:rounded-e-md sm:bg-gray-300 sm:hover:rounded-e-md "
      : "flex items-center justify-center rounded-full p-1 sm:justify-start sm:rounded-e-md sm:hover:bg-slate-200  dark:sm:hover:bg-[#002D5D] sm:hover:rounded-e-md";
  };

  return (
    <nav className="fixed bottom-0 mt-2 bg-white  p-1 drop-shadow-[0px_-3px_10px_rgba(0,0,0,0.25)] dark:bg-oxfordBlue dark:text-white dark:drop-shadow-[0px_-3px_10px_rgba(20,40,77)] sm:top-0 sm:mt-0 sm:h-screen sm:drop-shadow-[6px_0px_10px_rgba(0,0,0,0.25)] sm:dark:drop-shadow-[0px_-3px_10px_rgba(20,40,77)]">
      <ul className="flex w-screen items-center justify-around  sm:h-[100vh] sm:w-52 sm:flex-col ">
        <div className="mb-8 hidden flex-col items-center  sm:flex sm:w-full">
          <NavLink to="/" className="text-xl font-bold ">
            Pauze Muzicale
          </NavLink>
          <p className="text-slate-600 dark:text-slate-200">Dashboard</p>
        </div>
        <NavItem>
          <NavLink to="/dash" className={NavLinkStyle} end>
            <HomeSvg className="h-auto w-[32px] " />
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
        {user?.role == "admin" && (
          <NavItem>
            <NavLink to="config" className={NavLinkStyle}>
              <TuneSvg className="h-auto w-[32px]" />
              <p className="hidden sm:inline">Configurare</p>
            </NavLink>
          </NavItem>
        )}
        <NavItem>
          <div className="flex items-center justify-center rounded-full p-1 sm:justify-start">
            <LogoutSvg
              width="32px"
              height="32px"
              className="flex cursor-pointer items-center"
            >
              <p className="hidden sm:block">Deconectare</p>
            </LogoutSvg>
            <ThemeToggler height="24px" />
          </div>
        </NavItem>
      </ul>
    </nav>
  );
}
