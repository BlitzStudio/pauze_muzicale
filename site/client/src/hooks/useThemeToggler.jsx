import { useState } from "react";

export default function useThemeToggler(initial = false) {
  const [state, setState] = useState(initial);
  const toggler = () => {
    const body = document.querySelector("body");

    const themeBtn = document.querySelector("button").children;

    if (!state) {
      // Light theme
      themeBtn[0].classList.toggle("hidden");
      themeBtn[1].classList.toggle("hidden");
      setState(1);
      body.classList = "";
    } else {
      // dark theme
      themeBtn[0].classList.toggle("hidden");
      themeBtn[1].classList.toggle("hidden");
      setState(0);
      body.classList = "dark";
    }
  };

  return [state, toggler];
}
