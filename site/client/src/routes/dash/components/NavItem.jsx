import React from "react";

export default function NavItem({ children }) {
  return (
    <li className="ml-2 flex flex-col justify-center rounded-md  sm:mb-8 sm:w-full sm:last:mb-2 sm:last:mt-auto">
      {children}
    </li>
  );
}
