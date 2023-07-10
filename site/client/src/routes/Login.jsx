import React from "react";
import { Link } from "react-router-dom";
import ArrowBack from "../svgs/ArrowBack";
import GoogleBtn from "../components/GoogleBtn";

export default function Login() {
  return (
    <div className="gradientBgLight dark:gradientBgDark flex min-h-screen flex-col items-center  justify-center bg-cover bg-center">
      <div
        className="items center m-2 flex h-[430px] max-w-[340px] flex-col 
      items-center  overflow-hidden rounded-lg  bg-white/20 p-4 text-center text-black backdrop-blur-md"
      >
        <ArrowBack className="m-1 h-auto w-[24px] self-start rounded-full fill-black hover:bg-black/20 dark:fill-white" />
        <div className="mb-32 mt-4">
          <h1 className="mb-2 text-5xl font-bold text-[#3a0ca3] dark:text-white">
            Login
          </h1>
          <p className="font-semibold leading-tight text-[#3a0ca3]/80  dark:text-white">
            Pentru a folosi acest serviciu v a trebui sa folosesti contul
            incredintat de catre scoala ta.
          </p>
        </div>

        <GoogleBtn />
      </div>
    </div>
  );
}
