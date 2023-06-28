import React from "react";

export default function AccountSvg({ className, element }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 -960 960 960"
      ref={element}
    >
      <path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" />
    </svg>
  );
}
