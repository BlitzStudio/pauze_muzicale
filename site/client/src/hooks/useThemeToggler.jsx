import { useState } from "react";

// cand se incarca aplicatio ar trebui sa vedem care este tema preferata
// light sau dark
// encodare light =1 dark =0
// dupa determinarea temei se alege svg ul corespunzator
// urmand ca tema sa fie aplicata la nivelul site ului
// pt light(body.classList="")
// pt dark(body.classList="dark")

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
