import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function useThemeToggler(initial = false) {
  return { ...useContext(ThemeContext) };
}
