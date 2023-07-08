import React from "react";
import { useNavigate } from "react-router-dom";

export default function ArrowBack({ width, height, className, children }) {
  const navigate = useNavigate();

  return (
    <div
      className={className}
      onClick={() => {
        navigate("/");
      }}
    >
      <svg
        viewBox="0 -960 960 960"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
      >
        <path d="M480-160L160-480l320-320 42 42-248 248h526v60H274l248 248-42 42z" />
      </svg>
      {children}
    </div>
  );
}
