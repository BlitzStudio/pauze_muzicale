import React from "react";

export default function Header() {
  return (
    <header className="gradientBgLight dark:gradientBgDark flex h-[100vh] flex-col pl-4 pt-56 dark:text-white md:flex-row">
      <div className="">
        <h1 className=" text-6xl font-black ">
          <div>
            <span>Recreere, Creativitate</span>
            <span className="text-5xl font-bold"> si</span>
          </div>
          <span className="font-DancingScript text-gold">Energie</span>
        </h1>
        <p className="my-2 max-w-lg text-lg">
          Pauzele sunt momente propice pentru recreere si creativite, astfel
          pentru cateva momente te poti bucura de melodiile tale preferate in
          timp ce te poti pregati pentru ora urmatoare.
        </p>
      </div>
    </header>
  );
}
