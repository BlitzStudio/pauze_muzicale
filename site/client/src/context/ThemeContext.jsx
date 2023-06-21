import { createContext, useEffect } from "react";
import useThemeToggler from "../hooks/useThemeToggler";

export const ThemeContext = createContext();

export default function ThemeProvider(props) {
  // se initializeaza stateul cu tema intunecate ca default

  const [isLight, ToggleTheme] = useThemeToggler(false);

  useEffect(() => {
    // cand este randata componenta se verifica daca tema
    // preferata de sistem este cea light daca da se schimba state ul pt tema

    if (!window.matchMedia("(prefers-color-scheme: dark)").matches) {
      ToggleTheme();
    } else {
      document.querySelector("body").classList = "dark";
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isLight, ToggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
