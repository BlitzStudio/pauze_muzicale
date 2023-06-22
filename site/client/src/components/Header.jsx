import React from "react";
import HeroImg from "../imgs/hero.jpg";

export default function Header() {
  return (
    <header className="gradientBgLight dark:gradientBgDark flex h-[200vh] flex-col pl-8 pt-56 dark:text-white md:flex-row">
      <div className="">
        <h1 className="font-Nunito text-6xl font-black ">
          <span>Recreere, Creativitate</span>
          <span className="text-5xl font-bold"> si</span>
          <br />
          <span className="font-DancingScript text-gold">Energie</span>
        </h1>
        <p className="my-2 max-w-lg text-lg">
          Pauzele sunt momente propice pentru recreere si creativite, astfel
          pentru cateva momente te poti bucura de melodiile tale preferate in
          timp ce te poti pregati pentru ora urmatoare.
        </p>
      </div>
      {/* <div>
        <svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h900v600H0z" fill="#fffff" />
          <path
            d="M636.718 152.864c28.7 40.2 23.5 102.6 10 151.5-13.6 49-35.6 84.3-64.2 122.8-28.7 38.5-64 80.2-102.1 82.9-38.1 2.7-78.9-33.5-123.9-72s-94.2-79.3-109.1-135.1c-15-55.7 4.3-126.4 49.3-166.6 45-40.2 115.7-49.8 182.3-45.7 66.6 4.2 129 22 157.7 62.2"
            fill="#BB004B"
          />
        </svg>
      </div> */}
    </header>
  );
}
