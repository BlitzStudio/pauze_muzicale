import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowBack from "../svgs/ArrowBack";
import GoogleBtn from "../components/GoogleBtn";

export default function Login() {
  return (
    <div className="bg-login1 flex min-h-screen flex-col items-center  justify-center bg-cover bg-center">
      <div
        className="items center m-2 flex h-[430px] max-w-[340px] flex-col 
      items-center  overflow-hidden rounded-lg  bg-white/20 text-center text-black backdrop-blur-md "
      >
        <ArrowBack className="m-1 h-auto w-[24px] self-start rounded-full fill-black hover:bg-black/20" />
        <div className="mb-32 mt-4">
          <h1 className="text-4xl font-bold">Login</h1>
          <p className="leading-tight  text-slate-800">
            Pentru a folosi acest serviciu v a trebui sa folosesti contul
            incredintat de catre scoala ta.
          </p>
        </div>

        <GoogleBtn />

        <Link className="pt-4" to="/dash">
          Dashboard(DevOnly)
        </Link>
      </div>
    </div>
  );
}
