import { createContext, useEffect, useRef, useState } from "react";
import useThemeToggler from "../hooks/useThemeToggler";

export const ThemeContext = createContext();

export default function ThemeProvider(props) {
  // se initializeaza stateul cu tema intunecate ca default

  const [isLight, toggleTheme] = useState(false);
  const lightElement = useRef(null);
  const darkElement = useRef(null);
  useEffect(() => {
    // cand este randata componenta se verifica daca tema
    // preferata de sistem este cea light daca da se schimba state ul pt tema

    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      document.querySelector("body").classList = "";
      toggleTheme(true);
    } else {
      document.querySelector("body").classList = "dark";
    }
  }, []);

  const toggle = function () {
    const body = document.querySelector("body");

    if (isLight) {
      // else light trebuie sa se schimbe pe dark
      // se afiseaza luna si dispare soarele
      body.classList = "dark";
      toggleTheme(!isLight);
    } else {
      // este dark se schimba pe light
      // se afiseaza soarele si dispare luna
      body.classList = "";
      toggleTheme(!isLight);
    }
  };

  return (
    <ThemeContext.Provider value={{ isLight, toggle }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
