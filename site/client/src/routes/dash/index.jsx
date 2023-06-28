import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Nav from "./components/Navbar";
import Account from "./Account";
import SongForm from "./SongForm";
import Config from "./Config";

export default function Dash() {
  return (
    <>
      <main>
        <Nav />
        <Outlet />
      </main>
      <Routes>
        <Route path="account" element={<Account />} />
        <Route path="songs" element={<SongForm />} />
        <Route path="config" element={<Config />} />
        <Route
          path=""
          element={
            <div className="flex h-screen items-center justify-center text-2xl font-bold text-gray-500 sm:ml-44">
              Welcome back
            </div>
          }
        />
      </Routes>
    </>
  );
}