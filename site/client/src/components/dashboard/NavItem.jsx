import React from "react";

export default function NavItem({ children }) {
  return (
    <li className="flex flex-col justify-center sm:mb-8 sm:w-full sm:last:mb-2 sm:last:mt-auto">
      {children}
    </li>
  );
}