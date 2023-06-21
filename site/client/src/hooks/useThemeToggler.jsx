import { useState } from "react";

export default function useThemeToggler(initial = false) {
  const [state, setState] = useState(initial);
  const toggler = () => {
    const body = document.querySelector("body");
    const themeBtn = document.querySelector("button").children;

    if (!state) {
      themeBtn[0].classList.toggle("hidden");
      themeBtn[1].classList.toggle("hidden");
      setState(1);
      body.classList = "";
    } else {
      themeBtn[0].classList.toggle("hidden");
      themeBtn[1].classList.toggle("hidden");
      setState(0);
      body.classList = "dark";
    }

    // setState(!state);
    // themeBtn[state ? 1 : 0].classList.toggle("hidden");
    // themeBtn[state ? 0 : 1].classList.toggle("hidden");
    // body.classList = state ? "dark" : "";
  };

  return [state, toggler];
}
